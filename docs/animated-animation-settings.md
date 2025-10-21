---
id: animated-animation-settings
title: Animation Settings
---

Configure the core animation properties for your animated screenshots, including output format and duration.

## Output Format

### Format (`format`)
- **Default**: `gif`
- **Options**: `gif` (only format supported)
- **Example**: `format=gif`
- **Description**: Output animation format

## Animation Duration

### Duration (`duration`)
- **Default**: `5` seconds
- **Range**: 1-30 seconds
- **Example**: `duration=10`
- **Description**: Total recording length

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

### Extended Duration GIF
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&duration=15
```

### Clean GIF with Scrollbars Hidden
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&duration=10&hideScrollbars=true
```

## GIF Format

The animated screenshot endpoint produces GIF files with the following characteristics:

**Technical Specifications:**
- Universal compatibility across all platforms
- 256 color palette with dithering
- Automatic looping
- Optimized compression

**Best for:**
- Social media sharing
- Email newsletters
- Documentation and tutorials
- Website demonstrations
- Quick previews and prototypes

## Duration Guidelines

### Content-Based Duration

| Content Type | Recommended Duration | Reason |
|--------------|---------------------|---------|
| Landing pages | 5-8 seconds | Show key elements |
| Product demos | 10-15 seconds | Feature highlights |
| Tutorials | 15-25 seconds | Step-by-step process |
| Full page capture | 8-12 seconds | Complete page view |
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
    'documentation': 1.8
  }[contentType] || 1;

  return Math.min(30, baseDuration * heightFactor * typeMultiplier);
}
```

### Performance Optimization

```javascript
const presets = {
  preview: { duration: 5 },
  standard: { duration: 10 },
  quality: { duration: 15 },
  social: { duration: 8 }
};
```

## Best Practices

### 1. Optimize for Purpose

```
// Documentation
&duration=8

// Product demos
&duration=12

// Social media
&duration=10
```

### 2. Optimize for Platform

```javascript
const socialSettings = {
  duration: 8,
  hideScrollbars: true
};

const docSettings = {
  duration: 10,
  hideScrollbars: true
};
```

### 3. Consider File Size

```
// Smaller file size
&duration=6

// Balanced quality
&duration=8

// Maximum quality
&duration=15
```

### 4. Test Different Settings

```javascript
const testConfigs = [
  { duration: 10 },
  { duration: 8 },
  { duration: 12 }
];
```

## Best Practices by Use Case

### Documentation

```
&duration=8
```

### Product Demos

```
&duration=12
```

### Social Media

```
&duration=10
```

### Quick Previews

```
&duration=5
```

### Full Demonstrations

```
&duration=15
```

## Troubleshooting

### Large File Sizes
- Reduce duration
- Reduce viewport dimensions

### Playback Issues
- Ensure GIF players support looping
- Test file size limits on target platforms
- Verify browser compatibility

## See Also

- [Animated Viewport](animated-viewport.md) - Screen size and device settings
- [Animated Capture Behavior](animated-capture-behavior.md) - Timing and selection
- [Animated Page Interaction](animated-page-interaction.md) - Page modifications
