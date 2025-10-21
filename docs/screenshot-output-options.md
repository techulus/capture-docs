---
id: screenshot-output-options
title: Image Output Options
---

Control the format, quality, and dimensions of your screenshot output. These options help optimize file size, ensure compatibility, and match specific requirements for your use case.

## Image Format Options

### Image Type (`type`)
- **Default**: `png`
- **Options**: `png`, `jpeg`, `webp`
- **Example**: `type=jpeg`

### Best Format (`bestFormat`)
- **Default**: `false`
- **Description**: Automatically selects optimal format based on browser support
- **Example**: `bestFormat=true`
- **Result**: WebP for modern browsers, PNG for older ones

## Format Specifications

### PNG Format
- Lossless compression
- Supports transparency
- Larger file sizes
- **Best for**: Screenshots with text, logos, UI elements

### JPEG Format
- Lossy compression
- No transparency support
- Smaller file sizes (200-500 KB for 1920×1080)
- **Best for**: Photographs, complex images

### WebP Format
- Modern format with excellent compression
- Supports transparency
- 25-35% smaller than PNG/JPEG
- **Best for**: Web optimization, modern applications

## Image Resizing

### Resize Width & Height
Both width and height must be specified together:

- `resizeWidth`: Target width in pixels
- `resizeHeight`: Target height in pixels

### Resize Examples
```
// Social media size (Open Graph)
&resizeWidth=1200&resizeHeight=630

// Thumbnail
&resizeWidth=300&resizeHeight=200

// Instagram square
&resizeWidth=1080&resizeHeight=1080
```

## Transparent Background

### Transparent (`transparent`)
- **Default**: `false`
- **Description**: Captures with transparent background
- **Format**: PNG or WebP only
- **Example**: `transparent=true`

## Usage Examples

### High-Quality PNG
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&type=png
```

### Optimized JPEG
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&type=jpeg
```

### Modern WebP with Resize
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&type=webp&resizeWidth=1200&resizeHeight=630
```

### Transparent Logo Capture
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&selector=.logo&transparent=true&type=png
```

## Common Use Cases

### Social Media Images
```
// Open Graph (Facebook, LinkedIn)
&resizeWidth=1200&resizeHeight=630&type=jpeg

// Twitter Cards
&resizeWidth=1200&resizeHeight=628&type=jpeg

// Instagram Post
&resizeWidth=1080&resizeHeight=1080&type=jpeg
```

### Thumbnails
```
// Gallery thumbnail
&resizeWidth=300&resizeHeight=200&type=jpeg

// Product thumbnail
&resizeWidth=400&resizeHeight=400&type=webp
```

### Documentation
```
// UI screenshots with sharp text
&type=png

// Transparent screenshots for overlays
&type=png&transparent=true
```

## Format Selection Guide

**Choose PNG when:**
- Text clarity is critical
- UI elements with sharp edges
- Transparency is required

**Choose JPEG when:**
- Photo-realistic content
- File size constraints
- Quick loading needed

**Choose WebP when:**
- Modern web apps
- Best compression needed
- Transparency with small size

## Best Practices

### 1. Maintain Aspect Ratio
Calculate proportional dimensions to avoid distortion:
```javascript
const aspectRatio = 1920 / 1080;
const targetWidth = 800;
const targetHeight = Math.round(targetWidth / aspectRatio); // 450
```

### 2. Common Aspect Ratios
```
// 16:9 (Widescreen)
&resizeWidth=1920&resizeHeight=1080

// 4:3 (Standard)
&resizeWidth=1024&resizeHeight=768

// 1:1 (Square)
&resizeWidth=1000&resizeHeight=1000
```

### 3. Viewport vs Resize
```
// Viewport: Renders at 1920×1080
&vw=1920&vh=1080

// Resize: Captures at original size, then scales down
&resizeWidth=800&resizeHeight=450

// Combined: Render large, output small (best quality)
&vw=1920&vh=1080&resizeWidth=800&resizeHeight=450
```

## Troubleshooting

### Black Background Instead of Transparent
- Ensure `type=png` or `type=webp`
- Verify page has transparent areas in CSS
- Page background must be defined as transparent

### Blurry Resized Images
- Use higher source resolution
- Avoid upscaling (don't resize larger than original)
- Consider using larger viewport instead

### Format Not Supported
- Check browser compatibility for WebP
- Use `bestFormat=true` for auto-selection
- Provide fallback formats

## See Also

- [Viewport Configuration](screenshot-viewport.md) - Set capture dimensions
- [Storage & Caching](screenshot-storage.md) - Save optimized images
- [Capture Area](screenshot-capture-area.md) - Capture specific elements
