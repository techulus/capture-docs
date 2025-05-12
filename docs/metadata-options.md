---
id: metadata-options
title: Metadata Request
---

The metadata API allows for capturing the websites metadata in JSON format, providing essential details like title, description, logo, author, language, and more.

## URL Format

- `YOUR API KEY`, You'll get this from the console
- `GENERATED HASH`, MD5 hash of full url and API Secret, `md5(API SECRET + REQUEST URL)`
- `REQUEST URL`, Target URL

```
https://cdn.capture.page/e1ab7054-dabc-48d6-a33f-c18038aac1c8
/4d3e6e3d80d0ac77eaa72e87b1a31744/metadata?url=http://example.com/
```

## Response

The response will be a JSON in the following format:

```json
{
  "success": true,
  "metadata": {
    "author": "Techulus",
    "audio": null,
    "date": null,
    "description": "The ultimate solution for keeping your customers and stakeholders informed about the latest updates and news from your business.",
    "feed": null,
    "iframe": null,
    "image": "https://changes.page/api/blog/og?tag=changes.page&title=Changelog%20simplified.&content=The%20ultimate%20solution%20for%20keeping%20your%20customers%20and%20stakeholders%20informed%20about%20the%20latest%20updates%20and%20news%20from%20your%20business.&logo=https://changes.page/images/logo.png",
    "lang": "en",
    "logo": "https://changes.page/images/icons/icon-192x192.png",
    "publisher": "changes.page",
    "title": "changes.page | Changelog simplified.",
    "url": "https://changes.page",
    "video": null
  }
}
```
