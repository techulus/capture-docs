---
id: animated-animation-settings
title: Animation Settings
---

Configure the core animation properties for your animated screenshots, including output format, duration, frame rate, and scrolling behavior.

## Output Format

### Format (`format`)
- **Default**: `gif`
- **Options**: `gif` (only format supported)
- **Example**: `format=gif`
- **Description**: Output animation format

## Animation Duration & Quality

### Duration (`duration`)
- **Default**: `5` seconds
- **Range**: 1-30 seconds
- **Example**: `duration=10`
- **Description**: Total recording length

### Frame Rate (`fps`)
- **Default**: `30` frames per second
- **Range**: 5-30 fps
- **Example**: `fps=24`
- **Note**: Maximum 30fps for GIF format

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
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&duration=8
```

### High Frame Rate GIF
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&duration=15&fps=30
```

### Scrolling GIF
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&duration=12&scrolling=true&scrollSpeed=300
```

### Clean GIF with Scrollbars Hidden
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&duration=10&fps=30&hideScrollbars=true
```

## GIF Format

The animated screenshot endpoint produces GIF files with the following characteristics:

**Technical Specifications:**
- Universal compatibility across all platforms
- Maximum 30fps frame rate
- 256 color palette with dithering
- Automatic looping
- Optimized compression

**Best for:**
- Social media sharing
- Email newsletters
- Documentation and tutorials
- Website demonstrations
- Quick previews and prototypes

**Quality Optimization:**
- Use 24-30fps for smooth animations
- Lower fps (12-18) for smaller file sizes
- Adjust duration to balance quality and file size

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

#### Maximum FPS (30)
```
&fps=30
```
- Smoothest GIF animation
- Standard for most content
- Good quality-to-size ratio
- Recommended for dynamic content

### Optimal FPS for GIF

```javascript
const optimalFPS = {
  smooth: 30,      // Maximum fps, smoothest animation
  balanced: 24,    // Good balance of quality and size
  efficient: 18,   // Smaller file size, still smooth
  minimal: 12      // Smallest files, adequate for simple content
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

### FPS Selection Logic

```javascript
function selectFPS(contentType, fileSize Priority) {
  if (fileSizePriority === 'small') return 12;
  if (contentType === 'documentation') return 18;
  if (contentType === 'demo' || contentType === 'tutorial') return 24;
  return 30;
}
```

### Performance Optimization

```javascript
const presets = {
  preview: { duration: 5, fps: 15 },
  standard: { duration: 10, fps: 24 },
  quality: { duration: 15, fps: 30 },
  social: { duration: 8, fps: 24 }
};
```

## Best Practices

### 1. Optimize for Purpose

```
// Documentation
&duration=8&fps=24

// Product demos
&duration=12&fps=30

// Social media
&duration=10&fps=24
```

### 2. Optimize for Platform

```javascript
const socialSettings = {
  duration: 8,
  fps: 30,
  scrolling: false
};

const docSettings = {
  duration: 10,
  fps: 24,
  scrolling: true,
  scrollSpeed: 200
};
```

### 3. Consider File Size

```
// Smaller file size
&duration=6&fps=15

// Balanced quality
&duration=8&fps=24

// Maximum quality
&duration=15&fps=30
```

### 4. Test Different Settings

```javascript
const testConfigs = [
  { duration: 10, fps: 30 },
  { duration: 10, fps: 24 },
  { duration: 8, fps: 18 }
];
```

## Troubleshooting

### Large File Sizes
- Reduce duration
- Lower frame rate (try 18 or 24 fps)
- Disable scrolling for static content
- Reduce viewport dimensions

### Poor Quality
- Increase frame rate to 30fps
- Ensure adequate duration
- Check source content quality
- Verify content has sufficient contrast

### Playback Issues
- Ensure GIF players support looping
- Test file size limits on target platforms
- Verify browser compatibility

## See Also

- [Animated Viewport](animated-viewport.md) - Screen size and device settings
- [Animated Capture Behavior](animated-capture-behavior.md) - Timing and selection
- [Animated Page Interaction](animated-page-interaction.md) - Page modifications