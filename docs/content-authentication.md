---
id: content-authentication
title: Content Authentication & Headers
---

Configure authentication and custom headers for extracting content from protected pages, internal systems, and sites requiring specific browser identification.

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
https://cdn.capture.page/KEY/HASH/content?url=https://protected.docs.com&httpAuth=YWRtaW46cGFzc3dvcmQ
```

### Custom User Agent
```
https://cdn.capture.page/KEY/HASH/content?url=https://api-docs.com&userAgent=TW96aWxsYS81LjAgKGJvdCkgQXBwbGVXZWJLaXQ
```

### Combined Authentication
```
https://cdn.capture.page/KEY/HASH/content?url=https://internal.wiki.com&httpAuth=YWRtaW46c2VjcmV0&userAgent=Q29tcGFueUJvdA
```

## HTTP Basic Authentication

### Encoding Credentials

#### JavaScript
```javascript
function encodeAuth(username, password) {
  const credentials = `${username}:${password}`;
  return btoa(credentials)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Example usage
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
```

#### Command Line
```bash
echo -n "admin:secret123" | base64 | tr '+/' '-_' | tr -d '='
```

### Common Use Cases

#### Internal Documentation
```
// Company wiki content
&httpAuth=ZW1wOndpa2lhY2Nlc3M&url=https://wiki.company.internal

// API documentation
&httpAuth=ZGV2OmRvY3NyZWFk&url=https://docs.api.internal

// Technical guides
&httpAuth=dGVjaDpndWlkZXM&url=https://guides.company.com
```

#### CMS Content Extraction
```
// WordPress admin content
&httpAuth=YWRtaW46d3BhZG1pbg&url=https://cms.site.com/admin

// Drupal protected content
&httpAuth=ZWRpdG9yOmNtc2VkaXQ&url=https://drupal.site.com

// Custom CMS
&httpAuth=Y21zOnVzZXI&url=https://custom.cms.com
```

#### Knowledge Bases
```
// Confluence spaces
&httpAuth=dXNlcjpjb25mbHVlbmNl&url=https://company.atlassian.net

// Notion pages
&httpAuth=bm90aW9uOnRva2Vu&url=https://notion.site/private-page

// Internal knowledge systems
&httpAuth=a25vd2xlZGdlOnJlYWQ&url=https://kb.internal.com
```

## User Agent Configuration

### Why Customize User Agent

1. **Access Control**: Some systems restrict based on user agent
2. **Content Variation**: Different content served to different agents
3. **Bot Identification**: Identify content extraction requests
4. **API Documentation**: Specific requirements for documentation sites

### Common User Agents

#### Documentation Crawlers
```javascript
// Generic documentation bot
const docBot = 'DocumentationBot/1.0 (Content Extraction)';

// Company-specific crawler
const companyBot = 'CompanyName-ContentBot/2.0 (+https://company.com/bot)';

// API documentation crawler
const apiBot = 'API-DocumentationCrawler/1.0';
```

#### Standard Browsers
```javascript
// Latest Chrome
const chrome = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';

// Firefox
const firefox = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0';

// Mobile Safari
const mobileSafari = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
```

### Encoding User Agents

```javascript
function encodeUserAgent(userAgent) {
  return btoa(userAgent)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Example
const encodedUA = encodeUserAgent('MyContentBot/1.0');
```

## Content-Specific Authentication

### API Documentation

```javascript
// Swagger/OpenAPI docs
const swaggerAuth = encodeAuth('api', 'docs-reader');
const swaggerUA = encodeUserAgent('SwaggerBot/1.0');

// Postman documentation
const postmanAuth = encodeAuth('docs', 'public-reader');
```

### Knowledge Management

```javascript
// Confluence authentication
const confluenceAuth = encodeAuth('content-reader', 'confluence-pass');
const confluenceUA = encodeUserAgent('ConfluenceContentBot/1.0');

// SharePoint content
const sharepointAuth = encodeAuth('sp-user', 'sp-content-pass');
```

### CMS Content

```javascript
// WordPress content extraction
const wpAuth = encodeAuth('content-api', 'wp-rest-key');
const wpUA = encodeUserAgent('WordPressContentBot/1.0');

// Drupal API access
const drupalAuth = encodeAuth('api-user', 'drupal-api-key');
```

## Advanced Authentication Scenarios

### Role-Based Content Access

```javascript
// Different content for different roles
const roleAuth = {
  public: null, // No auth needed
  member: encodeAuth('member', 'member-pass'),
  premium: encodeAuth('premium', 'premium-pass'),
  admin: encodeAuth('admin', 'admin-pass')
};

function getContentByRole(url, role) {
  const auth = roleAuth[role];
  return auth ? `${url}&httpAuth=${auth}` : url;
}
```

### Multi-Domain Authentication

```javascript
// Different credentials for different domains
const domainAuth = {
  'docs.company.com': encodeAuth('docs', 'docs-pass'),
  'wiki.company.com': encodeAuth('wiki', 'wiki-pass'),
  'api.company.com': encodeAuth('api', 'api-pass')
};

function getAuthForDomain(url) {
  const domain = new URL(url).hostname;
  return domainAuth[domain];
}
```

### Environment-Based Authentication

```javascript
// Different auth per environment
const envAuth = {
  development: encodeAuth('dev', process.env.DEV_CONTENT_PASS),
  staging: encodeAuth('stage', process.env.STAGE_CONTENT_PASS),
  production: encodeAuth('prod', process.env.PROD_CONTENT_PASS)
};
```

## Security Best Practices

### 1. Credential Management

```javascript
// Use environment variables
const username = process.env.CONTENT_AUTH_USER;
const password = process.env.CONTENT_AUTH_PASS;
const auth = encodeAuth(username, password);

// Rotate credentials regularly
async function rotateContentCredentials() {
  const newPass = generateSecurePassword();
  await updateContentPassword(username, newPass);
  return encodeAuth(username, newPass);
}
```

### 2. Access Control

```javascript
// Implement read-only access
const readOnlyAuth = encodeAuth('content-reader', 'readonly-pass');

// Scope access to specific content types
const scopedAuth = {
  docs: encodeAuth('docs-reader', 'docs-pass'),
  api: encodeAuth('api-reader', 'api-pass'),
  wiki: encodeAuth('wiki-reader', 'wiki-pass')
};
```

### 3. Audit and Monitoring

```javascript
// Log content access
function logContentAccess(url, auth, success) {
  console.log({
    timestamp: new Date().toISOString(),
    url: url,
    authenticated: !!auth,
    success: success,
    userAgent: 'ContentBot/1.0'
  });
}
```

## Integration Examples

### Documentation Archival

```javascript
async function archiveDocumentation() {
  const docSites = [
    {
      url: 'https://docs.internal.com',
      auth: encodeAuth('archive', 'docs-backup'),
      name: 'internal-docs'
    },
    {
      url: 'https://api.docs.com',
      auth: encodeAuth('api-backup', 'api-archive'),
      name: 'api-docs'
    }
  ];

  for (const site of docSites) {
    const content = await extractContent(site.url, site.auth);
    await saveContent(site.name, content);
  }
}
```

### Content Migration

```javascript
async function migrateContent() {
  const sources = [
    { url: 'https://old-wiki.com', auth: oldWikiAuth },
    { url: 'https://legacy-docs.com', auth: legacyAuth }
  ];

  for (const source of sources) {
    const content = await extractContent(source.url, source.auth);
    await importToNewSystem(content);
  }
}
```

### Content Monitoring

```javascript
async function monitorContentChanges() {
  const monitoredSites = [
    { url: 'https://competitor-docs.com', auth: null },
    { url: 'https://industry-wiki.com', auth: industryAuth }
  ];

  for (const site of monitoredSites) {
    const currentContent = await extractContent(site.url, site.auth);
    const hasChanged = await compareWithPrevious(currentContent);
    
    if (hasChanged) {
      await notifyContentChange(site.url);
    }
  }
}
```

## Troubleshooting

### Authentication Failures

#### 401 Unauthorized
```javascript
// Verify credential encoding
const testAuth = 'YWRtaW46c2VjcmV0';
const decoded = atob(testAuth.replace(/-/g, '+').replace(/_/g, '/'));
console.log('Credentials:', decoded); // Should show username:password

// Test credentials manually
// Use browser or curl to verify access
```

#### 403 Forbidden
- Check user permissions
- Verify IP allowlisting
- Additional headers may be required
- Rate limiting may be active

### Content Access Issues

#### Partial Content
```
// Wait for dynamic content
&httpAuth=YWRtaW46cGFzcw&delay=3&waitFor=.content-loaded

// Use specific selectors
&waitFor=.main-content[data-loaded="true"]
```

#### Missing Content
```
// Verify authentication scope
// Check if content requires JavaScript
// Ensure proper user agent for content type
```

## Best Practices

### 1. Use Descriptive User Agents
```javascript
// Good - Identifies purpose and contact
const userAgent = 'CompanyContentBot/1.0 (+https://company.com/bot)';

// Avoid - Generic or misleading
const userAgent = 'Mozilla/5.0'; // Pretends to be browser
```

### 2. Implement Proper Error Handling
```javascript
async function extractContentSafely(url, auth) {
  try {
    return await extractContent(url, auth);
  } catch (error) {
    if (error.status === 401) {
      await refreshCredentials();
      return await extractContent(url, auth);
    }
    throw error;
  }
}
```

### 3. Respect Rate Limits
```javascript
// Add delays between requests
async function extractMultiplePages(urls, auth) {
  const results = [];
  
  for (const url of urls) {
    const content = await extractContent(url, auth);
    results.push(content);
    
    // Respect server limits
    await sleep(1000);
  }
  
  return results;
}
```

## See Also

- [Content Timing](content-timing.md) - Ensure content is loaded before extraction
- [Screenshot Authentication](screenshot-authentication.md) - Similar auth for screenshots
- [PDF Authentication](pdf-authentication.md) - Authentication for PDF generation