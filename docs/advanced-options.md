---
id: advanced-options
title: Advanced options
---

## Generating links with custom options

We can add several additional paramaters to the request to customise the screenshot or PDF result. All the available parameters for screenshot and PDF are listed in next sections. We can go through few example on how to use these parameters:

###  Capture a full page screenshot

If you want to capture a full page screenshot of `http://www.apple.com/`, our request url will be:

```
https://cdn.capture.page/api_key/generated_hash/image?url=http://www.apple.com/&full=true
```

To generate the hash all we need to do is to create an `MD5` hash of the API secret and URL including our parameters.

```javascript
md5(api_secret + 'url=http://www.apple.com/&full=true')
```

###  Capture a screenshot with custom dimensions

If you want to capture a screenshot `http://www.apple.com/` with custom dimensions, we can make use of viewport width and height parameters, our request url will be:

```
https://cdn.capture.page/sample_key/generated_hash/image?url=http://www.apple.com/&vw=1920&vh=1080
```

To generate the hash all we need to do is to create an `MD5` hash of the API secret and URL including our parameters.

```javascript
md5(sample_secret + 'url=http://www.apple.com/&vw=1920&vh=1080')
```

## Sample JavaScript Code

```javascript
// Include https://github.com/blueimp/JavaScript-MD5

var API_URL = 'https://cdn.capture.page/';
var your_api_key = 'API_KEY_FROM_CONSOLE';
var your_api_secret = 'API_SECRET_FROM_CONSOLE'

// Target URL
var input_url = encodeURIComponent('http://techulus.in/');
var options = 'full=true&scaleFactor=2'
var full_url = input_url + '&' + options;
var hash = md5(your_api_secret + 'url=' + full_url);

// Image URL
var result_img_url = API_URL + your_api_key + '/' + hash + '/image?url=' + full_url;
// PDF URL
var result_pdf_url = API_URL + your_api_key + '/' + hash + '/pdf?url=' + full_url;

console.log(result_img_url, result_pdf_url);
```