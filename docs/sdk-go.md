---
id: sdk-go
title: Go SDK
---

The official Go SDK for Capture API provides idiomatic Go interfaces for all capture operations including screenshots, PDFs, content extraction, and animated screenshots.

## Installation

```bash
go mod init your-project
go get github.com/techulus/capture-go
```

## Quick Start

```go
package main

import (
    "fmt"
    "os"
    
    "github.com/techulus/capture-go"
)

func main() {
    // Initialize client
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    // Take a screenshot
    screenshot, err := client.Screenshot("https://example.com", nil)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    // Save to file
    err = os.WriteFile("screenshot.png", screenshot, 0644)
    if err != nil {
        fmt.Printf("Error saving file: %v\n", err)
    }
}
```

## Authentication

### Basic Setup
```go
package main

import (
    "os"
    "github.com/techulus/capture-go"
)

func main() {
    client := capture.NewClient(
        os.Getenv("CAPTURE_API_KEY"),
        os.Getenv("CAPTURE_API_SECRET"),
    )
}
```

### Custom Configuration
```go
client := capture.NewClientWithConfig(&capture.Config{
    APIKey:    "your-api-key",
    Secret:    "your-api-secret",
    BaseURL:   "https://edge.capture.page", // Use edge endpoint
    Timeout:   60 * time.Second,           // 60 second timeout
    UserAgent: "MyApp/1.0",
})
```

## Screenshots

### Basic Screenshot
```go
package main

import (
    "fmt"
    "os"
    "github.com/techulus/capture-go"
)

func main() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    // Simple screenshot
    imageData, err := client.Screenshot("https://example.com", nil)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    // Save to file
    err = os.WriteFile("screenshot.png", imageData, 0644)
    if err != nil {
        fmt.Printf("Error saving: %v\n", err)
    }
}
```

### Advanced Screenshot Options
```go
func advancedScreenshot() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    options := &capture.ScreenshotOptions{
        // Viewport settings
        ViewportWidth:  1920,
        ViewportHeight: 1080,
        ScaleFactor:    2,
        
        // Output options
        Format:       "png",
        ResizeWidth:  800,
        ResizeHeight: 600,
        
        // Timing
        Delay:   3,
        WaitFor: ".content-loaded",
        
        // Page enhancements
        DarkMode:            true,
        BlockAds:            true,
        BlockCookieBanners:  true,
        
        // Capture area
        FullPage: true,
        Selector: ".main-content",
        
        // Storage
        FileName:   "homepage-screenshot",
        S3ACL:      "public-read",
        S3Redirect: true,
    }
    
    screenshot, err := client.Screenshot("https://example.com", options)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Screenshot captured: %d bytes\n", len(screenshot))
}
```

### Device Emulation
```go
func deviceEmulation() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    // Mobile screenshot
    mobileOptions := &capture.ScreenshotOptions{
        EmulateDevice: "iphone_15_pro",
    }
    mobileScreenshot, err := client.Screenshot("https://example.com", mobileOptions)
    if err != nil {
        fmt.Printf("Mobile screenshot error: %v\n", err)
        return
    }
    
    // Tablet screenshot
    tabletOptions := &capture.ScreenshotOptions{
        EmulateDevice: "ipad_air",
    }
    tabletScreenshot, err := client.Screenshot("https://example.com", tabletOptions)
    if err != nil {
        fmt.Printf("Tablet screenshot error: %v\n", err)
        return
    }
    
    // Get available devices
    devices, err := client.GetDevices()
    if err != nil {
        fmt.Printf("Error getting devices: %v\n", err)
        return
    }
    
    fmt.Printf("Available devices: %d\n", len(devices.Devices))
}
```

