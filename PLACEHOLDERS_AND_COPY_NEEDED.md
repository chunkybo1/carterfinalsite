# Placeholders & Copywriting Needed

This document identifies all placeholder content, ambiguous text, and missing assets that need to be replaced with real copywriting and photos.

---

## 📸 **IMAGE PLACEHOLDERS**

### **Main Page (Home)**
2. **Carter Difference Section** (`/src/components/sections/CarterDifference.tsx`)
   - **Visual Placeholders** (3 needed):
     - `[Abstract: preparation]` - Visual for "RELENTLESS PREPARATION" pillar
     - `[Abstract: communication]` - Visual for "CLEAR COMMUNICATION" pillar
     - `[Abstract: investment]` - Visual for "PERSONAL INVESTMENT" pillar
   - **Current**: Text placeholders in boxes. Replace with actual images or graphics.

3. **Practice Areas Section** (`/src/components/sections/PracticeAreas.tsx`)
   - `/practice-areas/personal-injury.jpg`
   - `/practice-areas/car-accidents.jpg`
   - `/practice-areas/wrongful-death.jpg`
   - `/practice-areas/medical-malpractice.jpg`
   - `/practice-areas/workers-comp.jpg`
   - `/practice-areas/product-liability.jpg`
   - `/practice-areas/insurance-bad-faith.jpg`

4. **Videos** (Referenced but may be missing)
   - `/videos/hero-video.mp4` - Hero section background video
   - `/videos/practice-areas-video.mp4` - Practice areas background video

### **About Us Page**
5. **The Courtroom Education Section** (`/src/components/sections/about/TheCourtroomEducation.tsx`)
   - **Background Image**: Placeholder gradient with "COURTROOM" text overlay
   - **Needed**: Real courtroom interior photography (dark, cinematic)
   - **Current**: Shows "Interior Photography - Coming Soon"

6. **The Legacy Section** (`/src/components/sections/about/TheLegacy.tsx`)
   - **Archival Imagery Placeholder**: `[Archival imagery placeholder]`
   - **Needed**: Photo/documentation from 1990 ADA signing event (if available) or related archival imagery

7. **The Community Section** (`/src/components/sections/about/TheCommunity.tsx`)
   - **Photo Gallery**: 4 community photos needed
     - `[Community Photo 1]`
     - `[Community Photo 2]`
     - `[Community Photo 3]`
     - `[Community Photo 4]`
   - **Needed**: Real photos of Thomas Carter's community involvement, events, organizations

### **Other Sections**
8. **Attorneys Section** (`/src/components/sections/Attorneys.tsx`)
   - `/attorney-1.jpg` - Photo for "James Carter" (Founding Partner)
   - `/attorney-2.jpg` - Photo for "Sarah Carter" (Senior Partner)
   - `/attorney-3.jpg` - Photo for "Michael Carter" (Partner)
   - **Note**: Attorney names/bios may also be placeholders - verify if these are real team members.

9. **Legacy Section** (`/src/components/sections/Legacy.tsx`)
   - `[Image: Mr. Carter or Family of Lawyers]` - Large placeholder
   - **Needed**: Photo of Thomas Carter or multi-generational family photo

10. **News/Articles Section** (`/src/components/sections/News.tsx`)
    - `/article-1.jpg` - Article image for "Understanding Your Rights After a Truck Accident"
    - `/article-2.jpg` - Article image for "Workplace Injury Claims: What You Need to Know"
    - `/article-3.jpg` - Article image for "The Importance of Acting Quickly After an Injury"

11. **Case Types Section** (`/src/components/sections/CaseTypes.tsx`)
    - Currently using icon placeholders with colored backgrounds
    - **Optional Enhancement**: Replace with actual photos for each case type

12. **Testimonial Section** (`/src/components/sections/Testimonial.tsx`)
    - **Video Placeholder**: "Client Testimonial Video" text
    - **Needed**: Actual client testimonial video or thumbnail image

---

## ✍️ **COPYWRITING PLACEHOLDERS & AMBIGUOUS TEXT**

### **About Us Page**

