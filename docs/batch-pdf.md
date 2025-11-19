---
id: batch-pdf
title: Batch PDF
---

This API endpoint is for requesting batch processing of multiple PDF capture requests.

## Endpoint
POST `https://cdn.capture.page/batch-pdf/[your-api-key]`

## Authentication
All requests have to be authenticated using a signature header (x-req-signature)
x-req-signature is calculated as `HMAC-SHA256` of JSON request body with api secret as the key

## Body (application/json)
Request body should contain an array data having details of the url to captured and any additional options if required. It can also include an optional `notification_uri` (webhook) to receive notification when the requests is completely processed. Options can include any of the request queries mentioned in our documentation (https://docs.capture.page). Any errors in the request will be mentioned in the notification send to notification_uri.

## Example
```json
{
  "notification_uri": "https://hookb.in/KxQ9ROjo",
  "data": [
    {
      "url": "https://news.ycombinator.com",
      "options": {
        "file_name": "news",
        "format": "A3"
      }
    },
    {
      "url": "https://news.ycombinator.com",
      "options": {
        "format": "A3"
      }
    }
  ]
}
```
