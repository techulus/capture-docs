---
id: slack-integration
title: Slack integration
---

## Setup

Our slack integration lets you capture website screenshots in your Slack channels.

To get started link your Capture account with Slack, visit our [slack integration](https://capture.techulus.in/connect-slack) page.

## Request screenshot

To request a screenshot you can use the `/screenshot` command followed by the URL you wish to capture.

For example, the below command will fetch you a screenshot of `https://capture.techulus.in/pricing`

```
/screenshot https://capture.techulus.in
```

## Customize request

You can also add options to customise the request, for example you can add a delay before capturing screenshot using the `delay` option.

The below command will fetch you a screenshot of `https://capture.techulus.in/pricing` and will add a delay of 3 seconds before capturing the image.

```
/screenshot https://capture.techulus.in delay=3
```

hence the anatomy of a request is the following;

```
/screenshot url [option_name=value] [option_name=value]...
```

Note. You can chain multiple options together separated by a space.
You can find the full list of supported [screenshot options here](/docs/screenshot-options).