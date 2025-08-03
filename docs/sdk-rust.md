---
id: sdk-rust
title: Rust SDK
---

The official Rust SDK for Capture API provides memory-safe, async/await interfaces for all capture operations including screenshots, PDFs, content extraction, and animated screenshots.

## Installation

Add to your `Cargo.toml`:

```toml
[dependencies]
capture-api = "1.0"
tokio = { version = "1.0", features = ["full"] }
```

Or using cargo:

```bash
cargo add capture-api
cargo add tokio --features full
```

## Quick Start

```rust
use capture_api::{CaptureClient, ScreenshotOptions};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Initialize client
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    // Take a screenshot
    let screenshot = client.screenshot("https://example.com", None).await?;
    
    // Save to file
    std::fs::write("screenshot.png", screenshot)?;
    
    Ok(())
}
```

## Authentication

### Basic Setup
```rust
use capture_api::CaptureClient;
use std::env;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new(
        &env::var("CAPTURE_API_KEY")?,
        &env::var("CAPTURE_API_SECRET")?,
    );
    
    Ok(())
}
```

### Custom Configuration
```rust
use capture_api::{CaptureClient, ClientConfig};
use std::time::Duration;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config = ClientConfig {
        base_url: "https://edge.capture.page".to_string(),
        timeout: Duration::from_secs(60),
        user_agent: "MyApp/1.0".to_string(),
        ..Default::default()
    };
    
    let client = CaptureClient::with_config("your-api-key", "your-api-secret", config);
    
    Ok(())
}
```

## Screenshots

### Basic Screenshot
```rust
use capture_api::CaptureClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    // Simple screenshot
    let image_data = client.screenshot("https://example.com", None).await?;
    
    // Save to file
    std::fs::write("screenshot.png", image_data)?;
    
    println!("Screenshot saved successfully");
    Ok(())
}
```

### Advanced Screenshot Options
```rust
use capture_api::{CaptureClient, ScreenshotOptions};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let options = ScreenshotOptions {
        // Viewport settings
        viewport_width: Some(1920),
        viewport_height: Some(1080),
        scale_factor: Some(2.0),
        
        // Output options
        format: Some("png".to_string()),
        resize_width: Some(800),
        resize_height: Some(600),
        
        // Timing
        delay: Some(3),
        wait_for: Some(".content-loaded".to_string()),
        
        // Page enhancements
        dark_mode: Some(true),
        block_ads: Some(true),
        block_cookie_banners: Some(true),
        
        // Capture area
        full_page: Some(true),
        selector: Some(".main-content".to_string()),
        
        // Storage
        file_name: Some("homepage-screenshot".to_string()),
        s3_acl: Some("public-read".to_string()),
        s3_redirect: Some(true),
        
        ..Default::default()
    };
    
    let screenshot = client.screenshot("https://example.com", Some(options)).await?;
    
    println!("Screenshot captured: {} bytes", screenshot.len());
    Ok(())
}
```

### Device Emulation
```rust
use capture_api::{CaptureClient, ScreenshotOptions};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    // Mobile screenshot
    let mobile_options = ScreenshotOptions {
        emulate_device: Some("iphone_15_pro".to_string()),
        ..Default::default()
    };
    let mobile_screenshot = client.screenshot("https://example.com", Some(mobile_options)).await?;
    
    // Tablet screenshot
    let tablet_options = ScreenshotOptions {
        emulate_device: Some("ipad_air".to_string()),
        ..Default::default()
    };
    let tablet_screenshot = client.screenshot("https://example.com", Some(tablet_options)).await?;
    
    // Get available devices
    let devices = client.get_devices().await?;
    println!("Available devices: {}", devices.devices.len());
    
    Ok(())
}
```

