---
id: sdk-overview
title: SDK Overview
---

Capture API provides official SDKs for popular programming languages, making it easy to integrate screenshot, PDF, and content capture capabilities into your applications.

## Available SDKs

### Node.js SDK
- **Repository**: [techulus/capture-node](https://github.com/techulus/capture-node)
- **Package**: `@techulus/capture`
- **Language**: JavaScript/TypeScript
- **Features**: Full API coverage, TypeScript support, Promise-based

### Go SDK  
- **Repository**: [techulus/capture-go](https://github.com/techulus/capture-go)
- **Package**: `github.com/techulus/capture-go`
- **Language**: Go
- **Features**: Idiomatic Go interfaces, comprehensive error handling

### Rust SDK
- **Repository**: [techulus/capture-rust](https://github.com/techulus/capture-rust)
- **Package**: `capture-api`
- **Language**: Rust
- **Features**: Memory-safe, async/await support, strong typing

## Quick Comparison

| Feature | Node.js | Go | Rust |
|---------|---------|----|----- |
| **Installation** | `npm install @techulus/capture` | `go get github.com/techulus/capture-go` | `cargo add capture-api` |
| **Async/Await** | ✅ Promises | ✅ Goroutines | ✅ Tokio |
| **Error Handling** | ✅ Try/Catch | ✅ Error interface | ✅ Result types |
| **Memory Safety** | ✅ GC | ✅ GC | ✅ Ownership |
| **Performance** | Good | Excellent | Excellent |
| **Ecosystem** | Huge | Large | Growing |

## Common Features

All SDKs provide:

### Core Functionality
- **Screenshot Capture**: Static images with extensive options
- **PDF Generation**: Web pages to PDF conversion
- **Content Extraction**: HTML content and text extraction
- **Metadata Retrieval**: Page metadata and social tags
- **Animated Screenshots**: GIF, MP4, WebM generation

### Advanced Options
- **Authentication**: HTTP Basic Auth and custom headers
- **Viewport Control**: Device emulation and custom dimensions
- **Page Enhancement**: Dark mode, ad blocking, cookie banner removal
- **Storage Integration**: S3 upload with custom naming and ACLs
- **Timing Control**: Delays, element waiting, and cache management

### Developer Experience
- **Comprehensive Documentation**: Usage examples and API reference
- **Error Handling**: Detailed error messages and status codes
- **Type Safety**: Strong typing where supported by language
- **Async Support**: Non-blocking operations for all network calls

## Choosing an SDK

### Use Node.js SDK When:
- Building web applications (React, Vue, Angular)
- Creating serverless functions (Vercel, Netlify, AWS Lambda)
- Developing Node.js APIs and microservices
- Need TypeScript support out of the box
- Working with existing JavaScript ecosystem

### Use Go SDK When:
- Building high-performance backend services
- Creating CLI tools and utilities
- Developing microservices with Go
- Need excellent concurrency handling
- Working in containerized environments

### Use Rust SDK When:
- Building system-level applications
- Need maximum performance and memory efficiency
- Creating WebAssembly applications
- Developing secure, memory-safe applications
- Working with async/await patterns in Rust

## Installation Examples

### Node.js
```bash
# npm
npm install @techulus/capture

# yarn
yarn add @techulus/capture

# pnpm
pnpm add @techulus/capture
```

### Go
```bash
go mod init your-project
go get github.com/techulus/capture-go
```

### Rust
```bash
# Add to Cargo.toml
cargo add capture-api

# Or manually add to Cargo.toml
[dependencies]
capture-api = "1.0"
```

## Basic Usage Examples

### Node.js
```javascript
import { CaptureClient } from '@techulus/capture';

const client = new CaptureClient({
  apiKey: 'your-api-key',
  secret: 'your-api-secret'
});

// Take a screenshot
const screenshot = await client.screenshot('https://example.com', {
  vw: 1920,
  vh: 1080,
  format: 'png'
});

// Generate PDF
const pdf = await client.pdf('https://example.com', {
  format: 'A4',
  landscape: false
});
```

### Go
```go
package main

import (
    "github.com/techulus/capture-go"
)

func main() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    // Take a screenshot
    screenshot, err := client.Screenshot("https://example.com", &capture.ScreenshotOptions{
        ViewportWidth:  1920,
        ViewportHeight: 1080,
        Format:        "png",
    })
    
    // Generate PDF
    pdf, err := client.PDF("https://example.com", &capture.PDFOptions{
        Format:    "A4",
        Landscape: false,
    })
}
```

### Rust
```rust
use capture_api::{CaptureClient, ScreenshotOptions, PDFOptions};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    // Take a screenshot
    let screenshot = client.screenshot("https://example.com", ScreenshotOptions {
        viewport_width: Some(1920),
        viewport_height: Some(1080),
        format: Some("png".to_string()),
        ..Default::default()
    }).await?;
    
    // Generate PDF
    let pdf = client.pdf("https://example.com", PDFOptions {
        format: Some("A4".to_string()),
        landscape: Some(false),
        ..Default::default()
    }).await?;
    
    Ok(())
}
```

## SDK Features Matrix

| Feature | Node.js | Go | Rust |
|---------|---------|----|----- |
| **Screenshots** | ✅ | ✅ | ✅ |
| **PDFs** | ✅ | ✅ | ✅ |
| **Content** | ✅ | ✅ | ✅ |
| **Metadata** | ✅ | ✅ | ✅ |
| **Animated** | ✅ | ✅ | ✅ |
| **Batch Operations** | ✅ | ✅ | ✅ |
| **Authentication** | ✅ | ✅ | ✅ |
| **S3 Upload** | ✅ | ✅ | ✅ |
| **Device Emulation** | ✅ | ✅ | ✅ |
| **Page Enhancement** | ✅ | ✅ | ✅ |
| **Custom Headers** | ✅ | ✅ | ✅ |
| **Timeout Control** | ✅ | ✅ | ✅ |
| **Retry Logic** | ✅ | ✅ | ✅ |

## Getting Help

### Documentation
- [Node.js SDK Guide](sdk-nodejs.md)
- [Go SDK Guide](sdk-go.md) 
- [Rust SDK Guide](sdk-rust.md)

### GitHub Repositories
- **Node.js**: [Issues](https://github.com/techulus/capture-node/issues) | [Discussions](https://github.com/techulus/capture-node/discussions)
- **Go**: [Issues](https://github.com/techulus/capture-go/issues) | [Discussions](https://github.com/techulus/capture-go/discussions)
- **Rust**: [Issues](https://github.com/techulus/capture-rust/issues) | [Discussions](https://github.com/techulus/capture-rust/discussions)

### Community
- Join our [Discord](https://discord.gg/capture) for real-time help
- Follow [@CaptureAPI](https://twitter.com/CaptureAPI) for updates
- Check out [examples repository](https://github.com/techulus/capture-examples)

## Migration Between SDKs

### Common Patterns
All SDKs follow similar patterns for core operations:

```
// Authentication
client = new Client(apiKey, secret)

// Screenshot
result = client.screenshot(url, options)

// PDF  
result = client.pdf(url, options)

// Content
result = client.content(url, options)
```

### Language-Specific Adaptations
While the core API remains consistent, each SDK adapts to language conventions:

- **Node.js**: Promises, camelCase options
- **Go**: Error handling, PascalCase structs
- **Rust**: Result types, snake_case fields

## Performance Considerations

### Concurrency
- **Node.js**: Event loop, Promise.all for parallel requests
- **Go**: Goroutines for concurrent operations
- **Rust**: Tokio async runtime

### Memory Usage
- **Node.js**: Garbage collected, moderate memory usage
- **Go**: Garbage collected, efficient memory usage
- **Rust**: Zero-cost abstractions, minimal memory usage

### Deployment
- **Node.js**: Serverless-friendly, fast cold starts
- **Go**: Excellent for containers, minimal dependencies
- **Rust**: Static binaries, optimal for production

## Contributing

All SDKs are open source and welcome contributions:

1. **Bug Reports**: Use GitHub issues for each SDK
2. **Feature Requests**: Discuss in GitHub discussions
3. **Pull Requests**: Follow each repository's contribution guidelines
4. **Documentation**: Help improve examples and guides

## Next Steps

Choose your SDK and dive into the detailed documentation:

- **[Node.js SDK →](sdk-nodejs.md)** - Perfect for web applications and serverless
- **[Go SDK →](sdk-go.md)** - Ideal for backend services and CLI tools  
- **[Rust SDK →](sdk-rust.md)** - Best for performance-critical applications

Need help deciding? Check out our [integration examples](https://github.com/techulus/capture-examples) to see real-world usage patterns for each SDK.