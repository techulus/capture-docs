---
id: screenshot-authentication
title: Authentication & Headers
---

Configure authentication and custom headers for capturing protected content, internal applications, and sites requiring specific browser identification.

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

## Usage Examples

### Basic Authentication
```
https://cdn.capture.page/KEY/HASH/image?url=https://protected.example.com&httpAuth=YWRtaW46cGFzc3dvcmQ
```

### Custom User Agent
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&userAgent=TW96aWxsYS81LjAgKGJvdCkgQXBwbGVXZWJLaXQ
```

### Combined Authentication
```
https://cdn.capture.page/KEY/HASH/image?url=https://internal.app.com&httpAuth=YWRtaW46c2VjcmV0&userAgent=Q3VzdG9tQm90LzEuMA
```

## HTTP Basic Authentication

### How It Works
1. Credentials are base64url encoded
2. Sent as `Authorization: Basic {encoded}` header
3. Server validates before serving content
4. Screenshot captures authenticated page

### Encoding Credentials
```javascript
// JavaScript
const username = 'admin';
const password = 'secret123';
const credentials = btoa(`${username}:${password}`)
  .replace(/\+/g, '-')
  .replace(/\//g, '_')
  .replace(/=/g, '');

// Result: httpAuth=YWRtaW46c2VjcmV0MTIz
```

```python
# Python
import base64
import urllib.parse

username = 'admin'
password = 'secret123'
credentials = base64.urlsafe_b64encode(
    f'{username}:{password}'.encode()
).decode().rstrip('=')

# Result: httpAuth=YWRtaW46c2VjcmV0MTIz
```

```bash
# Command line
echo -n "admin:secret123" | base64 | tr '+/' '-_' | tr -d '='
```

### Common Use Cases

#### Internal Tools
```
// Corporate intranet
&httpAuth=ZW1wbG95ZWU6Y29ycF9wYXNz&url=https://intranet.company.com

// Staging environment
&httpAuth=dGVzdDp0ZXN0MTIz&url=https://staging.app.com
```

#### Development Environments
```
// Local development with auth
&httpAuth=ZGV2OnNlY3JldA&url=https://dev.local.app

// Password-protected staging
&httpAuth=c3RhZ2U6cHJldmlldw&url=https://preview.site.com
```

#### Client Previews
```
// Client review site
&httpAuth=Y2xpZW50OnJldmlld18yMDI0&url=https://review.agency.com
```

## User Agent Configuration

### Why Customize User Agent

1. **Bot Detection**: Some sites block automated browsers
2. **Mobile Detection**: Trigger mobile-specific layouts
3. **Version Testing**: Test browser-specific features
4. **Analytics**: Identify screenshot traffic

### Common User Agents

#### Desktop Browsers
```javascript
// Chrome on Windows
const chrome = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';

// Firefox on Mac
const firefox = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15) Gecko/20100101 Firefox/122.0';

// Safari on Mac
const safari = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15';
```

#### Mobile Browsers
```javascript
// iPhone Safari
const iphone = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

// Android Chrome
const android = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Mobile Safari/537.36';
```

#### Custom Bots
```javascript
// Search engine bot
const googlebot = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

// Custom crawler
const custom = 'MyCompanyBot/1.0 (+https://company.com/bot)';
```

### Encoding User Agents
```javascript
// JavaScript
function encodeUserAgent(ua) {
  return btoa(ua)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

const encoded = encodeUserAgent('MyBot/1.0');
// Use: &userAgent={encoded}
```

## Advanced Authentication Patterns

### Multi-Step Authentication
For complex auth flows:
```javascript
// 1. First capture login page
const loginUrl = 'https://app.com/login';

// 2. Use session handling
// Consider using headless browser locally

// 3. Capture authenticated page
const authenticatedUrl = 'https://app.com/dashboard';
```

### Token-Based Authentication
For JWT or OAuth:
```javascript
// Can't pass tokens directly
// Options:
// 1. Use httpAuth for basic auth gateway
// 2. Create temporary access URL
// 3. Use proxy with authentication
```

### IP Whitelisting
For IP-restricted content:
```
// Contact support for:
// - Dedicated IP options
// - Proxy configuration
// - VPN gateway setup
```

## Security Best Practices

### 1. Credential Management
```javascript
// DON'T hardcode credentials
const auth = 'YWRtaW46MTIzNDU2'; // Bad

// DO use environment variables
const username = process.env.AUTH_USER;
const password = process.env.AUTH_PASS;
const auth = encodeCredentials(username, password);
```

### 2. Temporary Credentials
```javascript
// Generate time-limited credentials
const tempUser = `temp_${Date.now()}`;
const tempPass = generateSecurePassword();

// Revoke after use
setTimeout(() => revokeCredentials(tempUser), 3600000);
```

### 3. Secure Transmission
- Always use HTTPS URLs
- Rotate credentials regularly
- Monitor access logs
- Use least privilege principle

## Troubleshooting

### Authentication Failures

#### 401 Unauthorized
```
// Check encoding
console.log(atob(auth.replace(/-/g, '+').replace(/_/g, '/')));

// Verify credentials work in browser
// Check for special characters encoding
```

#### 403 Forbidden
- IP restrictions in place
- Additional headers required
- Session-based auth needed

#### Blank Screenshots
- JavaScript-based authentication
- Multi-step login required
- Cookie-based sessions

### User Agent Issues

#### Site Still Detects Bot
```
// Try more complete UA
&userAgent={full_browser_ua}&bypassBotDetection=true

// Include all browser headers
// Consider residential proxy
```

#### Mobile Site Not Loading
```
// Combine with device emulation
&emulateDevice=iphone_15&userAgent={mobile_ua}

// Ensure UA matches device
```

## Integration Examples

### CI/CD Pipeline
```yaml
# GitHub Actions example
- name: Capture staging screenshot
  env:
    AUTH: ${{ secrets.STAGING_AUTH }}
  run: |
    curl "https://cdn.capture.page/KEY/HASH/image?url=https://staging.app.com&httpAuth=${AUTH}"
```

### Monitoring Dashboard
```javascript
// Capture internal metrics
const dashboards = [
  { url: 'metrics.internal', auth: 'bWV0cmljczpyZWFkb25seQ' },
  { url: 'logs.internal', auth: 'bG9nczp2aWV3ZXI' },
  { url: 'alerts.internal', auth: 'YWxlcnRzOm1vbml0b3I' }
];

dashboards.forEach(dashboard => {
  captureScreenshot(dashboard.url, dashboard.auth);
});
```

### A/B Testing
```javascript
// Test different user agents
const userAgents = [
  { name: 'Chrome', ua: encodedChromeUA },
  { name: 'Firefox', ua: encodedFirefoxUA },
  { name: 'Safari', ua: encodedSafariUA }
];

userAgents.forEach(({ name, ua }) => {
  const url = `...&userAgent=${ua}&fileName=test-${name}`;
  captureScreenshot(url);
});
```

## Best Practices Summary

### 1. Authentication
- Use HTTPS for all authenticated requests
- Implement credential rotation
- Monitor authentication failures
- Use temporary credentials when possible

### 2. User Agents
- Match UA to your use case
- Keep user agents updated
- Test across different agents
- Document custom agents used

### 3. Security
- Never log credentials
- Use environment variables
- Implement access controls
- Regular security audits

## See Also

- [Page Enhancements](screenshot-page-enhancements.md) - Bypass bot detection
- [Device Emulation](screenshot-device-emulation.md) - Automatic UA configuration
- [Storage Options](screenshot-storage.md) - Secure storage for authenticated content