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
- **Range**: Any positive integer

### Viewport Height (`vh`)
- **Default**: `900` pixels
- **Description**: Recording viewport height
- **Example**: `vh=1080`
- **Range**: Any positive integer

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
- **Effect**: Overrides viewport and scale settings

## Usage Examples

### Desktop Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&vw=1920&vh=1080&format=mp4
```

### Mobile Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&emulateDevice=iphone_15_pro&format=mp4
```

### High-DPI Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&vw=1440&vh=900&scaleFactor=2&format=webm
```

### Tablet Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&emulateDevice=ipad_air&format=mp4&duration=10
```

## Common Viewport Sizes

### Desktop Resolutions

| Resolution | Width | Height | Use Case |
|------------|-------|--------|----------|
| HD | 1366 | 768 | Common laptop |
| Full HD | 1920 | 1080 | Desktop standard |
| MacBook Pro | 1440 | 900 | Retina display |
| 4K | 3840 | 2160 | Ultra HD |

### Usage Examples
```
// Standard laptop
&vw=1366&vh=768

// Full HD desktop
&vw=1920&vh=1080

// MacBook recording
&vw=1440&vh=900&scaleFactor=2
```

### Mobile Viewports

| Device | Width | Height | Scale | Emulation Key |
|--------|-------|--------|-------|---------------|
| iPhone 15 Pro | 393 | 852 | 3 | `iphone_15_pro` |
| iPhone SE | 375 | 667 | 2 | `iphone_se` |
| Pixel 8 | 412 | 915 | 3 | `pixel_8` |
| Galaxy S23 | 360 | 780 | 4 | `galaxy_s23` |

### Usage Examples
```
// Modern iPhone
&emulateDevice=iphone_15_pro

// Compact iPhone
&emulateDevice=iphone_se

// Android flagship
&emulateDevice=pixel_8
```

## Device Emulation Benefits

### Automatic Configuration
When using `emulateDevice`:
- Viewport dimensions set automatically
- Proper scale factor applied
- Authentic user agent string
- Touch events enabled
- Mobile-specific rendering

### Popular Devices

#### Smartphones
```
// Latest iPhones
&emulateDevice=iphone_15_pro_max  // 430×932, 3x
&emulateDevice=iphone_15_pro      // 393×852, 3x
&emulateDevice=iphone_15          // 393×852, 3x

// Android phones
&emulateDevice=pixel_8_pro        // 412×915, 3.5x
&emulateDevice=galaxy_s23_ultra   // 412×915, 3x
&emulateDevice=galaxy_s21         // 360×800, 3x
```

#### Tablets
```
// iPads
&emulateDevice=ipad_pro_12_9      // 1024×1366, 2x
&emulateDevice=ipad_air           // 820×1180, 2x
&emulateDevice=ipad_mini          // 768×1024, 2x

// Android tablets
&emulateDevice=pixel_tablet       // 800×1280, 2x
&emulateDevice=galaxy_tab_s9      // 800×1280, 2.25x
```

### Get Available Devices
```bash
curl "https://edge.capture.page/screenshot/devices"
```

## Recording Strategies

### Responsive Design Testing

#### Multiple Breakpoints
```javascript
const breakpoints = [
  { name: 'mobile', vw: 375, vh: 667 },
  { name: 'tablet', vw: 768, vh: 1024 },
  { name: 'desktop', vw: 1440, vh: 900 }
];

breakpoints.forEach(bp => {
  const url = `...&vw=${bp.vw}&vh=${bp.vh}&format=mp4&duration=8`;
  // Record each breakpoint
});
```

#### Device-Specific Recording
```javascript
const devices = [
  'iphone_15_pro',
  'ipad_air', 
  'desktop_hd'
];

devices.forEach(device => {
  const url = `...&emulateDevice=${device}&format=mp4&scrolling=true`;
  // Record each device
});
```

### App Demo Recording

#### Mobile App Landing
```
// iOS perspective
&emulateDevice=iphone_15_pro&format=mp4&duration=12&scrolling=true

// Android perspective  
&emulateDevice=pixel_8&format=mp4&duration=12&scrolling=true
```

#### Tablet App Demo
```
// iPad demo
&emulateDevice=ipad_pro_11&format=mp4&duration=15&fps=30

// Android tablet
&emulateDevice=galaxy_tab_s9&format=mp4&duration=15&fps=30
```

## Scale Factor Considerations

### Understanding Scale Factor

Scale factor affects:
- **Image clarity**: Higher = sharper
- **File size**: Higher = larger files
- **Processing time**: Higher = longer generation

### Common Scale Factors