1. **The Community Section** (`/src/components/sections/about/TheCommunity.tsx`)
   - **Line 67**: `[Placeholder for specific local connection details—native, long-term resident, what connects him to this specific place and its people. This section should feel grounded and specific, not abstract.]`
   - **Needed**: Specific, personal copy about Thomas Carter's connection to El Paso (e.g., born there, moved there, family history, specific neighborhoods, community ties)

2. **The Community Section - Organizations**
   - **Current**: Generic organization descriptions
   - **Verify**: Are these organizations accurate? Are the roles (Active Member, Board Member, etc.) correct?
   - Organizations listed:
     - El Paso Bar Association
     - Texas Trial Lawyers Association
     - El Paso Community Foundation
     - Personal Injury Advocacy Network

### **Attorneys Section** (`/src/components/sections/Attorneys.tsx`)
3. **Attorney Information**
   - **Names**: "James Carter", "Sarah Carter", "Michael Carter"
   - **Bios**: Generic descriptions
   - **Action Required**: 
     - Verify if these are real team members
     - If real: Update with accurate titles, years of experience, specific achievements
     - If placeholders: Replace with actual team member information

### **News/Articles Section** (`/src/components/sections/News.tsx`)
4. **Article Content**
   - **Current**: Article titles and excerpts are generic
   - **Action Required**: 
     - Verify if these articles exist
     - If real: Link to actual article pages
     - If placeholders: Replace with real blog posts or remove section

### **Contact Forms**
5. **Form Placeholders** (Multiple locations)
   - All forms use generic placeholder text like:
     - `"Your name"`, `"John Doe"`
     - `"(915) 555-1234"`, `"(555) 123-4567"`
     - `"your@email.com"`, `"john@example.com"`
     - `"Tell us about your accident..."`, `"Tell us briefly what happened..."`
   - **Status**: These are standard form placeholders (acceptable, but can be customized)

---

## 🎬 **VIDEO PLACEHOLDERS**

1. **Hero Section Video** (`/src/components/sections/hero-section.tsx`)
   - Path: `/videos/hero-video.mp4`
   - **Status**: Referenced but may be missing (404 errors in terminal)
   - **Needed**: High-quality background video for hero section

2. **Practice Areas Video** (`/src/components/sections/PracticeAreas.tsx`)
   - Path: `/videos/practice-areas-video.mp4`
   - **Status**: Referenced but may be missing (404 errors in terminal)
   - **Needed**: Background video for practice areas section

3. **Testimonial Video** (`/src/components/sections/Testimonial.tsx`)
   - **Current**: Text placeholder "Client Testimonial Video"
   - **Needed**: Actual client testimonial video or embed code

---

## 📋 **SUMMARY CHECKLIST**

### **High Priority (Visible on Main Pages)**
- [ ] Carter Difference visual placeholders (3 graphics/images)
- [ ] Practice areas background images (7 photos)
- [ ] Hero section video (`hero-video.mp4`)
- [ ] Practice areas video (`practice-areas-video.mp4`)
- [ ] The Community section - El Paso connection copy (specific, personal text)
- [ ] The Community section - 4 community photos
- [ ] The Courtroom Education section - courtroom interior photo

### **Medium Priority (About Page)**
- [ ] The Legacy section - archival imagery (1990 ADA signing)
- [ ] Verify/update attorney information (names, bios, photos)
- [ ] Verify/update community organization involvement details

### **Lower Priority (Optional/Enhancement)**
- [ ] News/Articles section - verify articles exist or remove
- [ ] Testimonial video - add real client testimonial
- [ ] Case Types section - consider replacing icons with photos
- [ ] Legacy section - family photo

---

## 📝 **NOTES**

- **Video Files**: Check if video files exist in `/public/videos/` directory. If missing, either add videos or update components to handle missing videos gracefully.
- **Attorney Section**: Verify if the three attorneys listed are real team members or placeholders. If placeholders, this entire section may need to be restructured.
- **Community Organizations**: Verify accuracy of organization names, roles, and descriptions.

---

**Last Updated**: Generated from codebase analysis
**Total Placeholders Identified**: 
- Images: ~20+ placeholder images
- Videos: 3 video placeholders
- Copywriting: 2 major text placeholders + multiple verification needs






