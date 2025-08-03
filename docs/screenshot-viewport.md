---
id: screenshot-viewport
title: Viewport Configuration
---

The viewport defines the visible area of the web page that will be captured in your screenshot. Properly configuring the viewport is crucial for capturing web pages exactly as they appear on different devices and screen sizes.

## Viewport Parameters

### Width (`vw`)
- **Default**: `1440` pixels
- **Description**: Sets the viewport width in pixels
- **Range**: Any positive integer value
- **Example**: `vw=1920` for Full HD width

### Height (`vh`)
- **Default**: `900` pixels
- **Description**: Sets the viewport height in pixels
- **Range**: Any positive integer value
- **Example**: `vh=1080` for Full HD height

### Scale Factor (`scaleFactor`)
- **Default**: `1`
- **Description**: Device pixel ratio (DPR) that affects the pixel density
- **Range**: Typically between 1 and 3
- **Common Values**:
  - `1` - Standard resolution (non-retina)
  - `2` - High resolution (retina displays)
  - `3` - Ultra-high resolution (modern mobile devices)

## Usage Examples

### Standard Desktop Screenshot
```
https://cdn.capture.page/YOUR_API_KEY/HASH/image?url=https://example.com&vw=1920&vh=1080
```

### Mobile-sized Screenshot
```
https://cdn.capture.page/YOUR_API_KEY/HASH/image?url=https://example.com&vw=375&vh=667
```

### High-DPI Screenshot
```
https://cdn.capture.page/YOUR_API_KEY/HASH/image?url=https://example.com&vw=1440&vh=900&scaleFactor=2
```

## Common Viewport Sizes

### Desktop Resolutions
| Resolution | Width | Height | Use Case |
|------------|-------|--------|----------|
| HD | 1366 | 768 | Most common laptop resolution |
| Full HD | 1920 | 1080 | Standard desktop monitor |
| 2K | 2560 | 1440 | High-end monitors |
| 4K | 3840 | 2160 | Ultra HD displays |

### Mobile Resolutions
| Device Type | Width | Height | Scale Factor |
|-------------|-------|--------|--------------|
| iPhone SE | 375 | 667 | 2 |
| iPhone 14 | 390 | 844 | 3 |
| iPhone 14 Plus | 428 | 926 | 3 |
| Pixel 5 | 393 | 851 | 2.75 |
| Samsung Galaxy S21 | 360 | 800 | 3 |

### Tablet Resolutions
| Device Type | Width | Height | Scale Factor |
|-------------|-------|--------|--------------|
| iPad Mini | 768 | 1024 | 2 |
| iPad Air | 820 | 1180 | 2 |
| iPad Pro 11" | 834 | 1194 | 2 |
| iPad Pro 12.9" | 1024 | 1366 | 2 |

## Best Practices

### 1. Match Target Audience
Choose viewport dimensions that match your target audience's most common devices. Use analytics data to determine the most popular screen sizes among your users.

### 2. Consider Responsive Breakpoints
Test your website at common responsive design breakpoints:
- Mobile: 320-768px
- Tablet: 768-1024px
- Desktop: 1024px and above

### 3. Scale Factor Considerations
- Use `scaleFactor=1` for faster processing and smaller file sizes
- Use `scaleFactor=2` or higher for crisp, high-quality screenshots
- Higher scale factors increase processing time and file size

### 4. Viewport vs Full Page
Remember that viewport settings only affect the visible area. To capture the entire page height, use the `full=true` parameter along with your viewport settings.

## Advanced Tips

### Testing Responsive Design
Create multiple screenshots at different viewport sizes to test responsive behavior:

```javascript
const viewports = [
  { width: 320, height: 568 },  // Mobile
  { width: 768, height: 1024 }, // Tablet
  { width: 1920, height: 1080 } // Desktop
];

viewports.forEach(vp => {
  const url = `https://cdn.capture.page/KEY/HASH/image?url=site.com&vw=${vp.width}&vh=${vp.height}`;
  // Generate screenshot URL
});
```

### Simulating Device Pixel Ratios
To accurately simulate how your site appears on high-DPI displays:

```
// Standard display
&vw=1920&vh=1080&scaleFactor=1

// Retina display
&vw=1920&vh=1080&scaleFactor=2

// Mobile with high DPI
&vw=375&vh=667&scaleFactor=3
```

## Relationship with Other Options

- **Device Emulation**: When using `emulateDevice`, viewport settings are automatically configured
- **Full Page Capture**: Viewport width affects the layout when using `full=true`
- **Clipping**: Viewport defines the default capture area when no clipping is specified

## Performance Considerations

- Larger viewports require more memory and processing time
- High scale factors multiply the effective resolution (e.g., 1920x1080 at scale 2 = 3840x2160 pixels)
- Consider using smaller viewports with clipping for specific page sections

## See Also

- [Device Emulation](screenshot-device-emulation.md) - Automatically configure viewport for specific devices
- [Capture Area & Selection](screenshot-capture-area.md) - Capture specific parts of the page
- [Output Options](screenshot-output-options.md) - Resize images after capture