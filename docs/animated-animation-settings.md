---
id: animated-animation-settings
title: Animation Settings
---

Configure the core animation properties for your animated screenshots, including output format, duration, frame rate, and scrolling behavior.

## Output Format

### Format (`format`)
- **Default**: `mp4`
- **Options**: `gif`, `mp4`, `webm`
- **Example**: `format=gif`
- **Description**: Output video/animation format

## Animation Duration & Quality

### Duration (`duration`)
- **Default**: `5` seconds
- **Range**: 1-30 seconds
- **Example**: `duration=10`
- **Description**: Total recording length

### Frame Rate (`fps`)
- **Default**: `30` frames per second
- **Range**: 5-60 fps
- **Example**: `fps=24`
- **Note**: GIF format limited to 30fps maximum

## Scrolling Animation

### Scrolling (`scrolling`)
- **Default**: `false`
- **Description**: Enable automatic page scrolling
- **Example**: `scrolling=true`
- **Effect**: Smoothly scrolls through page content

### Scroll Speed (`scrollSpeed`)
- **Default**: `200` pixels
- **Range**: 50-1000 pixels per scroll step
- **Example**: `scrollSpeed=500`
- **Note**: Only applies when `scrolling=true`

### Hide Scrollbars (`hideScrollbars`)
- **Default**: `true`
- **Description**: Hide scrollbars for cleaner output
- **Example**: `hideScrollbars=false`
- **Recommended**: Keep `true` for professional appearance

## Usage Examples

### Basic GIF Animation
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&format=gif&duration=8
```

### High-Quality MP4
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&format=mp4&duration=15&fps=60
```

### Scrolling GIF
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&format=gif&duration=12&scrolling=true&scrollSpeed=300
```

### Optimized WebM
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&format=webm&duration=10&fps=30&hideScrollbars=true
```

## Format Comparison

### GIF Format
```
&format=gif
```
**Characteristics:**
- Universal compatibility
- Limited to 30fps
- Larger file sizes
- 256 color palette
- Automatic looping

**Best for:**
- Social media sharing
- Email newsletters
- Documentation GIFs
- Quick previews

**File Size:** Largest
**Quality:** Good for simple animations

### MP4 Format
```
&format=mp4
```
**Characteristics:**
- High compression efficiency
- Up to 60fps support
- Full color spectrum
- H.264 codec with yuv420p
- Excellent quality-to-size ratio

**Best for:**
- Video platforms
- Website embedding
- High-quality animations
- Mobile playback

**File Size:** Medium
**Quality:** Excellent

### WebM Format
```
&format=webm
```
**Characteristics:**
- Modern web optimization
- VP9 codec
- Smallest file sizes
- Up to 60fps support
- Best compression

**Best for:**
- Modern web browsers
- Bandwidth optimization
- Progressive web apps
- High-performance sites

**File Size:** Smallest
**Quality:** Excellent

## Duration Guidelines

### Content-Based Duration

| Content Type | Recommended Duration | Reason |
|--------------|---------------------|---------|
| Landing pages | 5-8 seconds | Show key elements |
| Product demos | 10-15 seconds | Feature highlights |
| Tutorials | 15-25 seconds | Step-by-step process |
| Full page scroll | 8-12 seconds | Complete page view |
| App interactions | 5-10 seconds | User flow demo |

### Platform-Specific

```javascript
// Social media optimized
const socialDurations = {
  twitter: 6,      // Twitter video limit preference
  instagram: 15,   // Instagram story length
  linkedin: 10,    // Professional content
  facebook: 8      // Attention span optimization
};

// Documentation
const docDurations = {
  quickDemo: 5,
  tutorial: 15,
  overview: 10,
  comparison: 12
};
```

## Frame Rate Optimization

### FPS Selection Guide

#### Low FPS (5-15)
```
&fps=12
```
- Smallest file sizes
- Slideshow-like effect
- Good for static content changes
- Documentation screenshots

#### Medium FPS (20-30)
```
&fps=24  // Cinematic standard
&fps=30  // Standard video
```
- Balanced quality/size
- Smooth animations
- Most common choice
- Good for most content

#### High FPS (45-60)
```
&fps=60
```
- Smoothest motion
- Largest file sizes
- Gaming/interactive demos
- High-motion content

### Format-Specific FPS

