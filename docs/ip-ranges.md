---
id: ip-ranges
title: Outbound IP Ranges
---

Capture API uses a set of outbound IP addresses for all requests made to your target URLs. You can use these IP ranges to allowlist Capture's traffic in your firewall or security configurations.

## Fetching IP Ranges

Get the current list of IP ranges via the JSON endpoint:

```
https://capture.page/ip-ranges.json
```

### Response Format

```json
{
  "prefixes": [
    "162.220.234.0/23",
    "162.220.232.0/23",
    "208.77.246.0/23",
    "208.77.244.0/23",
    "66.33.22.0/23",
    "66.33.23.0/24"
  ]
}
```

The response contains a `prefixes` array with IP address ranges in CIDR notation.

## Support

If you have specific networking requirements, contact support through the [API Console](https://capture.page/console).
