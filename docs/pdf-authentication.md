---
id: pdf-authentication
title: PDF Authentication & Headers
---

Configure authentication and custom headers for generating PDFs from protected content, internal applications, and sites requiring specific browser identification.

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
https://cdn.capture.page/KEY/HASH/pdf?url=https://protected.example.com&httpAuth=YWRtaW46cGFzc3dvcmQ
```

### Custom User Agent
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&userAgent=TW96aWxsYS81LjAgKGJvdCkgQXBwbGVXZWJLaXQ
```

### Combined Authentication
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://internal.app.com&httpAuth=YWRtaW46c2VjcmV0&userAgent=Q3VzdG9tQm90LzEuMA
```

## HTTP Basic Authentication

### Encoding Credentials

#### JavaScript
```javascript
// Encode credentials for URL parameter
function encodeAuth(username, password) {
  const credentials = `${username}:${password}`;
  return btoa(credentials)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

const auth = encodeAuth('admin', 'secret123');
// Result: YWRtaW46c2VjcmV0MTIz
```

#### Python
```python
import base64

def encode_auth(username, password):
    credentials = f"{username}:{password}"
    encoded = base64.urlsafe_b64encode(credentials.encode())
    return encoded.decode().rstrip('=')

auth = encode_auth('admin', 'secret123')
# Result: YWRtaW46c2VjcmV0MTIz
```

#### Command Line
```bash
# Encode credentials
echo -n "admin:secret123" | base64 | tr '+/' '-_' | tr -d '='
```

### Common Use Cases

#### Internal Documentation
```
// Company wiki
&httpAuth=ZW1wbG95ZWU6aW50ZXJuYWwxMjM&url=https://wiki.company.internal

// Development docs
&httpAuth=ZGV2OmRldnBhc3M&url=https://docs.dev.local
```

#### Client Portals
```
// Client preview area
&httpAuth=Y2xpZW50OnByZXZpZXcyMDI0&url=https://preview.agency.com

// Staging environment
&httpAuth=c3RhZ2U6dGVzdDEyMw&url=https://staging.app.com
```

#### Protected Reports
```
// Financial reports
&httpAuth=ZmluYW5jZTpzZWN1cmVyZXA&url=https://reports.company.com

// Analytics dashboards
&httpAuth=YW5hbHl0aWNzOnJlYWRvbmx5&url=https://analytics.internal
```

## User Agent Configuration

### Why Customize User Agent

1. **Access Requirements**: Some sites require specific browsers
2. **Version Testing**: Test PDF generation across browser versions
3. **Bot Identification**: Identify PDF generation traffic
4. **Compatibility**: Ensure proper rendering for specific user agents

### Common User Agents

#### Standard Browsers
```javascript
// Chrome (Latest)
const chrome = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';

// Firefox
const firefox = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0';

// Safari
const safari = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15';

// Edge
const edge = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0';
```

#### Custom Identifiers
```javascript
// Company bot
const companyBot = 'CompanyBot/1.0 (PDF Generator; +https://company.com/bot)';

// Report generator
const reportBot = 'ReportGenerator/2.0 (Automated PDF Creation)';

// Monitoring tool
const monitor = 'SiteMonitor/1.0 (Uptime Check + PDF Archive)';
```

### Encoding User Agents

```javascript
// Encode UA for URL parameter
function encodeUserAgent(userAgent) {
  return btoa(userAgent)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Example usage
const encodedUA = encodeUserAgent('MyBot/1.0');
const url = `...&userAgent=${encodedUA}`;
```

## Advanced Authentication Scenarios

### Multi-Domain Authentication

```javascript
// Different credentials for different domains
const authMap = {
  'reports.company.com': encodeAuth('report', 'reader123'),
  'admin.company.com': encodeAuth('admin', 'secure456'),
  'client.company.com': encodeAuth('client', 'preview789')
};

function getAuthForUrl(url) {
  const domain = new URL(url).hostname;
  return authMap[domain] || null;
}
```

### Temporary Credentials

```javascript
// Generate time-limited credentials
function generateTempAuth() {
  const timestamp = Date.now();
  const tempUser = `temp_${timestamp}`;
  const tempPass = generateSecurePassword();
  
  // Store for validation
  storeTempCredentials(tempUser, tempPass, 3600); // 1 hour
  
  return encodeAuth(tempUser, tempPass);
}
```

### Environment-Based Auth

```javascript
// Different auth for different environments
const ENV_AUTH = {
  development: encodeAuth('dev', process.env.DEV_PASS),
  staging: encodeAuth('stage', process.env.STAGE_PASS),
  production: encodeAuth('prod', process.env.PROD_PASS)
};

const auth = ENV_AUTH[currentEnvironment];
```

## Security Best Practices

### 1. Credential Management

#### Don't Hardcode
```javascript
// ❌ Bad - Hardcoded credentials
const auth = 'YWRtaW46MTIzNDU2';

// ✅ Good - Environment variables
const username = process.env.PDF_AUTH_USER;
const password = process.env.PDF_AUTH_PASS;
const auth = encodeAuth(username, password);
```

#### Rotate Regularly
```javascript
// Implement credential rotation
async function rotateCredentials() {
  const newPassword = generateSecurePassword();
  await updatePassword(username, newPassword);
  return encodeAuth(username, newPassword);
}
```

### 2. Secure Transmission

- Always use HTTPS URLs
- Never log credentials
- Use secure environment variables
- Implement access logging

### 3. Access Control

```javascript
// Implement role-based access
const roleAuth = {
  viewer: encodeAuth('viewer', viewerPass),
  editor: encodeAuth('editor', editorPass),
  admin: encodeAuth('admin', adminPass)
};

function getAuthForRole(userRole) {
  return roleAuth[userRole] || roleAuth.viewer;
}
```

## Integration Examples

### CI/CD Pipeline

```yaml
# GitHub Actions
- name: Generate PDF Report
  env:
    PDF_AUTH: ${{ secrets.PDF_AUTH }}
    PDF_UA: ${{ secrets.PDF_USER_AGENT }}
  run: |
    curl "https://cdn.capture.page/KEY/HASH/pdf?url=https://reports.internal&httpAuth=${PDF_AUTH}&userAgent=${PDF_UA}"
```

### Automated Reports

```javascript
// Daily report generation
async function generateDailyReport() {
  const date = new Date().toISOString().split('T')[0];
  const auth = process.env.REPORT_AUTH;
  const ua = encodeUserAgent(`ReportBot/1.0 (Daily; ${date})`);
  
  const url = 'https://cdn.capture.page/KEY/HASH/pdf?' +
    `url=https://analytics.internal/daily&` +
    `httpAuth=${auth}&` +
    `userAgent=${ua}&` +
    `fileName=reports/daily/${date}`;
    
  return await fetch(url);
}
```

### Monitoring System

```javascript
// Monitor and archive protected pages
const monitoringSites = [
  {
    url: 'https://status.internal',
    auth: encodeAuth('monitor', 'readonly'),
    name: 'system-status'
  },
  {
    url: 'https://metrics.internal',
    auth: encodeAuth('metrics', 'viewer'),
    name: 'performance-metrics'
  }
];

async function archiveSites() {
  for (const site of monitoringSites) {
    await generatePDF(site.url, site.auth, site.name);
  }
}
```

## Troubleshooting

### Authentication Failures

#### 401 Unauthorized
```javascript
// Verify credentials
const decoded = atob(auth.replace(/-/g, '+').replace(/_/g, '/'));
console.log('Credentials:', decoded); // Should show username:password

// Test in browser first
// Check special character encoding
```

#### 403 Forbidden
- Check IP restrictions
- Verify user permissions
- Additional headers may be required
- Session-based auth not supported

### User Agent Issues

#### Site Blocks PDF Generation
```
// Try standard browser UA
&userAgent={chrome_user_agent}

// Add bot detection bypass
&userAgent={chrome_user_agent}&bypassBotDetection=true
```

#### Rendering Differences
```javascript
// Test with different UAs
const userAgents = [
  { name: 'Chrome', ua: chromeUA },
  { name: 'Firefox', ua: firefoxUA },
  { name: 'Safari', ua: safariUA }
];

// Compare results
```

## Best Practices Summary

### Authentication
1. Use environment variables for credentials
2. Implement credential rotation
3. Monitor authentication failures
4. Use HTTPS always
5. Apply least privilege principle

### User Agents
1. Use descriptive bot identifiers
2. Include contact information in custom UAs
3. Test compatibility with different agents
4. Document UA requirements

### Security
1. Never expose credentials in logs
2. Implement access control
3. Use temporary credentials when possible
4. Regular security audits
5. Monitor unusual access patterns

## See Also

- [PDF Storage](pdf-storage.md) - Secure storage for authenticated PDFs
- [PDF Rendering](pdf-rendering.md) - How authentication affects rendering
- [Screenshot Authentication](screenshot-authentication.md) - Similar options for screenshots