### Element-Specific Screenshots
```rust
use capture_api::{CaptureClient, ScreenshotOptions};

async fn element_screenshots() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    // Capture specific element
    let element_options = ScreenshotOptions {
        selector: Some(".hero-section".to_string()),
        transparent: Some(true),
        format: Some("png".to_string()),
        ..Default::default()
    };
    let element_screenshot = client.screenshot("https://example.com", Some(element_options)).await?;
    
    // Capture by ID
    let id_options = ScreenshotOptions {
        selector_id: Some("main-content".to_string()),
        ..Default::default()
    };
    let id_screenshot = client.screenshot("https://example.com", Some(id_options)).await?;
    
    println!("Element screenshot: {} bytes", element_screenshot.len());
    println!("ID screenshot: {} bytes", id_screenshot.len());
    
    Ok(())
}
```

## PDF Generation

### Basic PDF
```rust
use capture_api::CaptureClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let pdf_data = client.pdf("https://example.com", None).await?;
    
    // Save to file
    std::fs::write("document.pdf", pdf_data)?;
    
    println!("PDF saved successfully");
    Ok(())
}
```

### PDF with Custom Options
```rust
use capture_api::{CaptureClient, PDFOptions};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let options = PDFOptions {
        // Paper settings
        format: Some("A4".to_string()),
        landscape: Some(false),
        
        // Margins (all required together)
        margin_top: Some("1in".to_string()),
        margin_right: Some("1in".to_string()),
        margin_bottom: Some("1in".to_string()),
        margin_left: Some("1in".to_string()),
        
        // Rendering
        scale: Some(0.8),
        print_background: Some(true),
        
        // Timing
        delay: Some(2),
        
        // Storage
        file_name: Some("report-2024".to_string()),
        s3_acl: Some("private".to_string()),
        
        ..Default::default()
    };
    
    let pdf = client.pdf("https://example.com", Some(options)).await?;
    
    println!("PDF generated: {} bytes", pdf.len());
    Ok(())
}
```

### Custom Paper Size
```rust
use capture_api::{CaptureClient, PDFOptions};

async fn custom_paper_pdf() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let options = PDFOptions {
        width: Some("8.5in".to_string()),
        height: Some("11in".to_string()),
        margin_top: Some("0.5in".to_string()),
        margin_right: Some("0.5in".to_string()),
        margin_bottom: Some("0.5in".to_string()),
        margin_left: Some("0.5in".to_string()),
        print_background: Some(true),
        ..Default::default()
    };
    
    let pdf = client.pdf("https://example.com", Some(options)).await?;
    
    std::fs::write("custom-size.pdf", pdf)?;
    println!("Custom PDF saved");
    
    Ok(())
}
```

## Content Extraction

### HTML Content
```rust
use capture_api::CaptureClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let content = client.content("https://example.com", None).await?;
    
    println!("Success: {}", content.success);
    println!("HTML length: {}", content.html.len());
    println!("Text content: {}", content.text_content);
    
    Ok(())
}
```

### Content with Options
```rust
use capture_api::{CaptureClient, ContentOptions};

async fn content_with_options() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let options = ContentOptions {
        delay: Some(3),
        wait_for: Some(".article-content".to_string()),
        user_agent: Some("CustomBot/1.0".to_string()),
        ..Default::default()
    };
    
    let content = client.content("https://example.com", Some(options)).await?;
    
    // Process the content
    let clean_text = content.text_content
        .lines()
        .map(|line| line.trim())
        .filter(|line| !line.is_empty())
        .collect::<Vec<_>>()
        .join(" ");
    
    println!("Clean text: {}", clean_text);
    
    Ok(())
}
```

## Metadata Extraction

### Basic Metadata
```rust
use capture_api::CaptureClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let metadata = client.metadata("https://example.com").await?;
    
    println!("Title: {}", metadata.metadata.title.unwrap_or_default());
    println!("Description: {}", metadata.metadata.description.unwrap_or_default());
    println!("Image: {}", metadata.metadata.image.unwrap_or_default());
    println!("Author: {}", metadata.metadata.author.unwrap_or_default());
    println!("Language: {}", metadata.metadata.lang.unwrap_or_default());
    
    Ok(())
}
```