| Scale | Use Case | Quality | File Size |
|-------|----------|---------|-----------|
| 1 | Standard displays | Good | Small |
| 1.5 | Some laptops | Better | Medium |
| 2 | Retina displays | Excellent | Large |
| 3 | Mobile devices | Ultra-sharp | Very large |

### Scale Factor Examples
```
// Standard quality
&vw=1920&vh=1080&scaleFactor=1

// Retina quality
&vw=1920&vh=1080&scaleFactor=2

// Mobile native
&vw=393&vh=852&scaleFactor=3  // iPhone 15 Pro native
```

## Performance Impact

### Viewport Size vs File Size

```javascript
// Calculate effective resolution
function getEffectiveResolution(vw, vh, scale) {
  return {
    width: vw * scale,
    height: vh * scale,
    totalPixels: vw * vh * scale * scale
  };
}

// Examples
getEffectiveResolution(1920, 1080, 1);  // 2.1M pixels
getEffectiveResolution(1920, 1080, 2);  // 8.3M pixels  
getEffectiveResolution(393, 852, 3);    // 10.1M pixels
```

### Optimization Strategies

#### For Performance
```
// Smaller viewport, standard scale
&vw=1366&vh=768&scaleFactor=1

// Use device emulation (optimized)
&emulateDevice=iphone_15
```

#### For Quality
```
// Large viewport, high scale
&vw=1920&vh=1080&scaleFactor=2

// Native device resolution
&emulateDevice=iphone_15_pro&fps=60
```

## Advanced Viewport Techniques

### Dynamic Viewport Selection

```javascript
// Choose viewport based on content
function selectViewport(contentType, audience) {
  if (audience === 'mobile-first') {
    return { emulateDevice: 'iphone_15_pro' };
  }
  
  if (contentType === 'dashboard') {
    return { vw: 1920, vh: 1080, scaleFactor: 1 };
  }
  
  if (contentType === 'presentation') {
    return { vw: 1440, vh: 900, scaleFactor: 2 };
  }
  
  return { vw: 1440, vh: 900, scaleFactor: 1 }; // Default
}
```

### Aspect Ratio Considerations

```javascript
// Common aspect ratios for animations
const aspectRatios = {
  '16:9': { vw: 1920, vh: 1080 },    // Video standard
  '4:3': { vw: 1024, vh: 768 },     // Traditional
  '21:9': { vw: 2560, vh: 1080 },   // Ultrawide
  '9:16': { vw: 1080, vh: 1920 }    // Vertical/Stories
};
```

### Content-Specific Viewports

```javascript
// Optimize viewport for content type
const contentViewports = {
  'landing-page': { vw: 1440, vh: 900 },
  'e-commerce': { emulateDevice: 'iphone_15_pro' },
  'dashboard': { vw: 1920, vh: 1080 },
  'documentation': { vw: 1366, vh: 768 },
  'mobile-app': { emulateDevice: 'pixel_8' }
};
```

## Best Practices

### 1. Match Target Audience

```
// B2B software (desktop focus)
&vw=1440&vh=900&scaleFactor=1

// Consumer mobile app
&emulateDevice=iphone_15_pro

// E-commerce (mobile-first)
&emulateDevice=pixel_8&format=mp4
```

### 2. Consider Platform Requirements

```javascript
// Social media (vertical)
const socialViewports = {
  instagram_story: { vw: 1080, vh: 1920 },
  tiktok: { vw: 1080, vh: 1920 },
  youtube_shorts: { vw: 1080, vh: 1920 }
};

// Documentation (readable)
const docViewports = {
  tutorial: { vw: 1366, vh: 768 },
  demo: { vw: 1440, vh: 900 }
};
```

### 3. Test Multiple Viewports

```javascript
// A/B test different viewports
const testViewports = [
  { vw: 1366, vh: 768 },
  { vw: 1440, vh: 900 },
  { emulateDevice: 'iphone_15_pro' }
];
```

### 4. Balance Quality vs Performance

```
// Quick previews
&vw=1366&vh=768&scaleFactor=1&fps=24

// Production quality
&vw=1920&vh=1080&scaleFactor=2&fps=30

// Mobile optimization
&emulateDevice=iphone_15&fps=30
```

## Troubleshooting

### Content Cut Off
- Use larger viewport dimensions
- Enable scrolling animation
- Check responsive design breakpoints

### Poor Mobile Rendering
- Use device emulation instead of manual viewport
- Verify mobile-optimized site version
- Check for mobile redirects

### File Size Too Large
- Reduce scale factor
- Use smaller viewport
- Lower frame rate
- Shorter duration

## See Also

- [Animation Settings](animated-animation-settings.md) - Control output format and quality
- [Capture Behavior](animated-capture-behavior.md) - Timing and selection options
- [Screenshot Viewport](screenshot-viewport.md) - Static viewport configuration