### Element-Specific Screenshots
```go
func elementScreenshots() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    // Capture specific element
    elementOptions := &capture.ScreenshotOptions{
        Selector:    ".hero-section",
        Transparent: true,
        Format:      "png",
    }
    elementScreenshot, err := client.Screenshot("https://example.com", elementOptions)
    if err != nil {
        fmt.Printf("Element screenshot error: %v\n", err)
        return
    }
    
    // Capture by ID
    idOptions := &capture.ScreenshotOptions{
        SelectorID: "main-content",
    }
    idScreenshot, err := client.Screenshot("https://example.com", idOptions)
    if err != nil {
        fmt.Printf("ID screenshot error: %v\n", err)
        return
    }
    
    fmt.Printf("Element screenshot: %d bytes\n", len(elementScreenshot))
    fmt.Printf("ID screenshot: %d bytes\n", len(idScreenshot))
}
```

## PDF Generation

### Basic PDF
```go
func basicPDF() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    pdfData, err := client.PDF("https://example.com", nil)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    // Save to file
    err = os.WriteFile("document.pdf", pdfData, 0644)
    if err != nil {
        fmt.Printf("Error saving PDF: %v\n", err)
    }
}
```

### PDF with Custom Options
```go
func customPDF() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    options := &capture.PDFOptions{
        // Paper settings
        Format:    "A4",
        Landscape: false,
        
        // Margins (all required together)
        MarginTop:    "1in",
        MarginRight:  "1in",
        MarginBottom: "1in",
        MarginLeft:   "1in",
        
        // Rendering
        Scale:           0.8,
        PrintBackground: true,
        
        // Timing
        Delay: 2,
        
        // Storage
        FileName: "report-2024",
        S3ACL:    "private",
    }
    
    pdf, err := client.PDF("https://example.com", options)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("PDF generated: %d bytes\n", len(pdf))
}
```

### Custom Paper Size
```go
func customPaperPDF() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    options := &capture.PDFOptions{
        Width:           "8.5in",
        Height:          "11in",
        MarginTop:       "0.5in",
        MarginRight:     "0.5in",
        MarginBottom:    "0.5in",
        MarginLeft:      "0.5in",
        PrintBackground: true,
    }
    
    pdf, err := client.PDF("https://example.com", options)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    err = os.WriteFile("custom-size.pdf", pdf, 0644)
    if err != nil {
        fmt.Printf("Error saving: %v\n", err)
    }
}
```

## Content Extraction

### HTML Content
```go
func extractContent() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    content, err := client.Content("https://example.com", nil)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Success: %t\n", content.Success)
    fmt.Printf("HTML length: %d\n", len(content.HTML))
    fmt.Printf("Text content: %s\n", content.TextContent)
}
```

### Content with Options
```go
func contentWithOptions() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    options := &capture.ContentOptions{
        Delay:     3,
        WaitFor:   ".article-content",
        UserAgent: "CustomBot/1.0",
    }
    
    content, err := client.Content("https://example.com", options)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    // Process the content
    cleanText := strings.TrimSpace(
        strings.ReplaceAll(content.TextContent, "\n", " "),
    )
    
    fmt.Printf("Clean text: %s\n", cleanText)
}
```

## Metadata Extraction

### Basic Metadata
```go
func extractMetadata() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    metadata, err := client.Metadata("https://example.com")
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    fmt.Printf("Title: %s\n", metadata.Metadata.Title)
    fmt.Printf("Description: %s\n", metadata.Metadata.Description)
    fmt.Printf("Image: %s\n", metadata.Metadata.Image)
    fmt.Printf("Author: %s\n", metadata.Metadata.Author)
    fmt.Printf("Language: %s\n", metadata.Metadata.Lang)
}
```

### Social Media Tags
```go
func socialMetadata() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    metadata, err := client.Metadata("https://blog.example.com/post")
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }
    
    // Open Graph data
    fmt.Printf("OG Title: %s\n", metadata.Metadata.Title)
    fmt.Printf("OG Description: %s\n", metadata.Metadata.Description)
    fmt.Printf("OG Image: %s\n", metadata.Metadata.Image)
    
    // Publisher info
    fmt.Printf("Publisher: %s\n", metadata.Metadata.Publisher)
    fmt.Printf("URL: %s\n", metadata.Metadata.URL)
}
```

## Animated Screenshots