### Social Media Tags
```rust
use capture_api::CaptureClient;

async fn social_metadata() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let metadata = client.metadata("https://blog.example.com/post").await?;
    
    // Open Graph data
    if let Some(title) = &metadata.metadata.title {
        println!("OG Title: {}", title);
    }
    if let Some(description) = &metadata.metadata.description {
        println!("OG Description: {}", description);
    }
    if let Some(image) = &metadata.metadata.image {
        println!("OG Image: {}", image);
    }
    
    // Publisher info
    if let Some(publisher) = &metadata.metadata.publisher {
        println!("Publisher: {}", publisher);
    }
    if let Some(url) = &metadata.metadata.url {
        println!("URL: {}", url);
    }
    
    Ok(())
}
```

## Animated Screenshots

### Basic Animation
```rust
use capture_api::{CaptureClient, AnimatedOptions};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let options = AnimatedOptions {
        format: Some("mp4".to_string()),
        duration: Some(10),
        fps: Some(30),
        ..Default::default()
    };
    
    let animation = client.animated("https://example.com", Some(options)).await?;
    
    // Save animation
    std::fs::write("animation.mp4", animation)?;
    
    println!("Animation saved successfully");
    Ok(())
}
```

### Scrolling Animation
```rust
use capture_api::{CaptureClient, AnimatedOptions};

async fn scrolling_animation() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let options = AnimatedOptions {
        format: Some("gif".to_string()),
        duration: Some(15),
        fps: Some(24),
        scrolling: Some(true),
        scroll_speed: Some(300),
        hide_scrollbars: Some(true),
        ..Default::default()
    };
    
    let animation = client.animated("https://example.com", Some(options)).await?;
    
    std::fs::write("scroll-animation.gif", animation)?;
    println!("Scrolling animation saved");
    
    Ok(())
}
```

### Mobile Animation
```rust
use capture_api::{CaptureClient, AnimatedOptions};

async fn mobile_animation() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let options = AnimatedOptions {
        emulate_device: Some("iphone_15_pro".to_string()),
        format: Some("mp4".to_string()),
        duration: Some(12),
        fps: Some(30),
        dark_mode: Some(true),
        ..Default::default()
    };
    
    let animation = client.animated("https://example.com", Some(options)).await?;
    
    println!("Mobile animation captured: {} bytes", animation.len());
    
    Ok(())
}
```

## Batch Operations

### Parallel Screenshots with Futures
```rust
use capture_api::{CaptureClient, ScreenshotOptions};
use futures::future::join_all;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let urls = vec![
        "https://example.com",
        "https://example.com/about",
        "https://example.com/contact",
    ];
    
    let options = ScreenshotOptions {
        viewport_width: Some(1200),
        viewport_height: Some(800),
        s3_acl: Some("public-read".to_string()),
        ..Default::default()
    };
    
    // Create futures for all screenshots
    let futures = urls.into_iter().map(|url| {
        let client = &client;
        let options = options.clone();
        async move {
            let file_name = url.replace("https://", "").replace("/", "-");
            let mut opts = options;
            opts.file_name = Some(format!("screenshot-{}", file_name));
            
            match client.screenshot(url, Some(opts)).await {
                Ok(data) => Ok((url, data)),
                Err(e) => Err((url, e)),
            }
        }
    });
    
    // Execute all futures concurrently
    let results = join_all(futures).await;
    
    for result in results {
        match result {
            Ok((url, data)) => println!("Captured {}: {} bytes", url, data.len()),
            Err((url, error)) => println!("Error capturing {}: {}", url, error),
        }
    }
    
    Ok(())
}
```

