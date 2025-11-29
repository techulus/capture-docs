---
id: animated-screenshot-options
title: Animated Screenshot Request
---

The animated screenshot endpoint allows you to capture animated screenshots of web pages in GIF format.

## URL Format

```
https://cdn.capture.page/{API_KEY}/{GENERATED_HASH}/animated?url={TARGET_URL}
```

- **API_KEY**: Your Capture API key
- **GENERATED_HASH**: MD5 hash of the target URL and your API secret
- **TARGET_URL**: The URL you want to capture (URL-encoded)

## Request Options

| Query        	        | Default value   	| Description                                                                             	|
|--------------	        |-----------------	|-----------------------------------------------------------------------------------------	|
| url          	        | -               	| URL-encoded target url                                                                  	|
| preset                | -                 | Apply predefined configuration preset                                                    |
| duration              | 5                 | Recording duration in seconds (1-30)                                                     |
| hideScrollbars        | true              | Hide scrollbars during capture for cleaner output                                        |
| vw           	        | 1440            	| Viewport width in pixels                                                                 	|
| vh           	        | 900             	| Viewport height in pixels                                                                	|
| scaleFactor  	        | 1               	| Device scale factor                                                                      	|
| emulateDevice         | -               	| Emulate a specific device (e.g., `iphone_14`, `ipad`, `pixel_8`) - see device list below	|
| delay        	        | 0               	| Seconds to wait before starting capture (0-25)                                           	|
| waitFor      	        | -               	| Wait for CSS selector to appear                                                          	|
| waitForId    	        | -               	| Wait for element with specific ID to appear                                              	|
| selector              | -               	| Capture specific element by CSS selector                                                 	|
| darkMode              | false             | Enable dark mode                                                                         	|
| blockCookieBanners    | false             | Automatically dismiss cookie consent popups                                              	|
| blockAds              | false             | Block advertisements                                                                     	|
| httpAuth           	  | -               	| HTTP Basic Authentication base64url encoded in format `base64url(username:password)`    	|
| userAgent    	        | -               	| Custom user agent (`base64url` encoded)                                         	        |
| fileName     	        | -               	| Custom filename for the output file                                                      	|

## Format Specifications

### GIF Format
- **Extension**: `.gif`
- **Content-Type**: `image/gif`
- **Color**: 256 color palette with dithering
- **Looping**: Automatic continuous looping
- **Compatibility**: Universal support across all platforms and browsers
- **Best for**: Animations, documentation, social media, email newsletters

## Usage Examples

### Basic Animated Screenshot
```
https://cdn.capture.page/your-api-key/hash/animated?url=https://example.com&duration=10
```

### Dark Mode Animation
```
https://cdn.capture.page/your-api-key/hash/animated?url=https://example.com&duration=20&darkMode=true&hideScrollbars=true
```

### Element-Specific Animation
```
https://cdn.capture.page/your-api-key/hash/animated?url=https://example.com&selector=.main-content&duration=8
```

### Mobile Device Recording
```
https://cdn.capture.page/your-api-key/hash/animated?url=https://example.com&emulateDevice=iphone_15_pro&duration=10
```

## Technical Limitations

- **Format**: GIF only
- **Maximum Duration**: 30 seconds
- **Browser**: Uses Chrome/Chromium with Puppeteer

## Best Practices

1. **Optimize Duration**:
   - Shorter durations reduce credit usage and file size
   - 5-15 seconds often sufficient for most use cases
   - Use longer durations (20-30s) for comprehensive page animations

2. **File Size Optimization**:
   - Shorter duration = smaller files
   - Reduce viewport dimensions if possible
   - Consider hiding scrollbars for cleaner output

3. **Performance**:
   - Use `delay` parameter for dynamic content
   - Consider `waitFor` for specific elements
   - Enable ad blocking for faster loading and cleaner output

## Device Emulation

The `emulateDevice` parameter allows you to capture animated screenshots as they would appear on specific mobile devices. This is particularly useful for:
- Testing responsive design behavior
- Creating mobile app demos
- Recording mobile-specific interactions

### Available Devices

To get the complete list of available devices with their specifications, use the devices endpoint:

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
      "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
      "viewport": {
        "width": 393,
        "height": 659,
        "deviceScaleFactor": 3,
        "isMobile": true,
        "hasTouch": true,
        "isLandscape": false
      }
    }
  ]
}
```

Use the `key` field from the response as the value for the `emulateDevice` parameter in your animated screenshot requests.

### Device Emulation Notes

1. When using `emulateDevice`, the viewport dimensions and scale factor are automatically set to match the selected device
2. Touch events and mobile user agents are properly configured
3. If an invalid device key is provided, the API falls back to default viewport settings
