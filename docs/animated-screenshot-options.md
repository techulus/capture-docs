---
id: animated-screenshot-options
title: Animated Screenshot Request
---

The animated screenshot endpoint allows you to capture animated screenshots of web pages in GIF, MP4, or WebM formats. This endpoint supports scrolling animations, custom durations, and various frame rates.

## URL Format

```
https://cdn.capture.page/{API_KEY}/{GENERATED_HASH}/animated?url={TARGET_URL}
```

- **API_KEY**: Your Capture API key
- **GENERATED_HASH**: MD5 hash of the target URL and your API secret
- **TARGET_URL**: The URL you want to capture (URL-encoded)

## Request Parameters

### Mandatory Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `url` | string | Target URL to capture (URL-encoded) |

### Animation Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `format` | string | `mp4` | Output format: `gif`, `mp4`, or `webm` |
| `duration` | number | `5` | Recording duration in seconds (1-30) |
| `fps` | number | `30` | Frames per second (5-60) |
| `scrolling` | boolean | `false` | Enable automatic scrolling during capture |
| `scrollSpeed` | number | `200` | Scrolling speed in pixels (50-1000) |
| `hideScrollbars` | boolean | `true` | Hide scrollbars during capture for cleaner output |

### Viewport Options

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `vw` | number | `1440` | Viewport width in pixels |
| `vh` | number | `900` | Viewport height in pixels |
| `scaleFactor` | number | `1` | Device scale factor |

### Capture Behavior

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `delay` | number | `0` | Seconds to wait before starting capture (0-25) |
| `waitFor` | string | - | Wait for CSS selector to appear |
| `waitForId` | string | - | Wait for element with specific ID to appear |
| `selector` | string | - | Capture specific element by CSS selector |
| `fullPage` | boolean | `false` | Capture full page height |

### Page Interaction

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `darkMode` | boolean | `false` | Enable dark mode |
| `blockCookieBanners` | boolean | `false` | Automatically dismiss cookie consent popups |
| `blockAds` | boolean | `false` | Block advertisements |
| `bypassBotDetection` | boolean | `false` | Solve captchas automatically |

### Authentication

| Parameter | Type | Description |
|-----------|------|-------------|
| `httpAuth` | string | HTTP Basic Authentication (base64url encoded as `username:password`) |
| `userAgent` | string | Custom user agent (base64url encoded) |

### File Storage

| Parameter | Type | Description |
|-----------|------|-------------|
| `fileName` | string | Custom filename for the output file |
| `s3Acl` | string | S3 Access Control List (e.g., `public-read`) |
| `s3Redirect` | boolean | Redirect to S3 URL instead of returning file data |

## Format Specifications

### GIF Format
- **Extension**: `.gif`
- **Content-Type**: `image/gif`
- **Max FPS**: 30 (technical limitation)
- **Best for**: Simple animations, broad compatibility

### MP4 Format
- **Extension**: `.mp4`
- **Content-Type**: `video/mp4`
- **Max FPS**: 60
- **Codec**: H.264 with yuv420p pixel format
- **Best for**: High quality video, web streaming

### WebM Format
- **Extension**: `.webm`
- **Content-Type**: `video/webm`
- **Max FPS**: 60
- **Codec**: VP9
- **Best for**: Web-optimized video, smaller file sizes

## Usage Examples

### Basic Animated Screenshot
```
https://cdn.capture.page/your-api-key/hash/animated?url=https://example.com&duration=10&format=mp4
```

### Scrolling GIF with Custom Settings
```
https://cdn.capture.page/your-api-key/hash/animated?url=https://example.com&format=gif&duration=15&scrolling=true&scrollSpeed=300&fps=24
```

### High-Quality WebM with Dark Mode
```
https://cdn.capture.page/your-api-key/hash/animated?url=https://example.com&format=webm&duration=20&fps=60&darkMode=true&hideScrollbars=true
```

### Element-Specific Animation
```
https://cdn.capture.page/your-api-key/hash/animated?url=https://example.com&selector=.main-content&duration=8&format=mp4&fps=30
```

## Technical Limitations

- **Maximum Duration**: 30 seconds
- **FPS Range**: 5-60 fps (GIF capped at 30fps)
- **Scrolling**: Automatic smooth scrolling with configurable speed
- **Browser**: Uses Chrome/Chromium with Puppeteer
- **Extensions**: Supports uBlock Origin for ad blocking

## Best Practices

1. **Choose Appropriate Format**:
   - Use GIF for simple animations and maximum compatibility
   - Use MP4 for high-quality video content
   - Use WebM for web-optimized, smaller file sizes

2. **Optimize Duration**:
   - Shorter durations reduce credit usage
   - 5-15 seconds often sufficient for most use cases

3. **Frame Rate Selection**:
   - 24-30 fps for most content
   - 60 fps only for smooth motion requirements

4. **Scrolling Settings**:
   - Enable scrolling for long pages
   - Adjust scroll speed based on content length
   - Consider hiding scrollbars for cleaner output

5. **Performance**:
   - Use `delay` parameter for dynamic content
   - Consider `waitFor` for specific elements
   - Enable ad blocking for faster loading