### Sequential Processing with Rate Limiting
```rust
use capture_api::CaptureClient;
use tokio::time::{sleep, Duration};

async fn sequential_processing() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let urls = vec![
        "https://example.com",
        "https://example.com/about",
        "https://example.com/contact",
    ];
    
    let mut results = Vec::new();
    
    for (i, url) in urls.iter().enumerate() {
        match client.screenshot(url, None).await {
            Ok(screenshot) => {
                results.push(screenshot);
                println!("Captured {}: {} bytes", url, results.last().unwrap().len());
            }
            Err(e) => {
                println!("Error capturing {}: {}", url, e);
            }
        }
        
        // Rate limiting - avoid overwhelming the server
        if i < urls.len() - 1 {
            sleep(Duration::from_secs(1)).await;
        }
    }
    
    println!("Captured {} screenshots", results.len());
    Ok(())
}
```

### Stream Processing
```rust
use capture_api::CaptureClient;
use futures::stream::{self, StreamExt};
use tokio::time::{sleep, Duration};

async fn stream_processing() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let urls = vec![
        "https://example.com",
        "https://example.com/about", 
        "https://example.com/contact",
    ];
    
    // Process URLs as a stream with concurrency limit
    let results: Vec<_> = stream::iter(urls)
        .map(|url| async move {
            // Rate limiting per request
            sleep(Duration::from_millis(500)).await;
            
            match client.screenshot(url, None).await {
                Ok(data) => {
                    println!("✓ Captured {}: {} bytes", url, data.len());
                    Some((url, data))
                }
                Err(e) => {
                    println!("✗ Failed {}: {}", url, e);
                    None
                }
            }
        })
        .buffer_unordered(3) // Max 3 concurrent requests
        .filter_map(|result| async move { result })
        .collect()
        .await;
    
    println!("Successfully captured {} screenshots", results.len());
    Ok(())
}
```

## Error Handling

### Basic Error Handling
```rust
use capture_api::{CaptureClient, CaptureError};

#[tokio::main]
async fn main() {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    match client.screenshot("https://example.com", None).await {
        Ok(screenshot) => {
            println!("Screenshot captured successfully: {} bytes", screenshot.len());
        }
        Err(e) => {
            match e {
                CaptureError::ApiError { status, message, details } => {
                    println!("API Error:");
                    println!("  Status: {}", status);
                    println!("  Message: {}", message);
                    if let Some(details) = details {
                        println!("  Details: {}", details);
                    }
                }
                CaptureError::NetworkError(e) => {
                    println!("Network error: {}", e);
                }
                CaptureError::SerializationError(e) => {
                    println!("Serialization error: {}", e);
                }
                _ => {
                    println!("Other error: {}", e);
                }
            }
        }
    }
}
```

### Retry Logic with Exponential Backoff
```rust
use capture_api::{CaptureClient, CaptureError, ScreenshotOptions};
use tokio::time::{sleep, Duration};

async fn capture_with_retry(
    client: &CaptureClient,
    url: &str,
    options: Option<ScreenshotOptions>,
    max_retries: u32,
) -> Result<Vec<u8>, CaptureError> {
    let mut last_error = None;
    
    for attempt in 1..=max_retries {
        match client.screenshot(url, options.clone()).await {
            Ok(screenshot) => return Ok(screenshot),
            Err(e) => {
                last_error = Some(e);
                
                // Check if we should retry
                if let Some(CaptureError::ApiError { status, .. }) = &last_error {
                    // Don't retry client errors (4xx)
                    if *status >= 400 && *status < 500 {
                        break;
                    }
                }
                
                if attempt < max_retries {
                    let wait_time = Duration::from_secs(2_u64.pow(attempt - 1));
                    println!("Attempt {} failed, retrying in {:?}...", attempt, wait_time);
                    sleep(wait_time).await;
                }
            }
        }
    }
    
    Err(last_error.unwrap())
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    match capture_with_retry(&client, "https://example.com", None, 3).await {
        Ok(screenshot) => println!("Success: {} bytes", screenshot.len()),
        Err(e) => println!("Failed after retries: {}", e),
    }
    
    Ok(())
}
```

