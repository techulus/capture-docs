---
id: screenshot-options
title: Screenshot Request
---

## URL Format

- `YOUR API KEY`, You'll get this from the console
- `GENERATED HASH`, MD5 hash of full url including query string and API Secret, `md5(API SECRET + REQUEST URL & OPTIONS)`
- `REQUEST URL & OPTIONS`, Target URL and query string that contains all of the options you want to set

```html
<img src="https://cdn.capture.techulus.in/e1ab7054-dabc-48d6-a33f-c18038aac1c8
/10958f7757e331dcacf235340f0beb81/image?url=http://www.apple.com/&delay=2">
```

## Request Options

| Query        	        | Default value   	| Description                                                                             	|
|--------------	        |-----------------	|-----------------------------------------------------------------------------------------	|
| url          	        | -               	| URL-encoded target url                                                                  	|
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
| selector              | false           	| Take a screenshot of the element that matches this selector                               |
| selectorId            | false           	| Take a screenshot of the element that matches this element ID                             |
| transparent  	        | false           	| Capture with a transparent background                                                   	|
| userAgent    	        | -               	| Custom User agent                                                                       	|
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

## Rate Limits

All accounts are restricted at 5 requests / second, you can request an upgrade by **[contacting our support](https://techulus.freshdesk.com/support/home)**.
