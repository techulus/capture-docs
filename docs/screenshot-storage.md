---
id: screenshot-storage
title: Storage & Caching
---

Control how screenshots are stored, cached, and delivered. These options help optimize performance, reduce costs, and integrate with your existing storage infrastructure.

## Storage Options

### File Name (`fileName`)
- **Default**: Auto-generated based on URL hash
- **Description**: Custom filename for S3 storage
- **Example**: `fileName=homepage-screenshot.png`
- **Note**: Extension added automatically based on image type

### S3 Access Control (`s3Acl`)
- **Default**: Private
- **Description**: AWS S3 canned ACL for uploaded files
- **Example**: `s3Acl=public-read`
- **Options**: See [AWS S3 ACL Reference](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property)

### S3 Redirect (`s3Redirect`)
- **Default**: `false`
- **Description**: Redirect to S3 URL instead of serving image directly
- **Example**: `s3Redirect=true`
- **Result**: Returns 302 redirect to S3 location

### Skip Upload (`skipUpload`)
- **Default**: `false`
- **Description**: Return image directly without S3 upload
- **Example**: `skipUpload=true`
- **Use case**: When you want to handle storage yourself

## Caching Options

### Fresh Screenshot (`fresh`)
- **Default**: `false`
- **Description**: Force a new screenshot, bypassing cache
- **Example**: `fresh=true`
- **Effect**: Ignores cached version if exists

### Cache Buster (`timestamp`)
- **Default**: None
- **Description**: Force cache invalidation with unique value
- **Example**: `timestamp=1677649200`
- **Common use**: `timestamp={current_unix_time}`

## Usage Examples

### Basic S3 Upload
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&fileName=example-homepage
```

### Public S3 with Redirect
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&s3Acl=public-read&s3Redirect=true
```

### Force Fresh Screenshot
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&fresh=true
```

### Skip Storage
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&skipUpload=true
```

## S3 Configuration

### Available ACL Options

| ACL Value | Description | Use Case |
|-----------|-------------|----------|
| `private` | Owner has full control | Internal use only |
| `public-read` | Public can read, owner can write | Public websites |
| `public-read-write` | Public can read and write | Rarely used |
| `authenticated-read` | AWS users can read | Shared within AWS |
| `bucket-owner-read` | Bucket owner can read | Cross-account access |
| `bucket-owner-full-control` | Bucket owner has full control | Managed services |

### Setting Up S3 Storage

1. **Configure S3 Bucket** in your Capture account
2. **Set appropriate permissions** for Capture to write
3. **Choose ACL strategy** based on your needs
4. **Configure CORS** if serving directly from S3

### S3 File Organization
```
// Default structure
/screenshots/
  /{year}/{month}/{day}/
    /{generated-hash}.{extension}

// With custom fileName
/screenshots/
  /{year}/{month}/{day}/
    /{your-filename}.{extension}
```

## Caching Strategy

### How Caching Works

1. **Request received** with URL and options
2. **Cache check** based on URL + options hash
3. **If cached**: Return existing screenshot
4. **If not cached**: Generate and store new screenshot

### Cache Duration
- **CDN Edge**: 24 hours
- **Browser**: Controlled by headers
- **S3 Storage**: Permanent until deleted

### Cache Key Components
Cache is based on:
- Target URL
- All screenshot options
- API key
- Timestamp (if provided)

## Common Patterns

### Daily Screenshots
Force daily updates:
```javascript
const today = new Date().toISOString().split('T')[0];
const url = `...&timestamp=${today}`;
```

### Hourly Updates
More frequent updates:
```javascript
const hour = new Date().getHours();
const url = `...&timestamp=${Date.now()}-${hour}`;
```

### Version-based Caching
Tie to deployments:
```javascript
const version = 'v1.2.3';
const url = `...&timestamp=${version}`;
```

### User-specific Screenshots
Personalized content:
```javascript
const userId = 'user123';
const url = `...&fileName=dashboard-${userId}&fresh=true`;
```

## Performance Optimization

### 1. Leverage Caching
```
// First request: Generated
https://cdn.capture.page/KEY/HASH/image?url=site.com

// Subsequent requests: Cached
https://cdn.capture.page/KEY/HASH/image?url=site.com
```