### Comprehensive Error Matching
```rust
use capture_api::{CaptureClient, CaptureError};

async fn handle_specific_errors() {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    match client.screenshot("https://invalid-url", None).await {
        Ok(_) => println!("Success"),
        Err(e) => match e {
            CaptureError::ApiError { status, message, .. } => match status {
                400 => println!("Bad request: Invalid parameters"),
                401 => println!("Unauthorized: Check API credentials"),
                403 => println!("Forbidden: Insufficient credits or access denied"),
                429 => println!("Rate limit exceeded: Slow down requests"),
                500..=599 => println!("Server error: {}", message),
                _ => println!("Unknown API error: {} - {}", status, message),
            },
            CaptureError::NetworkError(e) => {
                println!("Network error - check internet connection: {}", e);
            }
            CaptureError::Timeout => {
                println!("Request timed out - try increasing timeout or using edge endpoint");
            }
            _ => println!("Other error: {}", e),
        }
    }
}
```

## Integration Examples

### Axum Web Server
```rust
use axum::{
    extract::Query,
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
    Router,
};
use capture_api::{CaptureClient, ScreenshotOptions};
use serde::Deserialize;
use std::collections::HashMap;
use tokio;

#[derive(Deserialize)]
struct ScreenshotQuery {
    url: String,
    width: Option<i32>,
    height: Option<i32>,
}

async fn screenshot_handler(Query(params): Query<ScreenshotQuery>) -> Response {
    let client = CaptureClient::new(
        &std::env::var("CAPTURE_API_KEY").unwrap(),
        &std::env::var("CAPTURE_API_SECRET").unwrap(),
    );
    
    let options = ScreenshotOptions {
        viewport_width: params.width,
        viewport_height: params.height,
        ..Default::default()
    };
    
    match client.screenshot(&params.url, Some(options)).await {
        Ok(screenshot) => {
            let mut headers = axum::http::HeaderMap::new();
            headers.insert("content-type", "image/png".parse().unwrap());
            (StatusCode::OK, headers, screenshot).into_response()
        }
        Err(_) => (StatusCode::INTERNAL_SERVER_ERROR, "Failed to capture screenshot").into_response(),
    }
}

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/screenshot", get(screenshot_handler));
    
    println!("Server running on http://0.0.0.0:3000");
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
```

### CLI Application with Clap
```rust
use capture_api::{CaptureClient, ScreenshotOptions};
use clap::{Arg, Command};
use std::process;

#[tokio::main]
async fn main() {
    let matches = Command::new("capture-cli")
        .version("1.0")
        .about("Capture screenshots using Capture API")
        .arg(Arg::new("url")
            .required(true)
            .help("URL to capture"))
        .arg(Arg::new("output")
            .short('o')
            .long("output")
            .default_value("screenshot.png")
            .help("Output filename"))
        .arg(Arg::new("width")
            .short('w')
            .long("width")
            .value_parser(clap::value_parser!(i32))
            .default_value("1200")
            .help("Viewport width"))
        .arg(Arg::new("height")
            .short('h')
            .long("height")
            .value_parser(clap::value_parser!(i32))
            .default_value("800")
            .help("Viewport height"))
        .arg(Arg::new("device")
            .short('d')
            .long("device")
            .help("Device to emulate"))
        .get_matches();
    
    let url = matches.get_one::<String>("url").unwrap();
    let output = matches.get_one::<String>("output").unwrap();
    let width = *matches.get_one::<i32>("width").unwrap();
    let height = *matches.get_one::<i32>("height").unwrap();
    let device = matches.get_one::<String>("device");
    
    let api_key = std::env::var("CAPTURE_API_KEY")
        .unwrap_or_else(|_| {
            eprintln!("CAPTURE_API_KEY environment variable not set");
            process::exit(1);
        });
    
    let api_secret = std::env::var("CAPTURE_API_SECRET")
        .unwrap_or_else(|_| {
            eprintln!("CAPTURE_API_SECRET environment variable not set");
            process::exit(1);
        });
    
    let client = CaptureClient::new(&api_key, &api_secret);
    
    let options = ScreenshotOptions {
        viewport_width: Some(width),
        viewport_height: Some(height),
        emulate_device: device.cloned(),
        ..Default::default()
    };
    
    println!("Capturing {}...", url);
    
    match client.screenshot(url, Some(options)).await {
        Ok(screenshot) => {
            match std::fs::write(output, screenshot) {
                Ok(_) => println!("Screenshot saved to {}", output),
                Err(e) => {
                    eprintln!("Error saving file: {}", e);
                    process::exit(1);
                }
            }
        }
        Err(e) => {
            eprintln!("Error capturing screenshot: {}", e);
            process::exit(1);
        }
    }
}
```

