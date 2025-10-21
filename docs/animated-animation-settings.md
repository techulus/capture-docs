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

## Animation Duration

### Duration (`duration`)
- **Default**: `5` seconds
- **Range**: 1-30 seconds
- **Example**: `duration=10`

### Hide Scrollbars (`hideScrollbars`)
- **Default**: `true`
- **Description**: Hide scrollbars for cleaner output
- **Example**: `hideScrollbars=false`

## Usage Examples

### Basic GIF Animation
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&duration=8
```

### Extended Duration
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&duration=15
```

## GIF Format

The animated screenshot endpoint produces GIF files with the following characteristics:

- Universal compatibility across all platforms
- 256 color palette with dithering
- Automatic looping
- Optimized compression

**Best for**: Social media sharing, email newsletters, documentation and tutorials, website demonstrations

## Duration Guidelines

| Content Type | Recommended Duration |
|--------------|---------------------|
| Landing pages | 5-8 seconds |
| Product demos | 10-15 seconds |
| Tutorials | 15-25 seconds |
| Full page capture | 8-12 seconds |

## Best Practices

1. **Optimize Duration**: Shorter durations reduce credit usage and file size. Use 5-15 seconds for most use cases.

2. **File Size**: Shorter duration = smaller files. Reduce viewport dimensions if needed.

3. **Platform-Specific**: Consider your target platform (Twitter: 6s, Instagram: 15s, LinkedIn: 10s)

## See Also

- [Animated Viewport](animated-viewport.md) - Screen size and device settings
- [Animated Capture Behavior](animated-capture-behavior.md) - Timing and selection
- [Animated Page Interaction](animated-page-interaction.md) - Page modifications
