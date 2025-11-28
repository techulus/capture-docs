---
id: animated-animation-settings
title: Animation Settings
---

Configure the core animation properties for your animated screenshots, including output format and duration.

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

## See Also

- [Animated Viewport](animated-viewport.md) - Screen size and device settings
- [Animated Capture Behavior](animated-capture-behavior.md) - Timing and selection
- [Animated Page Interaction](animated-page-interaction.md) - Page modifications