### Background Worker with Tokio
```rust
use capture_api::{CaptureClient, ScreenshotOptions};
use tokio::{sync::mpsc, time::{sleep, Duration}};

#[derive(Debug, Clone)]
struct CaptureJob {
    url: String,
    options: ScreenshotOptions,
    output_path: String,
}

struct CaptureWorker {
    client: CaptureClient,
    receiver: mpsc::Receiver<CaptureJob>,
}

impl CaptureWorker {
    fn new(client: CaptureClient, receiver: mpsc::Receiver<CaptureJob>) -> Self {
        Self { client, receiver }
    }
    
    async fn run(mut self) {
        while let Some(job) = self.receiver.recv().await {
            println!("Processing job: {}", job.url);
            
            // Rate limiting
            sleep(Duration::from_millis(500)).await;
            
            match self.client.screenshot(&job.url, Some(job.options)).await {
                Ok(screenshot) => {
                    match std::fs::write(&job.output_path, screenshot) {
                        Ok(_) => println!("✓ Saved {}", job.output_path),
                        Err(e) => println!("✗ Failed to save {}: {}", job.output_path, e),
                    }
                }
                Err(e) => println!("✗ Failed to capture {}: {}", job.url, e),
            }
        }
        
        println!("Worker shutting down");
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let (sender, receiver) = mpsc::channel(100);
    
    // Spawn worker
    let worker = CaptureWorker::new(client, receiver);
    tokio::spawn(worker.run());
    
    // Add jobs
    let urls = vec![
        "https://example.com",
        "https://example.com/about",
        "https://example.com/contact",
    ];
    
    for (i, url) in urls.iter().enumerate() {
        let job = CaptureJob {
            url: url.to_string(),
            options: ScreenshotOptions {
                viewport_width: Some(1200),
                viewport_height: Some(800),
                ..Default::default()
            },
            output_path: format!("screenshot_{}.png", i),
        };
        
        sender.send(job).await?;
    }
    
    // Close sender to signal completion
    drop(sender);
    
    // Wait a bit for worker to finish
    sleep(Duration::from_secs(10)).await;
    
    Ok(())
}
```

## Performance Optimization

### Connection Pooling
```rust
use capture_api::{CaptureClient, ClientConfig};
use std::time::Duration;

// Create client with optimized configuration
fn create_optimized_client() -> CaptureClient {
    let config = ClientConfig {
        timeout: Duration::from_secs(30),
        connect_timeout: Duration::from_secs(10),
        max_idle_connections: 10,
        keep_alive: true,
        ..Default::default()
    };
    
    CaptureClient::with_config("your-api-key", "your-api-secret", config)
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = create_optimized_client();
    
    // Reuse the same client for multiple requests
    let screenshot1 = client.screenshot("https://example.com", None).await?;
    let screenshot2 = client.screenshot("https://example.org", None).await?;
    
    println!("Screenshot 1: {} bytes", screenshot1.len());
    println!("Screenshot 2: {} bytes", screenshot2.len());
    
    Ok(())
}
```

