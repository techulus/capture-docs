---
id: sdk-nodejs
title: Node.js SDK
---

The official Node.js SDK for Capture API provides a modern, TypeScript-ready interface for all capture operations including screenshots, PDFs, content extraction, and animated screenshots.

## Installation

```bash
# npm
npm install @techulus/capture

# yarn
yarn add @techulus/capture

# pnpm
pnpm add @techulus/capture
```

## Quick Start

```javascript
import { CaptureClient } from '@techulus/capture';

// Initialize client
const client = new CaptureClient({
  apiKey: 'your-api-key',
  secret: 'your-api-secret'
});

// Take a screenshot
const screenshot = await client.screenshot('https://example.com');

// Generate PDF
const pdf = await client.pdf('https://example.com');

// Extract content
const content = await client.content('https://example.com');

// Get metadata
const metadata = await client.metadata('https://example.com');
```

## Authentication

### Basic Setup
```javascript
import { CaptureClient } from '@techulus/capture';

const client = new CaptureClient({
  apiKey: process.env.CAPTURE_API_KEY,
  secret: process.env.CAPTURE_API_SECRET
});
```

### Environment Variables
```bash
# .env file
CAPTURE_API_KEY=your-api-key
CAPTURE_API_SECRET=your-api-secret
```

### Custom Configuration
```javascript
const client = new CaptureClient({
  apiKey: 'your-api-key',
  secret: 'your-api-secret',
  baseUrl: 'https://edge.capture.page', // Use edge endpoint
  timeout: 60000, // 60 second timeout
  retries: 3 // Retry failed requests 3 times
});
```

## Screenshots

### Basic Screenshot
```javascript
// Simple screenshot
const imageBuffer = await client.screenshot('https://example.com');

// Save to file
import fs from 'fs';
fs.writeFileSync('screenshot.png', imageBuffer);
```

### Advanced Screenshot Options
```javascript
const screenshot = await client.screenshot('https://example.com', {
  // Viewport settings
  vw: 1920,
  vh: 1080,
  scaleFactor: 2,
  
  // Output options
  type: 'png',
  resizeWidth: 800,
  resizeHeight: 600,
  
  // Timing
  delay: 3,
  waitFor: '.content-loaded',
  
  // Page enhancements
  darkMode: true,
  blockAds: true,
  blockCookieBanners: true,
  
  // Capture area
  full: true,
  selector: '.main-content',
  
  // Storage
  fileName: 'homepage-screenshot',
  s3Acl: 'public-read',
  s3Redirect: true
});
```

### Device Emulation
```javascript
// Mobile screenshot
const mobileScreenshot = await client.screenshot('https://example.com', {
  emulateDevice: 'iphone_15_pro'
});

// Tablet screenshot
const tabletScreenshot = await client.screenshot('https://example.com', {
  emulateDevice: 'ipad_air'
});

// Get available devices
const devices = await client.getDevices();
console.log(devices);
```

### Element-Specific Screenshots
```javascript
// Capture specific element
const elementScreenshot = await client.screenshot('https://example.com', {
  selector: '.hero-section',
  transparent: true,
  type: 'png'
});

// Capture by ID
const idScreenshot = await client.screenshot('https://example.com', {
  selectorId: 'main-content'
});
```

## PDF Generation

### Basic PDF
```javascript
const pdfBuffer = await client.pdf('https://example.com');

// Save to file
import fs from 'fs';
fs.writeFileSync('document.pdf', pdfBuffer);
```

### PDF with Custom Options
```javascript
const pdf = await client.pdf('https://example.com', {
  // Paper settings
  format: 'A4',
  landscape: false,
  
  // Margins (all required together)
  marginTop: '1in',
  marginRight: '1in', 
  marginBottom: '1in',
  marginLeft: '1in',
  
  // Rendering
  scale: 0.8,
  printBackground: true,
  
  // Timing
  delay: 2,
  
  // Storage
  fileName: 'report-2024',
  s3Acl: 'private'
});
```

### Custom Paper Size
```javascript
const customPdf = await client.pdf('https://example.com', {
  width: '8.5in',
  height: '11in',
  marginTop: '0.5in',
  marginRight: '0.5in',
  marginBottom: '0.5in', 
  marginLeft: '0.5in',
  printBackground: true
});
```

## Content Extraction

### HTML Content
```javascript
const content = await client.content('https://example.com');

console.log(content.html); // Full HTML
console.log(content.textContent); // Text only
console.log(content.success); // Boolean status
```

### Content with Options
```javascript
const content = await client.content('https://example.com', {
  delay: 3,
  waitFor: '.article-content',
  userAgent: 'CustomBot/1.0'
});

// Process the content
const cleanText = content.textContent
  .replace(/\s+/g, ' ')
  .trim();
```

## Metadata Extraction

