---
id: animated-authentication-storage
title: Authentication & Storage
---

Configure authentication for accessing protected content and manage storage options for your animated screenshots.

## Authentication Options

### HTTP Basic Authentication (`httpAuth`)
- **Default**: None
- **Description**: Provides HTTP Basic Authentication credentials
- **Format**: `base64url(username:password)`
- **Example**: `httpAuth=YWRtaW46c2VjcmV0MTIz`

### Custom User Agent (`userAgent`)
- **Default**: Standard Chrome user agent
- **Description**: Override the browser's user agent string
- **Format**: Base64URL encoded string
- **Example**: `userAgent=TW96aWxsYS81LjAgKGN1c3RvbSBib3Qp`

## Storage Options

### File Name (`fileName`)
- **Default**: Auto-generated hash
- **Description**: Custom filename for S3 storage
- **Example**: `fileName=product-demo-animation`
- **Note**: File extension added automatically

### S3 Access Control (`s3Acl`)
- **Default**: Private
- **Description**: AWS S3 canned ACL for uploaded files
- **Example**: `s3Acl=public-read`
- **Options**: `private`, `public-read`, `public-read-write`, `authenticated-read`, `bucket-owner-read`, `bucket-owner-full-control`

### S3 Redirect (`s3Redirect`)
- **Default**: `false`
- **Description**: Redirect to S3 URL instead of serving file directly
- **Example**: `s3Redirect=true`

## Usage Examples

### Basic Authentication
```
https://cdn.capture.page/KEY/HASH/animated?url=https://protected.site.com&httpAuth=YWRtaW46cGFzc3dvcmQ&duration=10
```

### Custom File Storage
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&fileName=homepage-demo&s3Acl=public-read
```

### Protected Content with Custom UA
```
https://cdn.capture.page/KEY/HASH/animated?url=https://internal.app.com&httpAuth=YWRtaW46c2VjcmV0&userAgent=Q29tcGFueUJvdA&duration=15
```

## Authentication Encoding

### JavaScript Example
```javascript
function encodeAuth(username, password) {
  const credentials = `${username}:${password}`;
  return btoa(credentials)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Usage
const auth = encodeAuth('admin', 'secret123');
const url = `...&httpAuth=${auth}`;
```

### Python Example
```python
import base64

def encode_auth(username, password):
    credentials = f"{username}:{password}"
    encoded = base64.b64encode(credentials.encode()).decode()
    return encoded.replace('+', '-').replace('/', '_').replace('=', '')

# Usage
auth = encode_auth('admin', 'secret123')
url = f"...&httpAuth={auth}"
```

### Go Example
```go
import (
    "encoding/base64"
    "strings"
)

func encodeAuth(username, password string) string {
    credentials := username + ":" + password
    encoded := base64.StdEncoding.EncodeToString([]byte(credentials))
    encoded = strings.ReplaceAll(encoded, "+", "-")
    encoded = strings.ReplaceAll(encoded, "/", "_")
    encoded = strings.TrimRight(encoded, "=")
    return encoded
}
```

## Storage Best Practices

### Organize by Project
```javascript
// Organized file structure
const fileName = `marketing/homepage-demo-2024`;
const url = `...&fileName=${fileName}&s3Acl=public-read`;
```

### Use Descriptive Names
```
// ✅ Good - descriptive names
&fileName=products/iphone-demo-landscape
&fileName=tutorials/onboarding-step-1

// ❌ Avoid - generic names
&fileName=animation1
&fileName=demo
```

### Set Appropriate Access Control
```javascript
// Public marketing materials
&s3Acl=public-read

// Private client work
&s3Acl=private

// Team sharing
&s3Acl=authenticated-read
```

## Common Use Cases

### Internal Applications
```javascript
// Corporate intranet
const auth = encodeAuth('employee', 'intranet-pass');
const url = `...&httpAuth=${auth}&duration=12`;
```

### Development Environments
```javascript
// Staging site
const auth = encodeAuth('staging', 'preview-123');
const url = `...&httpAuth=${auth}&duration=20&fullPage=true`;
```

### Client Demonstrations
```javascript
// Client preview
const auth = encodeAuth('client-demo', 'review-2024');
const url = `...&httpAuth=${auth}&fileName=client-demos/demo-v1&s3Acl=private`;
```

## Security Best Practices

### 1. Protect Credentials
- Never expose credentials in client-side code
- Use environment variables for sensitive data
- Rotate credentials regularly

### 2. Use Least Privilege Access
```
// Public content
&s3Acl=public-read

// Restrict to authenticated users only
&s3Acl=authenticated-read
```

### 3. Consider S3 Redirect
```
// Direct file serving (default)
&s3Redirect=false

// Redirect to S3 URL (hides API endpoint)
&s3Redirect=true
```

## Troubleshooting

### Authentication Fails
- Verify credentials are correct
- Check base64url encoding is properly applied
- Ensure site supports HTTP Basic Auth

### Wrong User Agent Detected
- Verify user agent string is base64url encoded
- Check for special characters in encoding
- Test user agent string in browser first

### File Not Found in S3
- Verify fileName parameter is set
- Check S3 bucket configuration
- Ensure proper ACL permissions

### Access Denied
- Check s3Acl setting matches your needs
- Verify bucket policies allow access
- Ensure credentials have proper permissions

## See Also

- [Animated Screenshot Options](animated-screenshot-options.md) - Core screenshot parameters
- [Animation Settings](animated-animation-settings.md) - Output format and duration
- [Animated Viewport](animated-viewport.md) - Screen size configuration