### Memory-Efficient Processing
```rust
use capture_api::CaptureClient;
use tokio::fs::File;
use tokio::io::AsyncWriteExt;

async fn memory_efficient_processing() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    let urls = vec![
        "https://example.com",
        "https://example.com/about",
        "https://example.com/contact",
        // ... many more URLs
    ];
    
    // Process URLs in chunks to avoid memory buildup
    let chunk_size = 5;
    
    for chunk in urls.chunks(chunk_size) {
        for url in chunk {
            let screenshot = client.screenshot(url, None).await?;
            
            // Write directly to file to avoid keeping in memory
            let filename = format!("screenshot_{}.png", url.replace("https://", "").replace("/", "_"));
            let mut file = File::create(&filename).await?;
            file.write_all(&screenshot).await?;
            
            println!("Saved {}", filename);
            
            // screenshot is dropped here, freeing memory
        }
        
        // Optional: force garbage collection between chunks
        // (Rust handles this automatically, but you could add delays)
        tokio::time::sleep(tokio::time::Duration::from_millis(100)).await;
    }
    
    Ok(())
}
```

## Best Practices

### 1. Configuration Management
```rust
use serde::Deserialize;

#[derive(Deserialize)]
struct Config {
    capture_api_key: String,
    capture_api_secret: String,
    #[serde(default = "default_timeout")]
    capture_timeout: u64,
    #[serde(default = "default_base_url")]
    capture_base_url: String,
}

fn default_timeout() -> u64 { 30 }
fn default_base_url() -> String { "https://cdn.capture.page".to_string() }

impl Config {
    fn from_env() -> Result<Self, Box<dyn std::error::Error>> {
        Ok(Config {
            capture_api_key: std::env::var("CAPTURE_API_KEY")?,
            capture_api_secret: std::env::var("CAPTURE_API_SECRET")?,
            capture_timeout: std::env::var("CAPTURE_TIMEOUT")
                .unwrap_or_else(|_| "30".to_string())
                .parse()?,
            capture_base_url: std::env::var("CAPTURE_BASE_URL")
                .unwrap_or_else(|_| "https://cdn.capture.page".to_string()),
        })
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let config = Config::from_env()?;
    
    let client_config = capture_api::ClientConfig {
        base_url: config.capture_base_url,
        timeout: std::time::Duration::from_secs(config.capture_timeout),
        ..Default::default()
    };
    
    let client = CaptureClient::with_config(
        &config.capture_api_key,
        &config.capture_api_secret,
        client_config,
    );
    
    Ok(())
}
```

### 2. Structured Logging with Tracing
```rust
use capture_api::CaptureClient;
use tracing::{info, error, instrument};

#[instrument]
async fn capture_with_logging(
    client: &CaptureClient,
    url: &str,
) -> Result<Vec<u8>, Box<dyn std::error::Error>> {
    info!("Starting capture for URL: {}", url);
    
    let start = std::time::Instant::now();
    
    match client.screenshot(url, None).await {
        Ok(screenshot) => {
            let duration = start.elapsed();
            info!(
                url = url,
                size = screenshot.len(),
                duration_ms = duration.as_millis(),
                "Capture successful"
            );
            Ok(screenshot)
        }
        Err(e) => {
            let duration = start.elapsed();
            error!(
                url = url,
                error = %e,
                duration_ms = duration.as_millis(),
                "Capture failed"
            );
            Err(e.into())
        }
    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    tracing_subscriber::fmt::init();
    
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    let _screenshot = capture_with_logging(&client, "https://example.com").await?;
    
    Ok(())
}
```

