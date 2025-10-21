---
id: animated-viewport
title: Viewport & Device Options
---

Configure the screen dimensions and device emulation for animated screenshots. These settings determine how the page appears during recording.

## Viewport Configuration

### Viewport Width (`vw`)
- **Default**: `1440` pixels
- **Description**: Recording viewport width
- **Example**: `vw=1920`

### Viewport Height (`vh`)
- **Default**: `900` pixels
- **Description**: Recording viewport height
- **Example**: `vh=1080`

### Scale Factor (`scaleFactor`)
- **Default**: `1`
- **Description**: Device pixel ratio (DPR)
- **Example**: `scaleFactor=2`
- **Range**: 0.5-3 (typically 1-2)

## Device Emulation

### Emulate Device (`emulateDevice`)
- **Default**: None
- **Description**: Emulate specific device profile
- **Example**: `emulateDevice=iphone_15_pro`
- **Note**: Overrides viewport and scale settings

## Usage Examples

### Desktop Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&vw=1920&vh=1080
```

### Mobile Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&emulateDevice=iphone_15_pro
```

### High-DPI Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&vw=1440&vh=900&scaleFactor=2
```

### Tablet Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&emulateDevice=ipad_air&duration=10
```

## Common Viewport Sizes

### Desktop Resolutions

| Resolution | Width | Height | Use Case |
|------------|-------|--------|----------|
| HD | 1366 | 768 | Common laptop |
| Full HD | 1920 | 1080 | Desktop standard |
| MacBook Pro | 1440 | 900 | Retina display |

### Mobile Devices

| Device | Emulation Key |
|--------|---------------|
| iPhone 15 Pro | `iphone_15_pro` |
| iPhone SE | `iphone_se` |
| Pixel 8 | `pixel_8` |
| Galaxy S23 | `galaxy_s23` |
| iPad Air | `ipad_air` |
| iPad Pro 11 | `ipad_pro_11` |

## Getting Available Devices

To get the complete list of available devices with their specifications:

```bash
curl "https://edge.capture.page/screenshot/devices"
```

**Sample Response:**
```json
{
  "success": true,
  "count": 120,
  "devices": [
    {
      "name": "iPhone 15 Pro",
      "key": "iphone_15_pro",
      "viewport": {
        "width": 393,
        "height": 659,
        "deviceScaleFactor": 3
      }
    }
  ]
}
```

Use the `key` field as the value for the `emulateDevice` parameter.

## Scale Factor Considerations

Scale factor affects image quality and file size:

| Scale | Quality | File Size | Best For |
|-------|---------|-----------|----------|
| 1 | Standard | Small | Quick previews |
| 1.5 | Good | Medium | Some laptops |
| 2 | Excellent | Large | Retina displays |

## Responsive Testing

### Desktop Sizes
```
&vw=1366&vh=768  // Laptop
&vw=1920&vh=1080  // Desktop
```

### Mobile Sizes
```
&emulateDevice=iphone_15_pro  // iOS
&emulateDevice=pixel_8  // Android
```

### Tablet Sizes
```
&emulateDevice=ipad_air  // iPad
&emulateDevice=galaxy_tab_s9  // Android tablet
```

## Best Practices

### 1. Use Device Emulation for Mobile
```
// ✅ Good - uses device emulation
&emulateDevice=iphone_15_pro

// ❌ Avoid - manual viewport for mobile
&vw=393&vh=852&scaleFactor=3
```

### 2. Match Your Target Audience
- **Desktop-first**: Use 1920x1080 or 1440x900
- **Mobile-first**: Use iPhone or Pixel emulation
- **Responsive demos**: Create multiple recordings

### 3. Consider File Size
- Lower scale factor = smaller files
- Use scale factor 1 for quick previews
- Use scale factor 2 for production quality

### 4. Test Different Viewports
```javascript
const testViewports = [
  { vw: 1440, vh: 900 },
  { emulateDevice: 'iphone_15_pro' }
];
```

## Troubleshooting

### Content Cut Off
- Use larger viewport dimensions
- Use `fullPage=true` for complete content
- Check responsive design breakpoints

### Poor Mobile Rendering
- Use device emulation instead of manual viewport
- Verify mobile-optimized site version
- Check for mobile redirects

### File Size Too Large
- Reduce scale factor
- Use smaller viewport
- Shorter duration

## See Also

- [Animation Settings](animated-animation-settings.md) - Control output format and quality
- [Capture Behavior](animated-capture-behavior.md) - Timing and selection options
- [Screenshot Viewport](screenshot-viewport.md) - Static viewport configuration
