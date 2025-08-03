---
id: pdf-storage
title: PDF Storage Options
---

Configure how your generated PDFs are stored, named, and delivered. These options allow integration with AWS S3 and control over file management.

## Storage Parameters

### File Name (`fileName`)
- **Default**: Auto-generated based on URL hash
- **Description**: Custom filename for S3 storage
- **Example**: `fileName=report-2024-q1`
- **Note**: `.pdf` extension added automatically

### S3 Access Control (`s3Acl`)
- **Default**: Private
- **Description**: AWS S3 canned ACL for uploaded files
- **Example**: `s3Acl=public-read`
- **Reference**: [AWS S3 ACL Documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property)

### S3 Redirect (`s3Redirect`)
- **Default**: `false`
- **Description**: Redirect to S3 URL instead of serving PDF directly
- **Example**: `s3Redirect=true`
- **Result**: Returns 302 redirect to S3 location

## Usage Examples

### Basic S3 Upload
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&fileName=example-report
```

### Public PDF with Redirect
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&s3Acl=public-read&s3Redirect=true
```

### Private Storage
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&fileName=confidential-doc&s3Acl=private
```

## S3 Configuration

### ACL Options

| ACL Value | Description | Use Case |
|-----------|-------------|----------|
| `private` | Only owner can access | Confidential documents |
| `public-read` | Anyone can read | Public reports, brochures |
| `public-read-write` | Anyone can read/write | Rarely used |
| `authenticated-read` | AWS authenticated users | Internal sharing |
| `bucket-owner-read` | Bucket owner can read | Cross-account access |
| `bucket-owner-full-control` | Bucket owner full access | Managed services |

### File Organization

Default S3 structure:
```
/pdfs/
  /{year}/{month}/{day}/
    /{hash-or-filename}.pdf
```

Custom organization examples:
```
// By client
&fileName=clients/acme-corp/invoice-2024-01

// By project
&fileName=projects/website-redesign/mockup-v2

// By date
&fileName=reports/2024/march/monthly-summary

// By type
&fileName=invoices/2024/INV-001234
```

## Common Patterns

### Document Management

#### Invoice System
```javascript
// Generate invoice PDFs
const invoiceNumber = 'INV-2024-001';
const fileName = `invoices/${year}/${month}/${invoiceNumber}`;
const url = `...&fileName=${fileName}&s3Acl=private`;
```

#### Report Archive
```javascript
// Monthly reports
const reportName = `reports/${year}/${month}/monthly-report`;
const url = `...&fileName=${reportName}&s3Acl=bucket-owner-read`;
```

#### Public Documents
```javascript
// Brochures and marketing
const fileName = 'public/brochures/product-catalog-2024';
const url = `...&fileName=${fileName}&s3Acl=public-read&s3Redirect=true`;
```

### Versioning Strategy

#### Simple Versioning
```
// Version 1
&fileName=documents/contract-v1

// Version 2
&fileName=documents/contract-v2

// With timestamp
&fileName=documents/contract-20240315-143022
```

#### Git-Style Versioning
```javascript
const version = 'v2.1.0';
const fileName = `releases/${version}/documentation`;
```

#### Date-Based Versioning
```javascript
const date = new Date().toISOString().split('T')[0];
const fileName = `daily-reports/report-${date}`;
```

## S3 Integration Patterns

### Direct S3 Serving

```javascript
// 1. Generate PDF with public access
const captureUrl = 'https://cdn.capture.page/KEY/HASH/pdf?' +
  'url=https://example.com&' +
  's3Acl=public-read&' +
  's3Redirect=true';

// 2. Follow redirect to get S3 URL
const response = await fetch(captureUrl, { redirect: 'manual' });
const s3Url = response.headers.get('location');

// 3. Use S3 URL directly
return { pdfUrl: s3Url };
```

### CDN Distribution

```javascript
// Upload with CDN-friendly settings
const params = {
  fileName: 'cdn/documents/public-report',
  s3Acl: 'public-read',
  s3Redirect: true
};

// Configure CloudFront to serve from S3 bucket
// Access via: https://cdn.yourdomain.com/documents/public-report.pdf
```

### Temporary URLs

```javascript
// For private documents, generate presigned URLs
// This requires server-side S3 access

// 1. Upload as private
const params = {
  fileName: 'private/sensitive-doc',
  s3Acl: 'private'
};

// 2. Generate presigned URL (server-side)
const presignedUrl = s3.getSignedUrl('getObject', {
  Bucket: 'your-bucket',
  Key: 'pdfs/private/sensitive-doc.pdf',
  Expires: 3600 // 1 hour
});
```

## File Naming Best Practices

### Naming Conventions

#### Descriptive Names
```
// Good - Clear and organized
&fileName=reports/2024/q1/financial-summary
&fileName=contracts/client-abc/service-agreement-final

