# Video Setup Instructions

## Overview
The site has been converted from YouTube embeds to self-hosted HTML5 video for better performance.

## Required Video Files

You need to add the following video files to the `/public/videos/` directory:

1. **Hero Section Video**: `/public/videos/hero-video.mp4`
   - Used in: `src/components/sections/hero-section.tsx`
   - Recommended: 1080p MP4, optimized for web (H.264 codec)
   - Aspect ratio: 16:9

2. **Practice Areas Background Video**: `/public/videos/practice-areas-video.mp4`
   - Used in: `src/components/ui/VideoBackground.tsx` (used by PracticeAreas section)
   - Recommended: 1080p MP4, optimized for web (H.264 codec)
   - Aspect ratio: 16:9

## Video Optimization Tips

For best performance, optimize your videos:

1. **Resolution**: 1920x1080 (1080p) is recommended
2. **Codec**: H.264 (MP4) for maximum compatibility
3. **Bitrate**: 5-8 Mbps for good quality/size balance
4. **File Size**: Aim for 10-20 MB per video if possible
5. **Duration**: Keep videos under 60 seconds for background loops

### Tools for Optimization:
- **HandBrake**: Free, open-source video transcoder
- **FFmpeg**: Command-line tool for video processing
- **Cloudflare Stream**: If you need a CDN solution

### Example FFmpeg command:
```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k -movflags +faststart output.mp4
```

## Multiple Format Support (Optional)

For better browser compatibility, you can provide multiple formats:

```tsx
<HTML5Video
  videoSrc={[
    "/videos/hero-video.webm",  // WebM for modern browsers
    "/videos/hero-video.mp4"     // MP4 fallback
  ]}
  // ... other props
/>
```

## Features Implemented

✅ Autoplay (muted for browser compatibility)
✅ Loop playback
✅ Mute/unmute controls (Hero section)
✅ Ken Burns effect (subtle zoom animation)
✅ Pause when not visible (performance optimization)
✅ Responsive sizing
✅ GPU acceleration
✅ Lazy loading (metadata preload)

## Performance Benefits

- **No third-party JavaScript**: Removed ~200-300KB of YouTube JS
- **Faster initial load**: Native video element loads faster
- **Better mobile performance**: Native video is more efficient
- **Full control**: No autoplay restrictions or API delays
- **Reduced scroll lag**: No iframe overhead

## Testing

After adding your video files:

1. Test autoplay on different browsers
2. Verify mute/unmute button works (Hero section)
3. Check video pauses when scrolling away (if `pauseWhenNotVisible` is enabled)
4. Verify responsive sizing on mobile devices
5. Test Ken Burns effect animation

## Troubleshooting

**Video doesn't autoplay:**
- Ensure video starts muted (`muted={true}`)
- Check browser autoplay policies
- Verify video file is accessible at the specified path

**Video doesn't loop:**
- Check `loop={true}` prop is set
- Verify video file format supports looping

**Performance issues:**
- Optimize video file size
- Consider using WebM format for smaller files
- Ensure CDN is serving videos efficiently
