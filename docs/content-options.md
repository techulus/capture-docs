---
id: content-options
title: Content Request
---

The content API allows for capturing the page content in HTML (including the `<head>` section). This is useful for capturing the content of a page that has a lot of JavaScript or other interactivity.

## URL Format

- `YOUR API KEY`, You'll get this from the console
- `GENERATED HASH`, MD5 hash of full url and API Secret, `md5(API SECRET + REQUEST URL)`
- `REQUEST URL`, Target URL

```
https://cdn.capture.techulus.in/e1ab7054-dabc-48d6-a33f-c18038aac1c8
/4d3e6e3d80d0ac77eaa72e87b1a31744/content?url=http://example.com/
```

## Response

The response will be a JSON in the following format:

```json
{
"success": true,
"html": "<!DOCTYPE html><html><head>\n    <title>Example Domain</title>\n\n    <meta charset=\"utf-8\">\n    <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <style type=\"text/css\">\n    body {\n        background-color: #f0f0f2;\n        margin: 0;\n        padding: 0;\n        font-family: \"Open Sans\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        \n    }\n    div {\n        width: 600px;\n        margin: 5em auto;\n        padding: 50px;\n        background-color: #fff;\n        border-radius: 1em;\n    }\n    a:link, a:visited {\n        color: #38488f;\n        text-decoration: none;\n    }\n    @media (max-width: 700px) {\n        body {\n            background-color: #fff;\n        }\n        div {\n            width: auto;\n            margin: 0 auto;\n            border-radius: 0;\n            padding: 1em;\n        }\n    }\n    </style>    \n</head>\n\n<body>\n<div>\n    <h1>Example Domain</h1>\n    <p>This domain is established to be used for illustrative examples in documents. You may use this\n    domain in examples without prior coordination or asking for permission.</p>\n    <p><a href=\"http://www.iana.org/domains/example\">More information...</a></p>\n</div>\n\n\n</body></html>"
}
```