### Basic Metadata
```javascript
const metadata = await client.metadata('https://example.com');

console.log(metadata.title);
console.log(metadata.description);
console.log(metadata.image);
console.log(metadata.author);
console.log(metadata.lang);
```

### Social Media Tags
```javascript
const metadata = await client.metadata('https://blog.example.com/post');

// Open Graph data
console.log(metadata.metadata.title);
console.log(metadata.metadata.description);
console.log(metadata.metadata.image);

// Twitter Card data
console.log(metadata.metadata.publisher);
console.log(metadata.metadata.url);
```

## Animated Screenshots

### Basic Animation
```javascript
const animation = await client.animated('https://example.com', {
  format: 'mp4',
  duration: 10
});

// Save animation
import fs from 'fs';
fs.writeFileSync('animation.mp4', animation);
```

### GIF Animation
```javascript
const gifAnimation = await client.animated('https://example.com', {
  format: 'gif',
  duration: 15,
  hideScrollbars: true
});
```

### Mobile Animation
```javascript
const mobileAnimation = await client.animated('https://example.com', {
  emulateDevice: 'iphone_15_pro',
  format: 'mp4',
  duration: 12,
  darkMode: true
});
```

## Batch Operations

### Parallel Screenshots
```javascript
const urls = [
  'https://example.com',
  'https://example.com/about',
  'https://example.com/contact'
];

const screenshots = await Promise.all(
  urls.map(url => client.screenshot(url, {
    vw: 1200,
    vh: 800,
    fileName: `screenshot-${url.split('/').pop()}`,
    s3Acl: 'public-read'
  }))
);
```

### Sequential Processing with Delay
```javascript
async function processUrls(urls) {
  const results = [];
  
  for (const url of urls) {
    const screenshot = await client.screenshot(url);
    results.push(screenshot);
    
    // Avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  return results;
}
```

## Error Handling

### Basic Error Handling
```javascript
try {
  const screenshot = await client.screenshot('https://example.com');
  console.log('Screenshot captured successfully');
} catch (error) {
  console.error('Screenshot failed:', error.message);
  console.error('Status:', error.status);
  console.error('Details:', error.details);
}
```

### Retry Logic
```javascript
async function captureWithRetry(url, options, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await client.screenshot(url, options);
    } catch (error) {
      if (attempt === maxRetries) throw error;
      
      console.log(`Attempt ${attempt} failed, retrying...`);
      await new Promise(resolve => 
        setTimeout(resolve, attempt * 1000)
      );
    }
  }
}
```

### Error Types
```javascript
try {
  const result = await client.screenshot('https://invalid-url');
} catch (error) {
  switch (error.status) {
    case 400:
      console.error('Invalid request parameters');
      break;
    case 401:
      console.error('Authentication failed');
      break;
    case 403:
      console.error('Insufficient credits');
      break;
    case 429:
      console.error('Rate limit exceeded');
      break;
    case 500:
      console.error('Server error');
      break;
    default:
      console.error('Unknown error:', error.message);
  }
}
```

## TypeScript Support

### Type Definitions
```typescript
import { 
  CaptureClient, 
  ScreenshotOptions, 
  PDFOptions,
  ContentResponse,
  MetadataResponse 
} from '@techulus/capture';

const client = new CaptureClient({
  apiKey: process.env.CAPTURE_API_KEY!,
  secret: process.env.CAPTURE_API_SECRET!
});

// Typed options
const options: ScreenshotOptions = {
  vw: 1920,
  vh: 1080,
  type: 'png',
  darkMode: true
};

const screenshot: Buffer = await client.screenshot('https://example.com', options);
```

### Interface Examples
```typescript
interface ScreenshotOptions {
  vw?: number;
  vh?: number;
  scaleFactor?: number;
  type?: 'png' | 'jpeg' | 'webp';
  delay?: number;
  waitFor?: string;
  darkMode?: boolean;
  blockAds?: boolean;
  // ... more options
}

interface PDFOptions {
  format?: 'A4' | 'Letter' | 'Legal' | 'A3' | 'A5';
  landscape?: boolean;
  scale?: number;
  printBackground?: boolean;
  // ... more options
}
```

## Integration Examples

### Express.js API
```javascript
import express from 'express';
import { CaptureClient } from '@techulus/capture';

const app = express();
const client = new CaptureClient({
  apiKey: process.env.CAPTURE_API_KEY,
  secret: process.env.CAPTURE_API_SECRET
});

app.get('/screenshot', async (req, res) => {
  try {
    const { url, width = 1200, height = 800 } = req.query;
    
    const screenshot = await client.screenshot(url, {
      vw: parseInt(width),
      vh: parseInt(height),
      type: 'png'
    });
    
    res.set('Content-Type', 'image/png');
    res.send(screenshot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000);
```

