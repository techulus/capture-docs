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

## Authentication Use Cases

### Internal Applications

#### Corporate Intranets
```javascript
const corpAuth = encodeAuth('employee', 'intranet-pass');
const url = `...&httpAuth=${corpAuth}&duration=12`;

const hrAuth = encodeAuth('hr-user', 'portal-access');
const url = `...&httpAuth=${hrAuth}&selector=.dashboard&duration=10`;
```

#### SaaS Platforms
```javascript
const adminAuth = encodeAuth('admin', 'dashboard-demo');
const url = `...&httpAuth=${adminAuth}&duration=15`;

const customerAuth = encodeAuth('demo', 'customer-view');
const url = `...&httpAuth=${customerAuth}&emulateDevice=iphone_15_pro&duration=10`;
```

### Development Environments

#### Staging Sites
```javascript
const stagingAuth = encodeAuth('staging', 'preview-123');
const url = `...&httpAuth=${stagingAuth}&duration=20&fullPage=true`;

const featureAuth = encodeAuth('feature', 'branch-demo');
const url = `...&httpAuth=${featureAuth}&duration=10`;
```

#### API Documentation
```javascript
const apiAuth = encodeAuth('api-demo', 'docs-access');
const url = `...&httpAuth=${apiAuth}&selector=.api-explorer&duration=12`;
```

### Client Demonstrations

#### Client Previews
```javascript
const clientAuth = encodeAuth('client-abc', 'review-2024');
const url = `...&httpAuth=${clientAuth}&duration=15&blockCookieBanners=true`;

const proposalAuth = encodeAuth('proposal', 'demo-access');
const url = `...&httpAuth=${proposalAuth}&duration=18&darkMode=true`;
```

## Storage Strategies

### Organized File Structure

#### By Project
```javascript
const projectFiles = {
  marketing: `marketing/homepage-demo-${date}`,
  product: `product/feature-animation-${version}`,
  tutorial: `tutorials/onboarding-flow-${step}`
};

&fileName=${projectFiles.marketing}
```

#### By Client
```javascript
// Client-specific animations
const clientFiles = {
  acme: `clients/acme-corp/dashboard-demo`,
  widgets: `clients/widget-inc/product-showcase`,
  startup: `clients/startup-co/platform-overview`
};
```

#### By Date and Version
```javascript
// Version control for animations
const versionedFiles = {
  daily: `daily/${date}/homepage-animation`,
  weekly: `weekly/${weekNumber}/feature-demo`,
  release: `releases/v${version}/product-overview`
};
```

### Access Control Patterns

#### Public Animations
```
// Marketing materials
&fileName=public/marketing/product-demo&s3Acl=public-read&s3Redirect=true

// Tutorial content
&fileName=public/tutorials/getting-started&s3Acl=public-read
```

#### Private Client Work
```
// Confidential client demos
&fileName=private/client-demos/confidential-project&s3Acl=private

// Internal documentation
&fileName=internal/docs/admin-workflow&s3Acl=bucket-owner-read
```

#### Team Sharing
```
// Shared team resources
&fileName=team/prototypes/new-feature&s3Acl=authenticated-read

// Development demos
&fileName=dev/demos/api-integration&s3Acl=bucket-owner-read
```

## Authentication Encoding

### JavaScript Encoding
```javascript
function encodeAuth(username, password) {
  const credentials = `${username}:${password}`;
  return btoa(credentials)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

function encodeUserAgent(userAgent) {
  return btoa(userAgent)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

// Example usage
const auth = encodeAuth('admin', 'secret123');
const ua = encodeUserAgent('AnimationBot/1.0');
```

### Common User Agents for Animations
```javascript
// Animation-specific user agents
const animationUserAgents = {
  demo: 'DemoBot/1.0 (Animation Generation)',
  marketing: 'MarketingBot/1.0 (Video Creation)',
  tutorial: 'TutorialBot/1.0 (Educational Content)',
  testing: 'TestBot/1.0 (QA Animation)'
};

// Standard browsers for compatibility
const browserUserAgents = {
  chrome: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
  firefox: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:122.0) Gecko/20100101 Firefox/122.0',
  safari: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_2_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15'
};
```

## Advanced Storage Patterns

### Automated Workflows

#### CI/CD Integration
```javascript
async function generateReleaseAnimations(version) {
  const animations = [
    { name: `releases/v${version}/homepage`, url: 'https://app.com' },
    { name: `releases/v${version}/features`, url: 'https://app.com/features' },
    { name: `releases/v${version}/pricing`, url: 'https://app.com/pricing' }
  ];

  for (const animation of animations) {
    await generateAnimation(animation.url, {
      fileName: animation.name,
      s3Acl: 'public-read',
      duration: 12
    });
  }
}
```