```javascript
// Optimal FPS by format
const optimalFPS = {
  gif: 24,    // Limited to 30fps max
  mp4: 30,    // Standard video
  webm: 30    // Balanced performance
};

// High-quality variants
const highQualityFPS = {
  gif: 30,    // Maximum for GIF
  mp4: 60,    // Smooth motion
  webm: 60    // Best quality
};
```

## Scrolling Configuration

### Automatic Scrolling

```
// Enable smooth scrolling
&scrolling=true&scrollSpeed=200

// Faster scrolling for long pages
&scrolling=true&scrollSpeed=400

// Slower, detailed scrolling
&scrolling=true&scrollSpeed=100
```

### Scroll Speed Calculation

```javascript
// Calculate optimal scroll speed
function calculateScrollSpeed(pageHeight, duration, fps) {
  const totalFrames = duration * fps;
  const pixelsPerFrame = pageHeight / totalFrames;
  
  // Ensure smooth scrolling (50-1000 range)
  return Math.max(50, Math.min(1000, pixelsPerFrame * 3));
}

// Example: 3000px page, 10s duration, 30fps
const speed = calculateScrollSpeed(3000, 10, 30); // ~300px
```

### Scrolling Patterns

```
// Full page scroll
&scrolling=true&duration=10&scrollSpeed=250

// Slow reveal scroll
&scrolling=true&duration=15&scrollSpeed=150

// Quick overview scroll
&scrolling=true&duration=6&scrollSpeed=500
```

## Advanced Animation Techniques

### Dynamic Duration

```javascript
// Adjust duration based on content
function calculateDuration(pageHeight, contentType) {
  const baseDuration = 5;
  
  // Adjust for page length
  const heightFactor = Math.min(pageHeight / 1000, 3);
  
  // Adjust for content type
  const typeMultiplier = {
    'landing': 1,
    'tutorial': 2,
    'demo': 1.5,
    'scroll': 1.8
  }[contentType] || 1;
  
  return Math.min(30, baseDuration * heightFactor * typeMultiplier);
}
```

### Format Selection Logic

```javascript
// Choose optimal format based on use case
function selectFormat(useCase, quality, compatibility) {
  if (compatibility === 'maximum') return 'gif';
  if (quality === 'highest' && useCase === 'demo') return 'mp4';
  if (useCase === 'web' && quality === 'good') return 'webm';
  return 'mp4'; // Default
}
```

### Performance Optimization

```javascript
// Balance quality vs file size
const presets = {
  preview: { format: 'gif', duration: 5, fps: 15 },
  standard: { format: 'mp4', duration: 10, fps: 30 },
  quality: { format: 'webm', duration: 15, fps: 60 },
  social: { format: 'mp4', duration: 8, fps: 24 }
};
```

## Best Practices

### 1. Match Format to Purpose

```
// Documentation
&format=gif&duration=8&fps=24

// Product demos
&format=mp4&duration=12&fps=30

// Web optimization
&format=webm&duration=10&fps=30
```

### 2. Optimize for Platform

```javascript
// Social media
const socialSettings = {
  format: 'mp4',
  duration: 8,
  fps: 30,
  scrolling: false
};

// Documentation
const docSettings = {
  format: 'gif',
  duration: 10,
  fps: 24,
  scrolling: true,
  scrollSpeed: 200
};
```

### 3. Consider Bandwidth

```
// High bandwidth
&format=mp4&duration=15&fps=60

// Limited bandwidth
&format=webm&duration=8&fps=24

// Maximum compatibility
&format=gif&duration=6&fps=15
```

### 4. Test Different Settings

```javascript
// A/B test configurations
const testConfigs = [
  { format: 'mp4', duration: 10, fps: 30 },
  { format: 'webm', duration: 10, fps: 30 },
  { format: 'gif', duration: 8, fps: 24 }
];
```

## Troubleshooting

### Large File Sizes
- Reduce duration
- Lower frame rate
- Use WebM format
- Disable scrolling for static content

### Poor Quality
- Increase frame rate
- Use MP4 or WebM format
- Ensure adequate duration
- Check source content quality

### Compatibility Issues
- Use GIF for maximum compatibility
- Test across target browsers
- Consider fallback formats

## See Also

- [Animated Viewport](animated-viewport.md) - Screen size and device settings
- [Animated Capture Behavior](animated-capture-behavior.md) - Timing and selection
- [Animated Page Interaction](animated-page-interaction.md) - Page modifications