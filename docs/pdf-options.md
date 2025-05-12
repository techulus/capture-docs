---
id: pdf-options
title: PDF Request
---

## URL Format

- `YOUR API KEY`, You'll get this from the console
- `GENERATED HASH`, MD5 hash of full url including query string and API Secret, `md5(API SECRET + REQUEST URL & OPTIONS)`
- `REQUEST URL & OPTIONS`, Target URL and query string that contains all of the options you want to set

```text
https://cdn.capture.page/e1ab7054-dabc-48d6-a33f-c18038aac1c8
/10958f7757e331dcacf235340f0beb81/pdf?url=https://news.ycombinator.com/
```

## Request Options

| Query     	| Default value 	| Description                                                                                      	|
|-----------	|---------------	|--------------------------------------------------------------------------------------------------	|
| url       	| -             	| URL-encoded target url                                                                           	|
| width       	| -             	| Paper width, accepts values labeled with units.                                                   |
| height       	| -             	| Paper height, accepts values labeled with units.                                                  |
| marginTop    	| -             	| Top margin, accepts values labeled with units.                                                  	|
| marginRight  	| -             	| Right margin, accepts values labeled with units.                                                	|
| marginBottom 	| -             	| Bottom margin, accepts values labeled with units.                                                	|
| marginLeft  	| -             	| Left margin, accepts values labeled with units.                                                  	|
| scale     	| 1             	| Scale of the webpage rendering                                                                	|
| landscape    	| false            	| Paper orientation                                                                             	|
| delay     	| 0             	| Delay in seconds before capturing                                                                	|
| timestamp 	| -             	| This will force reload the image                                                                 	|
| format    	| A4            	| Paper format. The format options are Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6. 	|
| fileName  	| -             	| File name used while saving to S3                                                                	|
| s3Acl	    	| -             	| The canned S3 ACL to apply to S3 uploads                                                      	|
| s3Redirect	| false         	| Set as true to redirect response to uploaded S3 url                                           	|

Check the following [**reference**](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property) for valid S3 ACL values.

## Custom Paper Size

To capture using custom paper size, you can use the `width` and `height` options. Please note that both are mandatory for setting custom paper size. You can also customise the paper margins using `marginTop`, `marginRight`, `marginBottom` and `marginLeft` options. All four margins must be specified for setting custom margin.