### Basic Animation
```go
func basicAnimation() {
    client := capture.NewClient("your-api-key", "your-api-secret")

    options := &capture.AnimatedOptions{
        Format:   "mp4",
        Duration: 10,
    }

    animation, err := client.Animated("https://example.com", options)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }

    // Save animation
    err = os.WriteFile("animation.mp4", animation, 0644)
    if err != nil {
        fmt.Printf("Error saving animation: %v\n", err)
    }
}
```

### GIF Animation
```go
func gifAnimation() {
    client := capture.NewClient("your-api-key", "your-api-secret")

    options := &capture.AnimatedOptions{
        Format:          "gif",
        Duration:        15,
        HideScrollbars:  true,
    }

    animation, err := client.Animated("https://example.com", options)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }

    err = os.WriteFile("animation.gif", animation, 0644)
    if err != nil {
        fmt.Printf("Error saving: %v\n", err)
    }
}
```

### Mobile Animation
```go
func mobileAnimation() {
    client := capture.NewClient("your-api-key", "your-api-secret")

    options := &capture.AnimatedOptions{
        EmulateDevice: "iphone_15_pro",
        Format:        "mp4",
        Duration:      12,
        DarkMode:      true,
    }

    animation, err := client.Animated("https://example.com", options)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        return
    }

    fmt.Printf("Mobile animation captured: %d bytes\n", len(animation))
}
```

## Batch Operations

### Parallel Screenshots
```go
func parallelScreenshots() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    urls := []string{
        "https://example.com",
        "https://example.com/about",
        "https://example.com/contact",
    }
    
    var wg sync.WaitGroup
    results := make(chan Result, len(urls))
    
    type Result struct {
        URL  string
        Data []byte
        Err  error
    }
    
    for _, url := range urls {
        wg.Add(1)
        go func(u string) {
            defer wg.Done()
            
            options := &capture.ScreenshotOptions{
                ViewportWidth:  1200,
                ViewportHeight: 800,
                FileName:       fmt.Sprintf("screenshot-%s", strings.ReplaceAll(u, "/", "-")),
                S3ACL:          "public-read",
            }
            
            data, err := client.Screenshot(u, options)
            results <- Result{URL: u, Data: data, Err: err}
        }(url)
    }
    
    wg.Wait()
    close(results)
    
    for result := range results {
        if result.Err != nil {
            fmt.Printf("Error capturing %s: %v\n", result.URL, result.Err)
        } else {
            fmt.Printf("Captured %s: %d bytes\n", result.URL, len(result.Data))
        }
    }
}
```

### Sequential Processing with Rate Limiting
```go
func sequentialProcessing() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    urls := []string{
        "https://example.com",
        "https://example.com/about",
        "https://example.com/contact",
    }
    
    results := make([][]byte, 0, len(urls))
    
    for i, url := range urls {
        screenshot, err := client.Screenshot(url, nil)
        if err != nil {
            fmt.Printf("Error capturing %s: %v\n", url, err)
            continue
        }
        
        results = append(results, screenshot)
        
        // Rate limiting - avoid overwhelming the server
        if i < len(urls)-1 {
            time.Sleep(1 * time.Second)
        }
    }
    
    fmt.Printf("Captured %d screenshots\n", len(results))
}
```

## Error Handling

### Basic Error Handling
```go
func handleErrors() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    screenshot, err := client.Screenshot("https://example.com", nil)
    if err != nil {
        // Check if it's a Capture API error
        if captureErr, ok := err.(*capture.Error); ok {
            fmt.Printf("Capture API Error:\n")
            fmt.Printf("  Status: %d\n", captureErr.StatusCode)
            fmt.Printf("  Message: %s\n", captureErr.Message)
            fmt.Printf("  Details: %s\n", captureErr.Details)
            return
        }
        
        // Generic error
        fmt.Printf("Generic error: %v\n", err)
        return
    }
    
    fmt.Printf("Screenshot captured successfully: %d bytes\n", len(screenshot))
}
```

