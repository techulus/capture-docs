---
id: slack-integration
title: Slack integration
---

## Setup

Link your Capture account with Slack and get high quality screenshots inside slack channels using the /screenshot slash command.
Visit https://capture.techulus.in/connect-slack to get started!

## Request screenshot

To request a screenshot inside slack you can use the `/screenshot` command followed by the URL you wish to capture.

The below command will fetch you a screenshot of `https://capture.techulus.in/pricing`

```
/screenshot https://capture.techulus.in
```

You can also add options to customise the request, for example you can add a delay before capturing screenshot using the `delay` option.

The below command will fetch you a screenshot of `https://capture.techulus.in/pricing` and will add a delay of 3 seconds before capturing the image.

```
/screenshot https://capture.techulus.in delay=3
```

You can chain multiple options together separated by a space, hence the anatomy of a request is the following.

```
/screenshot url [option_name=value] [option_name=value]...
```