### 2. Smart Cache Invalidation
```javascript
// Only refresh when content changes
const contentHash = generateContentHash();
const url = `...&timestamp=${contentHash}`;
```

### 3. Pregenerate Common Screenshots
```javascript
// Warm cache for popular pages
const popularPages = ['/', '/about', '/products'];
popularPages.forEach(page => {
  // Generate screenshot in background
  fetch(`capture.page/...?url=${domain}${page}`);
});
```

## S3 Integration Patterns

### Direct S3 Serving
```
// 1. Generate with public ACL
&s3Acl=public-read&s3Redirect=true

// 2. Store S3 URL from redirect
const s3Url = response.headers.location;

// 3. Serve directly from S3
<img src={s3Url} />
```

### CDN Integration
```
// Upload to S3 with CloudFront
&s3Acl=public-read&fileName=cdn-optimized

// Configure CloudFront origin
// Serve via CDN URL
```

### Backup Strategy
```
// Keep local copy and S3 backup
&fileName=backup-${date}&s3Acl=private

// Retrieve later if needed
// Access via S3 API
```

## Cost Optimization

### 1. Cache Effectively
- Use default caching when possible
- Avoid `fresh=true` unless necessary
- Implement smart timestamp strategies

### 2. Storage Management
```
// Skip S3 for temporary screenshots
&skipUpload=true

// Use public-read for CDN serving
&s3Acl=public-read&s3Redirect=true
```

### 3. Filename Strategy
```
// Organize by date
&fileName=screenshots/2024/03/homepage

// Organize by feature
&fileName=products/widget-preview

// Version control
&fileName=v2/dashboard-dark-mode
```

## Advanced Techniques

### Conditional Caching
```javascript
// Fresh for logged-in users
const options = isLoggedIn ? '&fresh=true' : '';

// Fresh during business hours
const isBusinessHours = hour >= 9 && hour <= 17;
const options = isBusinessHours ? '&fresh=true' : '';
```

### Multi-Region Strategy
```
// Use different buckets per region
&fileName=us-east-1/screenshot
&fileName=eu-west-1/screenshot
```

### Lifecycle Policies
Configure S3 lifecycle rules:
- Move to Glacier after 30 days
- Delete after 90 days
- Transition to IA storage

## Troubleshooting

### S3 Upload Failures
Common causes:
- Invalid ACL permissions
- Bucket policy restrictions
- Region mismatches
- Filename conflicts

Solutions:
- Verify bucket permissions
- Check ACL compatibility
- Use unique filenames
- Enable S3 logging

### Cache Not Updating
Issues:
- CDN edge cache
- Browser cache
- Incorrect timestamp

Solutions:
```
// Force fresh everywhere
&fresh=true&timestamp=${Date.now()}

// Clear browser cache
Cache-Control: no-cache

// Purge CDN cache
// Use CDN API or console
```

### Redirect Issues
If S3 redirect fails:
- Check CORS configuration
- Verify public-read ACL
- Ensure bucket policy allows
- Test S3 URL directly

## Best Practices

### 1. Plan Your Storage
```
// Organized structure
&fileName=year/month/project/page-state

// Searchable naming
&fileName=client-name/project-id/screenshot-type
```

### 2. Cache Strategically
```
// Static content: Use default cache
// Dynamic content: Use timestamp
// User content: Use fresh=true
```

### 3. Monitor Usage
- Track cache hit rates
- Monitor S3 storage costs
- Set up alerts for failures
- Regular cleanup old files

## Security Considerations

### 1. ACL Selection
```
// Public content
&s3Acl=public-read

// Private content
&s3Acl=private  // Default

// Temporary access
// Use presigned URLs
```

### 2. Filename Security
- Avoid sensitive info in filenames
- Use hashes for user content
- Implement access controls

### 3. Cache Security
- Don't cache sensitive content
- Use fresh=true for private data
- Consider separate buckets

## See Also

- [Output Options](screenshot-output-options.md) - Optimize file sizes before storage
- [Timing Options](screenshot-timing.md) - Ensure content is ready before caching
- [Authentication](screenshot-authentication.md) - Secure private screenshots