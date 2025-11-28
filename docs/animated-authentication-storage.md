---
id: animated-authentication-storage
title: Authentication
---

Configure authentication for accessing protected content and manage storage options for your animated screenshots.

## Authentication Options

### HTTP Basic Authentication (`httpAuth`)
- **Format**: `base64url(username:password)`
- **Example**: `httpAuth=YWRtaW46c2VjcmV0MTIz`

### Custom User Agent (`userAgent`)
- **Format**: Base64URL encoded string
- **Example**: `userAgent=TW96aWxsYS81LjAgKGN1c3RvbSBib3Qp`

## Authentication Encoding

### JavaScript
```javascript
function encodeAuth(username, password) {
  const credentials = `${username}:${password}`;
  return btoa(credentials)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

const auth = encodeAuth('admin', 'secret123');
```
## See Also

- [Animated Screenshot Options](animated-screenshot-options.md)
- [Animation Settings](animated-animation-settings.md)
- [Animated Viewport](animated-viewport.md)