// Avoid - Unclear or problematic
&fileName=doc1
&fileName=report
&fileName=my file with spaces  // Use hyphens or underscores
```

#### Safe Characters
```javascript
// Function to create safe filenames
function safeName(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9-_\/]/g, '-')  // Keep only safe chars
    .replace(/-+/g, '-')              // Remove multiple hyphens
    .replace(/^-|-$/g, '');           // Trim hyphens
}

// Examples
safeName('Q1 2024 Report!') // 'q1-2024-report'
safeName('Invoice #1234')   // 'invoice-1234'
```

#### Hierarchical Structure
```
// Organize by hierarchy
/company/department/year/month/document-type-date

// Examples
&fileName=acme/finance/2024/03/invoice-20240315
&fileName=acme/hr/2024/employees/onboarding-guide
```

### Avoiding Conflicts

#### Unique Identifiers
```javascript
// Add timestamp
const timestamp = Date.now();
const fileName = `reports/daily-${timestamp}`;

// Add random ID
const uuid = generateUUID();
const fileName = `documents/${uuid}-contract`;

// Add hash
const hash = md5(content);
const fileName = `cache/${hash}-rendered`;
```

#### Overwrite Prevention
```javascript
// Check existence before generating
// Or use unique naming pattern
const fileName = `archive/${year}/${month}/${day}/${hour}-${minute}-report`;
```

## Performance Optimization

### Caching Strategy

```javascript
// Cache public PDFs
if (isPublic) {
  params.s3Acl = 'public-read';
  params.s3Redirect = true;
  // Set cache headers on S3
}

// Skip caching for dynamic content
if (isDynamic) {
  params.fileName = `temp/${uuid}`;
  // Set expiration policy
}
```

### Batch Processing

```javascript
// Process multiple PDFs efficiently
const documents = [
  { url: 'page1.com', name: 'doc1' },
  { url: 'page2.com', name: 'doc2' },
  { url: 'page3.com', name: 'doc3' }
];

const results = await Promise.all(
  documents.map(doc => 
    generatePDF(doc.url, `batch/${batchId}/${doc.name}`)
  )
);
```

## Security Considerations

### Access Control

#### Private Documents
```
// Secure storage
&fileName=secure/confidential-report&s3Acl=private

// Never use public-read for sensitive content
```

#### Temporary Access
```javascript
// Use presigned URLs for temporary access
// Set appropriate expiration times
// Log access for audit trails
```

#### Compliance
```
// HIPAA compliance
&fileName=hipaa/patient-records/encrypted&s3Acl=private

// GDPR compliance
&fileName=gdpr/user-data/report&s3Acl=private
```

### Data Protection

```javascript
// Encrypt sensitive filenames
const encryptedName = encrypt(sensitiveInfo);
const fileName = `protected/${encryptedName}`;

// Use folders for access control
const fileName = `restricted/hr/${documentId}`;
```

## Cost Management

### Storage Optimization

```javascript
// Lifecycle rules for cost optimization
const filePatterns = {
  temporary: 'temp/*',     // Delete after 1 day
  archives: 'archive/*',   // Move to Glacier after 30 days
  current: 'current/*'     // Keep in standard storage
};
```

### Monitoring Usage

```javascript
// Track storage by category
const categories = {
  reports: 0,
  invoices: 0,
  marketing: 0,
  temporary: 0
};

// Use folder structure for easy monitoring
&fileName=`${category}/${year}/${month}/${document}`
```

## Troubleshooting

### Upload Failures

Common causes:
- Invalid S3 credentials
- Bucket permissions
- Invalid ACL for bucket policy
- Network timeouts

Solutions:
```
// Verify bucket policy allows ACL
// Check IAM permissions
// Use appropriate ACL
// Retry with exponential backoff
```

### Redirect Issues

If S3 redirect fails:
```
// Check CORS configuration
{
  "AllowedOrigins": ["*"],
  "AllowedMethods": ["GET"],
  "AllowedHeaders": ["*"]
}

// Verify public-read ACL
// Test S3 URL directly
```

### Filename Problems

```javascript
// Sanitize filenames
function fixFileName(name) {
  return name
    .replace(/[<>:"/\\|?*]/g, '-')  // Remove invalid chars
    .substring(0, 255);              // Limit length
}
```

## Best Practices Summary

### 1. Organize Systematically
```
/category/subcategory/year/month/descriptive-name
```

### 2. Use Appropriate ACLs
```
Public content: public-read
Private content: private
Shared content: authenticated-read
```

### 3. Plan for Scale
- Implement folder hierarchy
- Use date-based organization
- Set lifecycle policies
- Monitor storage costs

### 4. Ensure Security
- Never expose sensitive data in filenames
- Use private ACL by default
- Implement access logging
- Regular security audits

## See Also

- [PDF Rendering](pdf-rendering.md) - Generate PDFs before storage
- [Paper Size](pdf-paper-size.md) - Affects file size
- [Screenshot Storage](screenshot-storage.md) - Similar options for images