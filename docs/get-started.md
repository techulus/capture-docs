---
id: get-started
title: Get Started
sidebar_label: Make your first request
---

Welcome to Capture! This document will guide you through the process of making your first request.

## API Credentials

In order to authenticate requests send to us, it is necesary for all requests to include user credentials. To get that you need to go to capture **[console](https://capture.techulus.in/console)**. Once you are are logged in to the console, you will see the API key and API secret in the Dashboard tab. We will use this key and secret for generating links to capture screenshots or PDFs.

## Generating links

To capture a screenshot we need to generate a URL which has our authentication credentials and request options. A basic requests URL will have the following parts:

- `YOUR API KEY`, we'll get this from the console
- `GENERATED HASH`, to validate the request, to make sure its you and not someone else
- `REQUEST URL & OPTIONS`, URL to capture and query string that contains all of the options you want to set

For example, if you want to capture `http://www.apple.com/`, our request url will be:

```text
https://cdn.capture.page/api_key/generated_hash/image?url=http://www.apple.com/
```

To generate the hash all we need to do is to create an `MD5` hash of the API secret and URL
```javascript
md5(api_secret + 'url=http://www.apple.com/')
```

## Displaying screenshots

To display the screenshot you can use the link generated in the previous step as image url.

Using HTML tags:
```html
<!-- IMG tag -->
<img src="https://cdn.capture.page/e1ab7054-dabc-48d6-a33f-c18038aac1c8/c87613a5bde6cdc09554e64c998cbffb/image?url=http://www.apple.com/&delay=2" />

<!-- meta tag -->
<meta property="og:image" content="https://cdn.capture.page/e1ab7054-dabc-48d6-a33f-c18038aac1c8/c87613a5bde6cdc09554e64c998cbffb/image?url=http://www.apple.com/&delay=2" />
```

Using CSS:
```css
.website-preview {
    background-image: url(https://cdn.capture.page/e1ab7054-dabc-48d6-a33f-c18038aac1c8/c87613a5bde6cdc09554e64c998cbffb/image?url=http://www.apple.com/&delay=2);
}
```

Using Markdown:
```md
![](https://cdn.capture.page/e1ab7054-dabc-48d6-a33f-c18038aac1c8/c87613a5bde6cdc09554e64c998cbffb/image?url=http://www.apple.com/&delay=2)
```

Here is a live demo:

![](https://cdn.capture.page/e1ab7054-dabc-48d6-a33f-c18038aac1c8/c87613a5bde6cdc09554e64c998cbffb/image?url=http://www.apple.com/&delay=2)

Just treat the url as an image url and it will work anywhere you wish!

## Sample JavaScript Code

```javascript
// Include https://github.com/blueimp/JavaScript-MD5

var API_URL = 'https://cdn.capture.page/';
var your_api_key = 'API_KEY_FROM_CONSOLE';
var your_api_secret = 'API_SECRET_FROM_CONSOLE'

// Target URL
var input_url = encodeURIComponent('http://techulus.in/');
var hash = md5(your_api_secret + 'url=' + input_url);

// Image URL
var result_img_url = API_URL + your_api_key + '/' + hash + '/image?url=' + input_url;
// PDF URL
var result_pdf_url = API_URL + your_api_key + '/' + hash + '/pdf?url=' + input_url;

console.log(result_img_url, result_pdf_url);
```