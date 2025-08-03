---
id: screenshot-device-emulation
title: Device Emulation
---

Capture screenshots exactly as they would appear on specific mobile devices, tablets, and other form factors. Device emulation automatically configures viewport, user agent, touch capabilities, and pixel density to match real devices.

## Device Emulation Parameter

### emulateDevice (`emulateDevice`)
- **Default**: None
- **Description**: Emulates a specific device profile
- **Example**: `emulateDevice=iphone_15_pro`
- **Effect**: Overrides viewport, user agent, and scale factor settings

## How to Use Device Emulation

### Get Available Devices
Retrieve the complete list of supported devices:
```bash
curl "https://edge.capture.page/screenshot/devices"
```

### Use Device Key
Apply the device key from the API response:
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=iphone_15_pro
```

## Device Categories

### Smartphones

#### iPhone Models
| Device | Key | Screen Size | Scale Factor |
|--------|-----|-------------|--------------|
| iPhone 15 Pro Max | `iphone_15_pro_max` | 430×932 | 3 |
| iPhone 15 Pro | `iphone_15_pro` | 393×852 | 3 |
| iPhone 15 | `iphone_15` | 393×852 | 3 |
| iPhone 14 | `iphone_14` | 390×844 | 3 |
| iPhone SE | `iphone_se` | 375×667 | 2 |
| iPhone 13 mini | `iphone_13_mini` | 375×812 | 3 |

#### Android Phones
| Device | Key | Screen Size | Scale Factor |
|--------|-----|-------------|--------------|
| Pixel 8 Pro | `pixel_8_pro` | 412×915 | 3.5 |
| Pixel 8 | `pixel_8` | 412×915 | 3 |
| Pixel 7 | `pixel_7` | 412×915 | 2.625 |
| Samsung Galaxy S23 | `galaxy_s23` | 360×780 | 4 |
| Samsung Galaxy S21 | `galaxy_s21` | 360×800 | 3 |

### Tablets

#### iPad Models
| Device | Key | Screen Size | Scale Factor |
|--------|-----|-------------|--------------|
| iPad Pro 12.9" | `ipad_pro_12_9` | 1024×1366 | 2 |
| iPad Pro 11" | `ipad_pro_11` | 834×1194 | 2 |
| iPad Air | `ipad_air` | 820×1180 | 2 |
| iPad 10th Gen | `ipad_10` | 810×1080 | 2 |
| iPad Mini | `ipad_mini` | 768×1024 | 2 |

#### Android Tablets
| Device | Key | Screen Size | Scale Factor |
|--------|-----|-------------|--------------|
| Pixel Tablet | `pixel_tablet` | 800×1280 | 2 |
| Galaxy Tab S9 | `galaxy_tab_s9` | 800×1280 | 2.25 |
| Galaxy Tab A8 | `galaxy_tab_a8` | 800×1280 | 1.75 |

### Other Devices
| Device | Key | Screen Size | Scale Factor |
|--------|-----|-------------|--------------|
| Desktop HD | `desktop_hd` | 1920×1080 | 1 |
| Desktop 4K | `desktop_4k` | 3840×2160 | 1 |
| Laptop | `laptop` | 1366×768 | 1 |
| Surface Pro | `surface_pro` | 1368×912 | 2 |

## Usage Examples

### Mobile Screenshot
iPhone 15 Pro screenshot:
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=iphone_15_pro
```

### Tablet Screenshot
iPad Air in landscape:
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=ipad_air_landscape
```

### Responsive Testing
Test multiple devices:
```javascript
const devices = ['iphone_15', 'ipad_air', 'desktop_hd'];

devices.forEach(device => {
  const url = `https://cdn.capture.page/KEY/HASH/image?url=site.com&emulateDevice=${device}`;
  // Generate screenshots for each device
});
```

## Device Properties

### Automatic Configuration
When using device emulation, these properties are automatically set:

1. **Viewport Dimensions**
   - Width and height match device screen
   - Proper orientation (portrait/landscape)

2. **User Agent String**
   - Authentic user agent for the device
   - Includes OS version and browser info

3. **Device Scale Factor**
   - Correct pixel density (DPR)
   - Ensures crisp rendering on high-DPI screens

4. **Touch Capabilities**
   - `hasTouch`: Enable touch events
   - `isMobile`: Mobile viewport behavior

5. **Device Metrics**
   - Screen orientation
   - Device type detection
   - Platform-specific features

## Common Use Cases

### Mobile App Landing Pages
Test how app store landing pages appear:
```
// iOS App Store appearance
&emulateDevice=iphone_15_pro

