---
id: pdf-options
title: PDF Request
---

## URL Format

- `YOUR API KEY`, You'll get this from the console
- `GENERATED HASH`, MD5 hash of full url including query string and API Secret, `md5(API SECRET + REQUEST URL & OPTIONS)`
- `REQUEST URL & OPTIONS`, Target URL and query string that contains all of the options you want to set

```
https://cdn.capture.techulus.in/e1ab7054-dabc-48d6-a33f-c18038aac1c8
/10958f7757e331dcacf235340f0beb81/pdf?url=https://news.ycombinator.com/
```

## Request Options

| Query     	| Default value 	| Description                                                                                      	|
|-----------	|---------------	|--------------------------------------------------------------------------------------------------	|
| url       	| -             	| URL-encoded target url                                                                           	|
| delay     	| 0             	| Delay in seconds before capturing                                                                	|
| timestamp 	| -             	| This will force reload the image                                                                 	|
| format    	| A4            	| Paper format. The format options are Letter, Legal, Tabloid, Ledger, A0, A1, A2, A3, A4, A5, A6. 	|
| fileName  	| -             	| File name used while saving to S3                                                                	|