### Next.js API Route
```javascript
// pages/api/capture.js
import { CaptureClient } from '@techulus/capture';

const client = new CaptureClient({
  apiKey: process.env.CAPTURE_API_KEY,
  secret: process.env.CAPTURE_API_SECRET
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { url, type = 'screenshot' } = req.body;

    let result;
    switch (type) {
      case 'screenshot':
        result = await client.screenshot(url);
        res.setHeader('Content-Type', 'image/png');
        break;
      case 'pdf':
        result = await client.pdf(url);
        res.setHeader('Content-Type', 'application/pdf');
        break;
      default:
        return res.status(400).json({ error: 'Invalid type' });
    }

    res.send(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
```

### Serverless Function (Vercel)
```javascript
// api/capture.js
import { CaptureClient } from '@techulus/capture';

const client = new CaptureClient({
  apiKey: process.env.CAPTURE_API_KEY,
  secret: process.env.CAPTURE_API_SECRET
});

export default async function handler(request, response) {
  const { url } = request.query;

  try {
    const screenshot = await client.screenshot(url, {
      vw: 1200,
      vh: 800,
      blockAds: true,
      blockCookieBanners: true
    });

    response.setHeader('Content-Type', 'image/png');
    response.setHeader('Cache-Control', 's-maxage=3600');
    response.send(screenshot);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
}
```

## Performance Optimization

### Connection Pooling
```javascript
// Reuse client instance
const client = new CaptureClient({
  apiKey: process.env.CAPTURE_API_KEY,
  secret: process.env.CAPTURE_API_SECRET,
  keepAlive: true, // Reuse connections
  maxSockets: 10   // Connection pool size
});
```

### Caching Results
```javascript
const cache = new Map();

async function getCachedScreenshot(url, options) {
  const cacheKey = `${url}-${JSON.stringify(options)}`;
  
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  
  const screenshot = await client.screenshot(url, options);
  cache.set(cacheKey, screenshot);
  
  // Cache for 1 hour
  setTimeout(() => cache.delete(cacheKey), 3600000);
  
  return screenshot;
}
```

### Stream Processing
```javascript
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';

async function saveScreenshotStream(url, filename) {
  const screenshot = await client.screenshot(url);
  const writeStream = createWriteStream(filename);
  
  await pipeline(
    Readable.from(screenshot),
    writeStream
  );
}
```

## Best Practices

### 1. Environment Configuration
```javascript
// Use environment variables
const config = {
  apiKey: process.env.CAPTURE_API_KEY,
  secret: process.env.CAPTURE_API_SECRET,
  baseUrl: process.env.CAPTURE_BASE_URL || 'https://cdn.capture.page'
};

// Validate required config
if (!config.apiKey || !config.secret) {
  throw new Error('Capture API credentials not configured');
}
```

### 2. Error Handling
```javascript
// Comprehensive error handling
async function robustCapture(url, options) {
  try {
    return await client.screenshot(url, options);
  } catch (error) {
    // Log error details
    console.error('Capture failed:', {
      url,
      error: error.message,
      status: error.status,
      timestamp: new Date().toISOString()
    });
    
    // Rethrow for caller to handle
    throw error;
  }
}
```

### 3. Rate Limiting
```javascript
// Simple rate limiter
class RateLimiter {
  constructor(requestsPerSecond = 5) {
    this.interval = 1000 / requestsPerSecond;
    this.lastRequest = 0;
  }
  
  async throttle() {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequest;
    
    if (timeSinceLastRequest < this.interval) {
      await new Promise(resolve => 
        setTimeout(resolve, this.interval - timeSinceLastRequest)
      );
    }
    
    this.lastRequest = Date.now();
  }
}

const limiter = new RateLimiter(5); // 5 requests per second

async function rateLimitedCapture(url, options) {
  await limiter.throttle();
  return client.screenshot(url, options);
}
```

## Troubleshooting

### Common Issues

#### Module Import Errors
```javascript
// ESM modules
import { CaptureClient } from '@techulus/capture';

// CommonJS
const { CaptureClient } = require('@techulus/capture');
```

#### Authentication Failures
```javascript
// Test credentials
try {
  await client.screenshot('https://example.com');
  console.log('Authentication successful');
} catch (error) {
  if (error.status === 401) {
    console.error('Invalid API credentials');
  }
}
```

#### Timeout Issues
```javascript
// Increase timeout for slow pages
const client = new CaptureClient({
  apiKey: process.env.CAPTURE_API_KEY,
  secret: process.env.CAPTURE_API_SECRET,
  timeout: 120000 // 2 minutes
});
```

## See Also

- [SDK Overview](sdk-overview.md) - Compare all available SDKs
- [Go SDK](sdk-go.md) - Go implementation
- [Rust SDK](sdk-rust.md) - Rust implementation
- [GitHub Repository](https://github.com/techulus/capture-node) - Source code and issues