### Retry Logic
```go
func captureWithRetry(client *capture.Client, url string, options *capture.ScreenshotOptions, maxRetries int) ([]byte, error) {
    var lastErr error
    
    for attempt := 1; attempt <= maxRetries; attempt++ {
        screenshot, err := client.Screenshot(url, options)
        if err == nil {
            return screenshot, nil
        }
        
        lastErr = err
        
        // Check if it's worth retrying
        if captureErr, ok := err.(*capture.Error); ok {
            // Don't retry client errors (4xx)
            if captureErr.StatusCode >= 400 && captureErr.StatusCode < 500 {
                break
            }
        }
        
        if attempt < maxRetries {
            waitTime := time.Duration(attempt) * time.Second
            fmt.Printf("Attempt %d failed, retrying in %v...\n", attempt, waitTime)
            time.Sleep(waitTime)
        }
    }
    
    return nil, fmt.Errorf("failed after %d attempts: %w", maxRetries, lastErr)
}
```

### Comprehensive Error Types
```go
func handleSpecificErrors() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    _, err := client.Screenshot("https://invalid-url", nil)
    if err != nil {
        if captureErr, ok := err.(*capture.Error); ok {
            switch captureErr.StatusCode {
            case 400:
                fmt.Println("Invalid request parameters")
            case 401:
                fmt.Println("Authentication failed - check API credentials")
            case 403:
                fmt.Println("Insufficient credits or forbidden")
            case 429:
                fmt.Println("Rate limit exceeded - slow down requests")
            case 500:
                fmt.Println("Server error - try again later")
            default:
                fmt.Printf("Unknown API error: %d - %s\n", captureErr.StatusCode, captureErr.Message)
            }
        } else {
            fmt.Printf("Network or other error: %v\n", err)
        }
    }
}
```

## Integration Examples

### HTTP Server
```go
package main

import (
    "fmt"
    "log"
    "net/http"
    "strconv"
    
    "github.com/techulus/capture-go"
)

func main() {
    client := capture.NewClient(
        os.Getenv("CAPTURE_API_KEY"),
        os.Getenv("CAPTURE_API_SECRET"),
    )
    
    http.HandleFunc("/screenshot", func(w http.ResponseWriter, r *http.Request) {
        url := r.URL.Query().Get("url")
        if url == "" {
            http.Error(w, "Missing url parameter", http.StatusBadRequest)
            return
        }
        
        widthStr := r.URL.Query().Get("width")
        heightStr := r.URL.Query().Get("height")
        
        options := &capture.ScreenshotOptions{}
        if widthStr != "" {
            if width, err := strconv.Atoi(widthStr); err == nil {
                options.ViewportWidth = width
            }
        }
        if heightStr != "" {
            if height, err := strconv.Atoi(heightStr); err == nil {
                options.ViewportHeight = height
            }
        }
        
        screenshot, err := client.Screenshot(url, options)
        if err != nil {
            http.Error(w, err.Error(), http.StatusInternalServerError)
            return
        }
        
        w.Header().Set("Content-Type", "image/png")
        w.Write(screenshot)
    })
    
    log.Println("Server starting on :8080")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

### CLI Tool
```go
package main

import (
    "flag"
    "fmt"
    "os"
    
    "github.com/techulus/capture-go"
)

func main() {
    var (
        apiKey     = flag.String("key", os.Getenv("CAPTURE_API_KEY"), "API key")
        apiSecret  = flag.String("secret", os.Getenv("CAPTURE_API_SECRET"), "API secret")
        url        = flag.String("url", "", "URL to capture")
        output     = flag.String("output", "screenshot.png", "Output filename")
        width      = flag.Int("width", 1200, "Viewport width")
        height     = flag.Int("height", 800, "Viewport height")
        format     = flag.String("format", "png", "Output format")
        device     = flag.String("device", "", "Device to emulate")
    )
    flag.Parse()
    
    if *url == "" {
        fmt.Println("URL is required")
        flag.Usage()
        os.Exit(1)
    }
    
    client := capture.NewClient(*apiKey, *apiSecret)
    
    options := &capture.ScreenshotOptions{
        ViewportWidth:  *width,
        ViewportHeight: *height,
        Format:         *format,
    }
    
    if *device != "" {
        options.EmulateDevice = *device
    }
    
    fmt.Printf("Capturing %s...\n", *url)
    screenshot, err := client.Screenshot(*url, options)
    if err != nil {
        fmt.Printf("Error: %v\n", err)
        os.Exit(1)
    }
    
    err = os.WriteFile(*output, screenshot, 0644)
    if err != nil {
        fmt.Printf("Error saving file: %v\n", err)
        os.Exit(1)
    }
    
    fmt.Printf("Screenshot saved to %s (%d bytes)\n", *output, len(screenshot))
}
```

### Worker Pool
```go
package main

