# Scroll Lag Root Cause Analysis

## Executive Summary
The main page experiences scroll lag due to multiple performance bottlenecks, primarily:
1. **Excessive IntersectionObserver instances** (224+ across 43 files)
2. **Continuous canvas animation** (GoldParticles)
3. **Multiple heavy video iframes** (YouTube embeds)
4. **Scroll event handlers** without proper throttling
5. **Multiple simultaneous Framer Motion animations**

---

## Critical Issues

### 1. **Excessive IntersectionObserver Usage** ⚠️ HIGH IMPACT
**Location**: 224 matches across 43 files using `useInView`, `whileInView`, `viewport`

**Problem**:
- Each `useInView` hook creates a separate IntersectionObserver instance
- During scroll, multiple observers fire simultaneously, causing layout thrashing
- Process.tsx creates 6+ observers (one per step + container)
- Biography, PracticeAreas, and other sections each create their own observers

**Evidence**:
```typescript
// Process.tsx - Creates 6+ observers
const imageInView = imageRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));
const stepInView = stepRefs.map((ref) => useInView(ref, { once: true, margin: "-20%" }));
```

**Impact**: High - Each observer callback triggers during scroll, causing reflows

---

### 2. **Continuous Canvas Animation (GoldParticles)** ⚠️ HIGH IMPACT
**Location**: `src/components/ui/GoldParticles.tsx`

**Problem**:
- Runs `requestAnimationFrame` continuously, even when not visible
- Canvas repaints on every frame (60fps)
- Mouse move listener triggers on every mouse movement
- No pause when section is out of viewport

**Code**:
```typescript
const animate = () => {
  // ... particle calculations and canvas drawing
  frameRef.current = requestAnimationFrame(animate);
};
animate(); // Runs forever
```

**Impact**: High - Constant CPU/GPU usage even when scrolling

---

### 3. **Multiple Heavy Video Iframes** ⚠️ MEDIUM-HIGH IMPACT
**Location**: 
- `src/components/sections/hero-section.tsx` (Hero section)
- `src/components/ui/VideoBackground.tsx` (PracticeAreas section)

**Problem**:
- Two YouTube iframes loading simultaneously
- Both have Ken Burns effect animations (scale transforms)
- Videos continue playing even when not in viewport
- No lazy loading or intersection-based pausing

**Impact**: Medium-High - Heavy DOM elements with continuous animations

---

### 4. **Header Scroll Event Handler** ⚠️ MEDIUM IMPACT
**Location**: `src/components/layout/Header.tsx` (lines 33-75)

**Problem**:
- Uses `requestAnimationFrame` but still processes on every scroll event
- Multiple state updates (`setHasScrolled`, `setIsHeaderVisible`)
- Combines with `useScroll` and `useTransform` from Framer Motion
- Scroll listener not debounced/throttled beyond RAF

**Code**:
```typescript
const handleScroll = () => {
  if (rafId !== null) return;
  rafId = requestAnimationFrame(() => {
    // Multiple state updates
    setHasScrolled(true/false);
    setIsHeaderVisible(true/false);
    // ...
  });
};
```

**Impact**: Medium - State updates trigger re-renders during scroll

---

### 5. **Multiple Simultaneous Framer Motion Animations** ⚠️ MEDIUM IMPACT
**Location**: Multiple components

**Problem**:
- Many components use `whileInView` which creates observers
- PracticeAreas has 7 cards animating simultaneously
- Process section has 3 images + 3 content blocks animating
- All trigger during scroll, causing layout recalculations

**Impact**: Medium - Animation calculations during scroll

---

### 6. **Excessive GPU Acceleration (will-change overuse)** ⚠️ LOW-MEDIUM IMPACT
**Location**: Multiple files (48 matches)

**Problem**:
- Many elements use `will-change: transform` and `translateZ(0)`
- While GPU acceleration is good, too many layers can cause issues
- Some elements use `will-change-auto` which is less optimal

**Impact**: Low-Medium - Can cause memory issues on lower-end devices

---

## Performance Metrics (Estimated)

| Issue | Observer Count | FPS Impact | CPU Impact |
|-------|---------------|------------|------------|
| IntersectionObservers | 224+ instances | -15-20 FPS | High |
| GoldParticles | Continuous | -5-10 FPS | Medium |
| Video Iframes | 2 active | -3-5 FPS | Medium |
| Header Scroll | Every scroll | -2-3 FPS | Low |
| Framer Motion | Multiple | -3-5 FPS | Medium |

**Total Estimated Impact**: 25-40 FPS drop during scroll

---

## Recommended Fixes (Priority Order)

### Priority 1: Critical Fixes

1. **Consolidate IntersectionObservers**
   - Create a single shared observer context
   - Batch visibility checks
   - Use `once: true` more aggressively

2. **Pause GoldParticles when not visible**
   - Add intersection observer to pause animation
   - Only animate when hero section is in viewport

3. **Lazy load/pause videos**
   - Pause videos when out of viewport
   - Use `loading="lazy"` for iframes
   - Consider using poster images initially

### Priority 2: Important Fixes

4. **Optimize Header scroll handler**
   - Debounce/throttle more aggressively
   - Use CSS transforms instead of state updates where possible
   - Consider using `position: sticky` with CSS-only transitions

5. **Reduce simultaneous animations**
   - Stagger animations more
   - Use CSS animations for simple transitions
   - Disable animations on scroll (use `prefers-reduced-motion`)

6. **Optimize will-change usage**
   - Remove `will-change-auto` (not effective)
   - Only apply `will-change` to actively animating elements
   - Remove after animation completes

### Priority 3: Nice-to-Have

7. **Virtualize long lists** (if applicable)
8. **Code split heavy components**
9. **Optimize images** (Next.js Image is already used, but check sizes)

---

## Quick Wins

1. **Add `once: true` to all `useInView` hooks** - Prevents re-triggering
2. **Pause GoldParticles on scroll** - Immediate FPS improvement
3. **Add `loading="lazy"` to iframes** - Reduces initial load
4. **Use `prefers-reduced-motion`** - Respects user preferences

---

## Testing Recommendations

1. Use Chrome DevTools Performance tab
2. Record scroll performance
3. Check FPS during scroll (should be 60fps)
4. Monitor main thread blocking
5. Check memory usage (GPU layers)

---

## Files Requiring Immediate Attention

1. `src/components/ui/GoldParticles.tsx` - Add visibility check
2. `src/components/sections/Process.tsx` - Consolidate observers
3. `src/components/layout/Header.tsx` - Optimize scroll handler
4. `src/components/sections/hero-section.tsx` - Pause video when not visible
5. `src/components/ui/VideoBackground.tsx` - Add lazy loading




