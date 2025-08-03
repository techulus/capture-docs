---
id: screenshot-options
title: Screenshot Request
---

## URL Format

- `YOUR API KEY`, You'll get this from the console
- `GENERATED HASH`, MD5 hash of full url including query string and API Secret, `md5(API SECRET + REQUEST URL & OPTIONS)`
- `REQUEST URL & OPTIONS`, Target URL and query string that contains all of the options you want to set

```html
<img src="https://cdn.capture.page/e1ab7054-dabc-48d6-a33f-c18038aac1c8
/10958f7757e331dcacf235340f0beb81/image?url=http://www.apple.com/&delay=2">
```

> **Note:**
> If your requests could take more than 60 seconds to complete due to delay or wait time, you should use the `edge` endpoint  (`edge.capture.page`) instead of `cdn` endpoint. Our CDN is optimized for fast response times and is not suitable for long running requests.

## Request Options

| Query        	        | Default value   	| Description                                                                             	|
|--------------	        |-----------------	|-----------------------------------------------------------------------------------------	|
| url          	        | -               	| URL-encoded target url                                                                  	|
| httpAuth           	| -               	| HTTP Basic Authentication base64url encoded in format `base64url(username:password)`      |
| vw           	        | 1440            	| Viewport Width                                                                          	|
| vh           	        | 900             	| Viewport Height                                                                         	|
| scaleFactor  	        | 1               	| Specify screen scale factor (dpr)                                                       	|
| top          	        | 0               	| Top offset for clipping rectangle                                                       	|
| left         	        | 0               	| Left offset for clipping rectangle                                                      	|
| width        	        | Viewport Width  	| Clipping Width                                                                          	|
| height       	        | Viewport Height 	| Clipping Height                                                                         	|
| waitFor      	        | -               	| Capture will wait for this CSS selector to appear before taking screenshot              	|
| waitForId    	        | -               	| Capture will wait for this id to appear before taking screenshot                        	|
| delay        	        | 0               	| Delay in seconds before capturing                                                       	|
| full         	        | false           	| Set full as true to capture full page                                                   	|
| darkMode              | false             | Take a dark mode screenshot                                                               |
| blockCookieBanners    | false             | Dismiss cookie consent banners or popups before taking screenshot                         |
| blockAds              | false             | Block ads before taking screenshot                                                      |
| bypassBotDetection    | false             | Bypass bot detection / solve captchas                                                     |
| selector              | false           	| Take a screenshot of the element that matches this selector                               |
| selectorId            | false           	| Take a screenshot of the element that matches this element ID                             |
| transparent  	        | false           	| Capture with a transparent background                                                   	|
| userAgent    	        | -               	| Custom User agent (`base64url` encoded)                                         	        |
| emulateDevice         | -               	| Emulate a specific device (e.g., `iphone_14`, `ipad`, `pixel_8`) - see device list below	|
| timestamp    	        | -               	| This will force reload the image                                                        	|
| fresh        	        | false           	| Take a fresh screenshot instead of getting a cached version                             	|
| resizeWidth  	        | -               	| Resize the captured image to provided width, both resize height and width is mandatory  	|
| resizeHeight 	        | -               	| Resize the captured image to provided height, both resize height and width is mandatory 	|
| fileName     	        | -               	| File name used while saving to S3                                                       	|
| s3Acl	       	        | -               	| The canned S3 ACL to apply to S3 uploads                                                	|
| s3Redirect   	        | false           	| Set as true to redirect response to uploaded S3 url                                     	|
| skipUpload   	        | false           	| Avoid uploading to S3 when this options is set as true                                   	|
| type         	        | png              	| Specify screenshot type, can be either `jpeg`, `png` or `webp`.                           |
| bestFormat         	| false           	| Use best image format, this will try to use webp for modern browsers, png for older ones  |

Check the following [**reference**](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property) for valid S3 ACL values.

## Device Emulation

The `emulateDevice` parameter allows you to capture screenshots as they would appear on specific mobile devices. When using device emulation, the viewport, user agent, and device scale factor are automatically set to match the selected device.

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

Use the `key` field from the response as the value for the `emulateDevice` parameter in your screenshot requests.

### Usage Example

```html
<img src="https://cdn.capture.page/YOUR_API_KEY/HASH/image?url=https://example.com&emulateDevice=iphone_15_pro">
```

### Important Notes

1. When `emulateDevice` is used, it overrides any manually set viewport parameters (`vw`, `vh`, `scaleFactor`)
2. The device emulation includes proper touch events and mobile user agent strings
3. If an invalid device key is provided, the API will fall back to using the default or manually specified viewport settings