// Google Play Store appearance
&emulateDevice=pixel_8
```

### Responsive Design Testing
Verify responsive breakpoints:
```
// Mobile breakpoint
&emulateDevice=iphone_15

// Tablet breakpoint
&emulateDevice=ipad_air

// Desktop view
&emulateDevice=desktop_hd
```

### Social Media Preview
Check how content appears on mobile social apps:
```
// Instagram mobile view
&emulateDevice=iphone_14&waitFor=.instagram-embed

// Twitter mobile view
&emulateDevice=pixel_7&selector=.tweet-container
```

### E-commerce Mobile Experience
```
// Product page on mobile
&emulateDevice=galaxy_s23&waitFor=.product-gallery

// Checkout flow on tablet
&emulateDevice=ipad_pro_11&selector=.checkout-form
```

## Advanced Techniques

### Landscape Orientation
Many devices support landscape mode:
```
// Portrait (default)
&emulateDevice=iphone_15_pro

// Landscape
&emulateDevice=iphone_15_pro_landscape
```

### Combining with Other Options

#### With Page Enhancements
```
// Mobile dark mode
&emulateDevice=iphone_15&darkMode=true

// Tablet without ads
&emulateDevice=ipad_air&blockAds=true
```

#### With Timing Options
```
// Wait for mobile menu
&emulateDevice=pixel_8&waitFor=.mobile-nav

// Delay for animations
&emulateDevice=galaxy_s21&delay=2
```

#### With Selection
```
// Capture mobile header only
&emulateDevice=iphone_14&selector=header

// Specific mobile component
&emulateDevice=pixel_7&selectorId=mobile-carousel
```

## Best Practices

### 1. Test Key Devices
Focus on your audience's most-used devices:
```javascript
// Analytics-driven device selection
const topDevices = [
  'iphone_15',      // 35% of mobile traffic
  'iphone_14',      // 25% of mobile traffic
  'galaxy_s23',     // 20% of mobile traffic
  'ipad_air'        // 15% of tablet traffic
];
```

### 2. Consider Network Conditions
Mobile devices often have slower connections:
```
// Allow extra time for mobile loading
&emulateDevice=iphone_15&delay=3

// Wait for lazy-loaded mobile content
&emulateDevice=pixel_8&waitFor=.mobile-content-loaded
```

### 3. Test Both Orientations
If your app supports rotation:
```
// Portrait mode
&emulateDevice=ipad_pro_11

// Landscape mode
&emulateDevice=ipad_pro_11_landscape
```

### 4. Verify Touch Interactions
Some sites have mobile-specific features:
```
// Mobile menu that requires touch
&emulateDevice=iphone_15&waitFor=.hamburger-menu

// Swipeable galleries
&emulateDevice=galaxy_s23&selector=.touch-gallery
```

## Performance Considerations

### Scale Factor Impact
Higher scale factors mean larger images:
- iPhone 15 Pro (3x): 1179×2556 actual pixels
- Galaxy S23 (4x): 1440×3120 actual pixels
- iPad Pro (2x): 2048×2732 actual pixels

### Optimization Tips
1. Use appropriate image formats
2. Consider bandwidth limitations
3. Cache device-specific screenshots
4. Monitor processing times

### Resource Usage
```
// Lower resource usage
&emulateDevice=iphone_se  // 2x scale factor

// Higher resource usage
&emulateDevice=galaxy_s23  // 4x scale factor
```

## Troubleshooting

### Device Not Recognized
If device key is invalid:
- Verify against devices endpoint
- Check for typos in device key
- Fallback to manual viewport settings

### Unexpected Rendering
Some sites detect emulation:
- Try bypassBotDetection option
- Use manual viewport as alternative
- Check for device-specific redirects

### Missing Mobile Features
If mobile-specific content missing:
- Verify user agent is set correctly
- Check for JavaScript device detection
- Allow time for mobile content to load

## Manual Alternative

If device emulation doesn't work as expected, manually configure:
```
// Manual iPhone 15 Pro settings
&vw=393&vh=852&scaleFactor=3&userAgent=Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2017_0%20like%20Mac%20OS%20X)

// Manual iPad Air settings
&vw=820&vh=1180&scaleFactor=2&userAgent=Mozilla%2F5.0%20(iPad%3B%20CPU%20OS%2017_0%20like%20Mac%20OS%20X)
```

## See Also

- [Viewport Configuration](screenshot-viewport.md) - Manual viewport settings
- [Authentication & Headers](screenshot-authentication.md) - Custom user agents
- [Page Enhancements](screenshot-page-enhancements.md) - Mobile-specific enhancements