import (
    "fmt"
    "sync"
    "time"
    
    "github.com/techulus/capture-go"
)

type Job struct {
    URL     string
    Options *capture.ScreenshotOptions
}

type Result struct {
    Job  Job
    Data []byte
    Err  error
}

type WorkerPool struct {
    client    *capture.Client
    jobs      chan Job
    results   chan Result
    workers   int
    wg        sync.WaitGroup
}

func NewWorkerPool(client *capture.Client, workers int) *WorkerPool {
    return &WorkerPool{
        client:  client,
        jobs:    make(chan Job, workers*2),
        results: make(chan Result, workers*2),
        workers: workers,
    }
}

func (p *WorkerPool) Start() {
    for i := 0; i < p.workers; i++ {
        p.wg.Add(1)
        go p.worker()
    }
}

func (p *WorkerPool) worker() {
    defer p.wg.Done()
    
    for job := range p.jobs {
        // Rate limiting per worker
        time.Sleep(200 * time.Millisecond)
        
        data, err := p.client.Screenshot(job.URL, job.Options)
        p.results <- Result{
            Job:  job,
            Data: data,
            Err:  err,
        }
    }
}

func (p *WorkerPool) AddJob(url string, options *capture.ScreenshotOptions) {
    p.jobs <- Job{URL: url, Options: options}
}

func (p *WorkerPool) Stop() {
    close(p.jobs)
    p.wg.Wait()
    close(p.results)
}

func (p *WorkerPool) Results() <-chan Result {
    return p.results
}

func main() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    pool := NewWorkerPool(client, 5) // 5 workers
    
    pool.Start()
    
    // Add jobs
    urls := []string{
        "https://example.com",
        "https://example.com/about", 
        "https://example.com/contact",
    }
    
    for _, url := range urls {
        pool.AddJob(url, &capture.ScreenshotOptions{
            ViewportWidth:  1200,
            ViewportHeight: 800,
        })
    }
    
    // Collect results
    go func() {
        for result := range pool.Results() {
            if result.Err != nil {
                fmt.Printf("Error capturing %s: %v\n", result.Job.URL, result.Err)
            } else {
                fmt.Printf("Captured %s: %d bytes\n", result.Job.URL, len(result.Data))
            }
        }
    }()
    
    pool.Stop()
}
```

## Performance Optimization

### Connection Reuse
```go
// Create client once and reuse
var client = capture.NewClientWithConfig(&capture.Config{
    APIKey:       os.Getenv("CAPTURE_API_KEY"),
    Secret:       os.Getenv("CAPTURE_API_SECRET"),
    Timeout:      30 * time.Second,
    MaxIdleConns: 10,  // Connection pool
    KeepAlive:    true,
})

func reuseConnection() {
    // Reuse the same client for multiple requests
    screenshot1, _ := client.Screenshot("https://example.com", nil)
    screenshot2, _ := client.Screenshot("https://example.org", nil)
    
    fmt.Printf("Screenshot 1: %d bytes\n", len(screenshot1))
    fmt.Printf("Screenshot 2: %d bytes\n", len(screenshot2))
}
```

### Memory Optimization
```go
func memoryOptimized() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    // Process large batches in chunks
    urls := []string{/* ... many URLs ... */}
    chunkSize := 10
    
    for i := 0; i < len(urls); i += chunkSize {
        end := i + chunkSize
        if end > len(urls) {
            end = len(urls)
        }
        
        chunk := urls[i:end]
        processChunk(client, chunk)
        
        // Force garbage collection between chunks
        runtime.GC()
    }
}

