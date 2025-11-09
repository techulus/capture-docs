---
id: sdk-overview
title: SDK Overview
---

Capture API provides official SDKs for popular programming languages, making it easy to integrate screenshot, PDF, and content capture capabilities into your applications.

## Available SDKs

### Node.js SDK
- **Repository**: [techulus/capture-node](https://github.com/techulus/capture-node)
- **Package**: `capture-node`
- **Language**: JavaScript/TypeScript
- **Features**: Full API coverage, TypeScript support, Promise-based

### Go SDK
- **Repository**: [techulus/capture-go](https://github.com/techulus/capture-go)
- **Package**: `github.com/techulus/capture-go`
- **Language**: Go
- **Features**: Idiomatic Go interfaces, comprehensive error handling

### Rust SDK
- **Repository**: [techulus/capture-rust](https://github.com/techulus/capture-rust)
- **Package**: `capture-rust`
- **Language**: Rust
- **Features**: Memory-safe, async/await support, strong typing

## Quick Comparison

| Feature | Node.js | Go | Rust |
|---------|---------|----|----- |
| **Installation** | `npm install capture-node` | `go get github.com/techulus/capture-go` | `cargo add capture-rust` |
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
npm install capture-node

yarn add capture-node

pnpm add capture-node
```

### Go
```bash
go get github.com/techulus/capture-go
```

### Rust
```bash
cargo add capture-rust
```

Or manually add to Cargo.toml:
```toml
[dependencies]
capture-rust = "0.1.0"
tokio = { version = "1", features = ["full"] }
```

## Basic Usage Examples

### Node.js
```javascript
import { Capture } from 'capture-node';

const capture = new Capture('your-api-key', 'your-api-secret');

const screenshot = await capture.fetchImage('https://example.com', {
  vw: 1920,
  vh: 1080,
  type: 'png'
});

const pdf = await capture.fetchPdf('https://example.com', {
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
    c := capture.New("your-api-key", "your-api-secret")

    screenshot, err := c.FetchImage("https://example.com", capture.RequestOptions{
        "vw":   1920,
        "vh":   1080,
        "type": "png",
    })

    pdf, err := c.FetchPDF("https://example.com", capture.RequestOptions{
        "format":    "A4",
        "landscape": false,
    })
}
```

### Rust
```rust
use capture_rust::Capture;
use std::collections::HashMap;
use serde_json::{Value, Number};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let capture = Capture::new(
        "your-api-key".to_string(),
        "your-api-secret".to_string()
    );

    let mut screenshot_opts = HashMap::new();
    screenshot_opts.insert("vw".to_string(), Value::Number(Number::from(1920)));
    screenshot_opts.insert("vh".to_string(), Value::Number(Number::from(1080)));
    screenshot_opts.insert("type".to_string(), Value::String("png".to_string()));

    let screenshot = capture.fetch_image("https://example.com", Some(&screenshot_opts)).await?;

    let mut pdf_opts = HashMap::new();
    pdf_opts.insert("format".to_string(), Value::String("A4".to_string()));
    pdf_opts.insert("landscape".to_string(), Value::Bool(false));

    let pdf = capture.fetch_pdf("https://example.com", Some(&pdf_opts)).await?;

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
| **Batch Operations** | ✅ | ✅ | ✅ |
| **Authentication** | ✅ | ✅ | ✅ |
| **S3 Upload** | ✅ | ✅ | ✅ |
| **Device Emulation** | ✅ | ✅ | ✅ |
| **Page Enhancement** | ✅ | ✅ | ✅ |
| **Custom Headers** | ✅ | ✅ | ✅ |
| **Timeout Control** | ✅ | ✅ | ✅ |
| **Retry Logic** | ✅ | ✅ | ✅ |

## API Methods Comparison

| Operation | Node.js | Go | Rust |
|-----------|---------|----|----- |
| **Screenshot** | `fetchImage()` | `FetchImage()` | `fetch_image()` |
| **PDF** | `fetchPdf()` | `FetchPDF()` | `fetch_pdf()` |
| **Content** | `fetchContent()` | `FetchContent()` | `fetch_content()` |
| **Metadata** | `fetchMetadata()` | `FetchMetadata()` | `fetch_metadata()` |
| **Build Image URL** | `buildImageUrl()` | `BuildImageURL()` | `build_image_url()` |
| **Build PDF URL** | `buildPdfUrl()` | `BuildPDFURL()` | `build_pdf_url()` |
| **Build Content URL** | `buildContentUrl()` | `BuildContentURL()` | `build_content_url()` |
| **Build Metadata URL** | `buildMetadataUrl()` | `BuildMetadataURL()` | `build_metadata_url()` |

## Getting Help

### Documentation
- [Node.js SDK Guide](sdk-nodejs.md)
- [Go SDK Guide](sdk-go.md)
- [Rust SDK Guide](sdk-rust.md)

### GitHub Repositories
- **Node.js**: [Issues](https://github.com/techulus/capture-node/issues) | [Discussions](https://github.com/techulus/capture-node/discussions)
- **Go**: [Issues](https://github.com/techulus/capture-go/issues) | [Discussions](https://github.com/techulus/capture-go/discussions)
- **Rust**: [Issues](https://github.com/techulus/capture-rust/issues) | [Discussions](https://github.com/techulus/capture-rust/discussions)

### Support
- [API Console](https://capture.page/console) - Test API endpoints
- [Full Documentation](https://docs.capture.page) - Complete API reference

## Migration Between SDKs

### Common Patterns
All SDKs follow similar patterns for core operations:

**Node.js:**
```javascript
const capture = new Capture(apiKey, secret);
const screenshot = await capture.fetchImage(url, options);
const pdf = await capture.fetchPdf(url, options);
```

**Go:**
```go
c := capture.New(apiKey, secret)
screenshot, err := c.FetchImage(url, options)
pdf, err := c.FetchPDF(url, options)
```

**Rust:**
```rust
let capture = Capture::new(apiKey, secret);
let screenshot = capture.fetch_image(url, options).await?;
let pdf = capture.fetch_pdf(url, options).await?;
```

### Language-Specific Adaptations
While the core API remains consistent, each SDK adapts to language conventions:

- **Node.js**: Promises, camelCase naming, options as plain objects
- **Go**: Error handling, PascalCase naming, RequestOptions map type
- **Rust**: Result types, snake_case naming, HashMap with serde_json::Value

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

Need help deciding? Check out the individual SDK guides for comprehensive examples and integration patterns.
