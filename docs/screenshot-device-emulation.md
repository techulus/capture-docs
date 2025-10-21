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
        "height": 852,
        "deviceScaleFactor": 3
      }
    }
  ]
}
```

### Use Device Key
Apply the device key from the API response:
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=iphone_15_pro
```

## Common Devices

### Popular Smartphones
| Device | Key |
|--------|-----|
| iPhone 15 Pro | `iphone_15_pro` |
| iPhone 15 | `iphone_15` |
| iPhone SE | `iphone_se` |
| Pixel 8 Pro | `pixel_8_pro` |
| Pixel 8 | `pixel_8` |
| Galaxy S23 | `galaxy_s23` |

### Popular Tablets
| Device | Key |
|--------|-----|
| iPad Pro 12.9" | `ipad_pro_12_9` |
| iPad Pro 11" | `ipad_pro_11` |
| iPad Air | `ipad_air` |
| Pixel Tablet | `pixel_tablet` |
| Galaxy Tab S9 | `galaxy_tab_s9` |

### Other Devices
| Device | Key |
|--------|-----|
| Desktop HD | `desktop_hd` |
| Desktop 4K | `desktop_4k` |
| Laptop | `laptop` |

**For complete device list**: Use the `/screenshot/devices` API endpoint

## Usage Examples

### Mobile Screenshots
```
// iPhone
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=iphone_15_pro

// Android
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=pixel_8
```

### Tablet Screenshots
```
// iPad
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=ipad_air

// Android Tablet
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=galaxy_tab_s9
```

### Desktop Screenshots
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&emulateDevice=desktop_hd
```

## What Device Emulation Includes

Device emulation automatically configures:

1. **Viewport Dimensions**: Exact screen size of the device
2. **Device Scale Factor**: Pixel density (retina/high-DPI)
3. **User Agent**: Device-specific user agent string
4. **Touch Capabilities**: Touch events enabled for mobile/tablet
5. **Mobile Mode**: Mobile-optimized rendering

## Common Use Cases

### Responsive Design Testing
```
// Test on multiple devices
&emulateDevice=iphone_15_pro
&emulateDevice=ipad_air
&emulateDevice=desktop_hd
```

### App Store Screenshots
```
// iOS App Store
&emulateDevice=iphone_15_pro_max

// Google Play Store
&emulateDevice=pixel_8_pro
```

### Documentation and Demos
```
// Show mobile view
&emulateDevice=iphone_15

// Show tablet view
&emulateDevice=ipad_pro_11
```

## Best Practices

### 1. Use Real Device Profiles
```
// ✅ Good - uses actual device
&emulateDevice=iphone_15_pro

// ❌ Avoid - manual viewport for mobile
&vw=393&vh=852&scaleFactor=3
```

### 2. Match Your Target Audience
- For iOS users: Use iPhone devices
- For Android users: Use Pixel or Galaxy devices
- For tablet users: Use iPad or Android tablets

### 3. Test Multiple Devices
Create screenshots for various form factors to ensure responsive design works correctly.

### 4. Check Device Availability
Use the API endpoint to get the latest list of supported devices, as new devices are added regularly.

## Troubleshooting

### Device Not Found
- Verify device key spelling
- Check `/screenshot/devices` endpoint for correct key
- Ensure device is supported

### Unexpected Layout
- Device emulation triggers mobile/tablet layouts
- Site may detect device and redirect
- Check if site has device-specific CSS

### Wrong Screen Size
- Device emulation overrides manual viewport settings
- Use device key from API, not custom dimensions
- Some sites may have responsive breakpoints

## See Also

- [Viewport Configuration](screenshot-viewport.md) - Manual viewport settings
- [Screenshot Options](screenshot-options.md) - Additional screenshot parameters
- [Capture Area](screenshot-capture-area.md) - Capture specific elements