### 3. Circuit Breaker Pattern
```rust
use std::sync::{Arc, Mutex};
use tokio::time::{Duration, Instant};

#[derive(Clone)]
struct CircuitBreaker {
    failure_threshold: u32,
    recovery_timeout: Duration,
    state: Arc<Mutex<CircuitState>>,
}

struct CircuitState {
    failures: u32,
    last_failure_time: Option<Instant>,
    state: State,
}

#[derive(Clone, Copy)]
enum State {
    Closed,
    Open,
    HalfOpen,
}

impl CircuitBreaker {
    fn new(failure_threshold: u32, recovery_timeout: Duration) -> Self {
        Self {
            failure_threshold,
            recovery_timeout,
            state: Arc::new(Mutex::new(CircuitState {
                failures: 0,
                last_failure_time: None,
                state: State::Closed,
            })),
        }
    }
    
    async fn call<F, Fut, T, E>(&self, f: F) -> Result<T, CircuitBreakerError<E>>
    where
        F: FnOnce() -> Fut,
        Fut: std::future::Future<Output = Result<T, E>>,
    {
        // Check if circuit should be opened
        {
            let mut state = self.state.lock().unwrap();
            match state.state {
                State::Open => {
                    if let Some(last_failure) = state.last_failure_time {
                        if last_failure.elapsed() > self.recovery_timeout {
                            state.state = State::HalfOpen;
                        } else {
                            return Err(CircuitBreakerError::CircuitOpen);
                        }
                    }
                }
                State::Closed | State::HalfOpen => {}
            }
        }
        
        // Execute the function
        match f().await {
            Ok(result) => {
                // Reset on success
                let mut state = self.state.lock().unwrap();
                state.failures = 0;
                state.state = State::Closed;
                Ok(result)
            }
            Err(e) => {
                // Handle failure
                let mut state = self.state.lock().unwrap();
                state.failures += 1;
                state.last_failure_time = Some(Instant::now());
                
                if state.failures >= self.failure_threshold {
                    state.state = State::Open;
                }
                
                Err(CircuitBreakerError::CallFailed(e))
            }
        }
    }
}

#[derive(Debug)]
enum CircuitBreakerError<E> {
    CircuitOpen,
    CallFailed(E),
}

// Usage with Capture API
async fn capture_with_circuit_breaker() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    let circuit_breaker = CircuitBreaker::new(3, Duration::from_secs(30));
    
    match circuit_breaker.call(|| client.screenshot("https://example.com", None)).await {
        Ok(screenshot) => {
            println!("Success: {} bytes", screenshot.len());
        }
        Err(CircuitBreakerError::CircuitOpen) => {
            println!("Circuit breaker is open - too many failures");
        }
        Err(CircuitBreakerError::CallFailed(e)) => {
            println!("API call failed: {}", e);
        }
    }
    
    Ok(())
}
```

## Troubleshooting

### Common Issues

#### Dependency Conflicts
```toml
# Ensure compatible versions in Cargo.toml
[dependencies]
capture-api = "1.0"
tokio = { version = "1.0", features = ["full"] }
reqwest = { version = "0.11", features = ["json"] }
serde = { version = "1.0", features = ["derive"] }
```

#### Authentication Failures
```rust
async fn test_auth() -> Result<(), Box<dyn std::error::Error>> {
    let client = CaptureClient::new("your-api-key", "your-api-secret");
    
    // Test with a simple request
    match client.screenshot("https://example.com", None).await {
        Ok(_) => println!("Authentication successful"),
        Err(capture_api::CaptureError::ApiError { status: 401, .. }) => {
            println!("Authentication failed - check your API credentials");
        }
        Err(e) => println!("Other error: {}", e),
    }
    
    Ok(())
}
```

#### Timeout Issues
```rust
use capture_api::{CaptureClient, ClientConfig};
use std::time::Duration;

// Increase timeout for slow pages
let config = ClientConfig {
    timeout: Duration::from_secs(120), // 2 minutes
    ..Default::default()
};

let client = CaptureClient::with_config("your-api-key", "your-api-secret", config);
```

#### Async Runtime Issues
```rust
// Make sure you're using the tokio runtime
#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Your async code here
    Ok(())
}

// Or create runtime manually
fn main() -> Result<(), Box<dyn std::error::Error>> {
    let rt = tokio::runtime::Runtime::new()?;
    rt.block_on(async {
        // Your async code here
        Ok(())
    })
}
```

## See Also

- [SDK Overview](sdk-overview.md) - Compare all available SDKs
- [Node.js SDK](sdk-nodejs.md) - JavaScript/TypeScript implementation
- [Go SDK](sdk-go.md) - Go implementation
- [GitHub Repository](https://github.com/techulus/capture-rust) - Source code and issues