func processChunk(client *capture.Client, urls []string) {
    for _, url := range urls {
        screenshot, err := client.Screenshot(url, nil)
        if err != nil {
            continue
        }
        
        // Process immediately and don't store
        processScreenshot(screenshot)
        
        // screenshot goes out of scope and can be GC'd
    }
}
```

## Best Practices

### 1. Configuration Management
```go
type Config struct {
    CaptureAPIKey    string `env:"CAPTURE_API_KEY"`
    CaptureAPISecret string `env:"CAPTURE_API_SECRET"`
    CaptureTimeout   int    `env:"CAPTURE_TIMEOUT" envDefault:"30"`
}

func loadConfig() *Config {
    cfg := &Config{}
    // Use a library like env to load from environment
    return cfg
}

func main() {
    cfg := loadConfig()
    
    client := capture.NewClientWithConfig(&capture.Config{
        APIKey:  cfg.CaptureAPIKey,
        Secret:  cfg.CaptureAPISecret,
        Timeout: time.Duration(cfg.CaptureTimeout) * time.Second,
    })
}
```

### 2. Structured Logging
```go
import "log/slog"

func captureWithLogging(client *capture.Client, url string) ([]byte, error) {
    logger := slog.Default()
    
    logger.Info("Starting capture", "url", url)
    start := time.Now()
    
    screenshot, err := client.Screenshot(url, nil)
    duration := time.Since(start)
    
    if err != nil {
        logger.Error("Capture failed", 
            "url", url, 
            "error", err,
            "duration", duration,
        )
        return nil, err
    }
    
    logger.Info("Capture successful", 
        "url", url,
        "size", len(screenshot),
        "duration", duration,
    )
    
    return screenshot, nil
}
```

### 3. Circuit Breaker Pattern
```go
type CircuitBreaker struct {
    client       *capture.Client
    failures     int
    lastAttempt  time.Time
    threshold    int
    timeout      time.Duration
    mutex        sync.Mutex
}

func NewCircuitBreaker(client *capture.Client) *CircuitBreaker {
    return &CircuitBreaker{
        client:    client,
        threshold: 5,
        timeout:   30 * time.Second,
    }
}

func (cb *CircuitBreaker) Screenshot(url string, options *capture.ScreenshotOptions) ([]byte, error) {
    cb.mutex.Lock()
    defer cb.mutex.Unlock()
    
    // Check if circuit is open
    if cb.failures >= cb.threshold {
        if time.Since(cb.lastAttempt) < cb.timeout {
            return nil, fmt.Errorf("circuit breaker open")
        }
        // Reset after timeout
        cb.failures = 0
    }
    
    cb.lastAttempt = time.Now()
    
    screenshot, err := cb.client.Screenshot(url, options)
    if err != nil {
        cb.failures++
        return nil, err
    }
    
    // Reset on success
    cb.failures = 0
    return screenshot, nil
}
```

## Troubleshooting

### Common Issues

#### Import Path Errors
```go
// Correct import
import "github.com/techulus/capture-go"

// Make sure you've run: go mod tidy
```

#### Authentication Failures
```go
func testAuth() {
    client := capture.NewClient("your-api-key", "your-api-secret")
    
    // Test with a simple request
    _, err := client.Screenshot("https://example.com", nil)
    if err != nil {
        if captureErr, ok := err.(*capture.Error); ok && captureErr.StatusCode == 401 {
            fmt.Println("Authentication failed - check your API credentials")
        }
    } else {
        fmt.Println("Authentication successful")
    }
}
```

#### Timeout Issues
```go
// Increase timeout for slow pages
client := capture.NewClientWithConfig(&capture.Config{
    APIKey:  "your-api-key",
    Secret:  "your-api-secret",
    Timeout: 120 * time.Second, // 2 minutes
})
```

## See Also

- [SDK Overview](sdk-overview.md) - Compare all available SDKs
- [Node.js SDK](sdk-nodejs.md) - JavaScript/TypeScript implementation
- [Rust SDK](sdk-rust.md) - Rust implementation  
- [GitHub Repository](https://github.com/techulus/capture-go) - Source code and issues