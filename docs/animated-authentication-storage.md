---
id: animated-authentication-storage
title: Authentication & Storage
---

Configure authentication for accessing protected content and manage storage options for your animated screenshots.

## Authentication Options

### HTTP Basic Authentication (`httpAuth`)
- **Format**: `base64url(username:password)`
- **Example**: `httpAuth=YWRtaW46c2VjcmV0MTIz`

### Custom User Agent (`userAgent`)
- **Format**: Base64URL encoded string
- **Example**: `userAgent=TW96aWxsYS81LjAgKGN1c3RvbSBib3Qp`

## Storage Options

### File Name (`fileName`)
- **Default**: Auto-generated hash
- **Example**: `fileName=product-demo-animation`

### S3 Access Control (`s3Acl`)
- **Default**: `private`
- **Options**: `private`, `public-read`, `authenticated-read`, `bucket-owner-read`
- **Example**: `s3Acl=public-read`

### S3 Redirect (`s3Redirect`)
- **Default**: `false`
- **Example**: `s3Redirect=true`

## Usage Examples

```
// Basic authentication
https://cdn.capture.page/KEY/HASH/animated?url=https://protected.site.com&httpAuth=YWRtaW46cGFzc3dvcmQ&duration=10

// Custom storage
&fileName=homepage-demo&s3Acl=public-read
```

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

### Python
```python
import base64

def encode_auth(username, password):
    credentials = f"{username}:{password}"
    encoded = base64.b64encode(credentials.encode()).decode()
    return encoded.replace('+', '-').replace('/', '_').replace('=', '')
```

## Best Practices

**File Naming:**
- ✅ `fileName=products/iphone-demo-landscape`
- ❌ `fileName=animation1`

**Access Control:**
- Public content: `s3Acl=public-read`
- Private work: `s3Acl=private`
- Team sharing: `s3Acl=authenticated-read`

**Security:**
- Never expose credentials in client-side code
- Use environment variables
- Rotate credentials regularly

## Troubleshooting

**Authentication Fails:** Verify credentials and base64url encoding

**Wrong User Agent:** Ensure string is base64url encoded

**File Not Found:** Check fileName parameter and S3 bucket configuration

**Access Denied:** Verify s3Acl settings and bucket policies

## See Also

- [Animated Screenshot Options](animated-screenshot-options.md)
- [Animation Settings](animated-animation-settings.md)
- [Animated Viewport](animated-viewport.md)