#### Content Management
```javascript
async function createContentSeries(series, auth) {
  const configs = {
    onboarding: { duration: 15 },
    features: { duration: 10 },
    advanced: { duration: 20 }
  };

  for (const [type, config] of Object.entries(configs)) {
    await generateAnimation(series.url, {
      ...config,
      fileName: `content/${series.name}/${type}`,
      httpAuth: auth,
      s3Acl: 'authenticated-read'
    });
  }
}
```

### Dynamic File Naming

#### Context-Aware Naming
```javascript
function generateFileName(context) {
  const timestamp = new Date().toISOString().split('T')[0];
  const { client, project, type, version } = context;
  
  return `${client}/${project}/${type}/${version}-${timestamp}`;
}

// Usage
const fileName = generateFileName({
  client: 'acme-corp',
  project: 'website-redesign', 
  type: 'homepage-demo',
  version: 'v2.1'
});
// Result: acme-corp/website-redesign/homepage-demo/v2.1-2024-03-15
```

#### User-Generated Content
```javascript
function userGeneratedFileName(userId, contentType) {
  const timestamp = Date.now();
  const hash = generateShortHash(userId + timestamp);
  
  return `user-content/${contentType}/${userId}/${hash}`;
}
```

## Security Best Practices

### 1. Credential Management
```javascript
// Environment-based credentials
const environments = {
  dev: {
    auth: encodeAuth('dev', process.env.DEV_PASS),
    storage: 'development/animations'
  },
  staging: {
    auth: encodeAuth('staging', process.env.STAGING_PASS),
    storage: 'staging/demos'
  },
  prod: {
    auth: encodeAuth('prod', process.env.PROD_PASS),
    storage: 'production/releases'
  }
};
```

### 2. Access Control
```javascript
// Role-based access
const roleCredentials = {
  viewer: encodeAuth('viewer', 'read-only-pass'),
  editor: encodeAuth('editor', 'edit-access-pass'),
  admin: encodeAuth('admin', 'full-access-pass')
};

// Scope-based access
const scopeCredentials = {
  marketing: encodeAuth('marketing', 'marketing-pass'),
  development: encodeAuth('dev-team', 'dev-pass'),
  client: encodeAuth('client-access', 'client-pass')
};
```

### 3. Secure Storage
```javascript
// Security levels
const securityLevels = {
  public: { s3Acl: 'public-read', folder: 'public' },
  internal: { s3Acl: 'authenticated-read', folder: 'internal' },
  confidential: { s3Acl: 'private', folder: 'confidential' },
  client: { s3Acl: 'bucket-owner-read', folder: 'client-work' }
};
```

## Performance Optimization

### Batch Processing
```javascript
// Efficient batch animation generation
async function batchGenerateAnimations(requests, auth) {
  const results = await Promise.allSettled(
    requests.map(async (request, index) => {
      // Stagger requests to avoid overload
      await sleep(index * 1000);
      
      return generateAnimation(request.url, {
        ...request.config,
        httpAuth: auth,
        fileName: `batch/${Date.now()}/${request.name}`
      });
    })
  );
  
  return results;
}
```

### Storage Optimization
```javascript
function selectOptimalDuration(purpose) {
  if (purpose === 'social') return 8;
  if (purpose === 'web') return 12;
  if (purpose === 'documentation') return 15;
  return 10;
}
```

## Troubleshooting

### Authentication Issues
- Verify credential encoding
- Check user permissions  
- Test credentials manually
- Monitor for session timeouts

### Storage Problems
- Validate S3 bucket permissions
- Check ACL compatibility
- Verify filename conventions
- Monitor storage quotas

### Performance Issues
- Implement request throttling
- Use appropriate file formats
- Optimize authentication calls
- Monitor processing times

## Best Practices Summary

### 1. Organize Systematically
```
// Clear folder structure
/client-name/project/animation-type/version-date
```

### 2. Use Appropriate Security
```
// Match security to content sensitivity
public content: public-read
internal demos: authenticated-read  
client work: private
```

### 3. Implement Proper Authentication
```
// Environment-specific credentials
// Regular credential rotation
// Least privilege access
```

### 4. Plan for Scale
```
// Batch processing capabilities
// Efficient file organization
// Storage lifecycle management
// Performance monitoring
```

## See Also

- [Animated Page Interaction](animated-page-interaction.md) - Page modifications before recording
- [Screenshot Authentication](screenshot-authentication.md) - Similar auth options for static screenshots
- [PDF Storage](pdf-storage.md) - Storage patterns for PDF files