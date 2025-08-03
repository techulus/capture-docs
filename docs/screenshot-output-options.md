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
- **Considerations**: Each format has different strengths

### Best Format (`bestFormat`)
- **Default**: `false`
- **Description**: Automatically selects optimal format based on browser support
- **Example**: `bestFormat=true`
- **Result**: WebP for modern browsers, PNG for older ones

## Format Specifications

### PNG Format
```
&type=png
```
**Characteristics:**
- Lossless compression
- Supports transparency
- Larger file sizes
- Best for: Screenshots with text, logos, UI elements

**When to Use:**
- Need transparent backgrounds
- Capturing UI with sharp edges
- Quality is paramount
- File size is not a concern

### JPEG Format
```
&type=jpeg
```
**Characteristics:**
- Lossy compression
- No transparency support
- Smaller file sizes
- Best for: Photographs, complex images

**When to Use:**
- Capturing photo-heavy content
- File size is important
- Transparency not needed
- Slight quality loss acceptable

### WebP Format
```
&type=webp
```
**Characteristics:**
- Modern format with excellent compression
- Supports transparency
- 25-35% smaller than PNG/JPEG
- Best for: Web optimization

**When to Use:**
- Modern web applications
- Bandwidth optimization
- Need transparency with small size
- Browser compatibility assured

## Image Resizing

### Resize Dimensions
Both width and height must be specified:

#### Resize Width (`resizeWidth`)
- **Default**: None (original size)
- **Description**: Target width in pixels
- **Example**: `resizeWidth=800`
- **Required**: Must be used with resizeHeight

#### Resize Height (`resizeHeight`)
- **Default**: None (original size)
- **Description**: Target height in pixels
- **Example**: `resizeHeight=600`
- **Required**: Must be used with resizeWidth

### Resize Examples
```
// Resize to specific dimensions
&resizeWidth=1200&resizeHeight=630

// Thumbnail size
&resizeWidth=300&resizeHeight=200

// Social media size
&resizeWidth=1200&resizeHeight=628
```

## Special Effects

### Transparent Background (`transparent`)
- **Default**: `false`
- **Description**: Captures with transparent background (PNG/WebP only)
- **Example**: `transparent=true`
- **Note**: Only works where page background is transparent

## Usage Examples

### High-Quality PNG Screenshot
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&type=png
```

### Optimized JPEG Screenshot
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

#### Open Graph (Facebook, LinkedIn)
```
&resizeWidth=1200&resizeHeight=630&type=jpeg
```

#### Twitter Cards
```
&resizeWidth=1200&resizeHeight=628&type=jpeg
```

#### Instagram Post
```
&resizeWidth=1080&resizeHeight=1080&type=jpeg
```

### Thumbnails

#### Gallery Thumbnail
```
&resizeWidth=300&resizeHeight=200&type=jpeg
```

#### Product Thumbnail
```
&resizeWidth=400&resizeHeight=400&type=webp
```

#### Article Preview
```
&resizeWidth=600&resizeHeight=400&bestFormat=true
```

### Documentation

#### UI Screenshots
```
&type=png  // Sharp text and UI elements
```

#### Annotated Screenshots
```
&type=png&transparent=true  // For overlaying on backgrounds
```

#### Mobile App Stores
```
// iPhone App Store
&resizeWidth=1290&resizeHeight=2796&type=png

// Google Play Store
&resizeWidth=1080&resizeHeight=1920&type=png
```

## Quality Optimization

### File Size Comparison
Typical file sizes for a 1920×1080 screenshot:
- **PNG**: 1.5-3 MB
- **JPEG**: 200-500 KB
- **WebP**: 150-400 KB

### Format Selection Guide

#### Choose PNG When:
- Text clarity is critical
- UI elements with sharp edges
- Transparency is required
- Archival quality needed

#### Choose JPEG When:
- Photo-realistic content
- File size constraints
- Email attachments
- Quick loading needed

#### Choose WebP When:
- Modern web apps
- Best compression needed
- Transparency with small size
- Progressive enhancement

### Best Format Strategy
```
// Let Capture choose optimal format
&bestFormat=true

// Fallback chain in your code
const formats = ['webp', 'jpeg', 'png'];
```

## Resizing Best Practices

### 1. Maintain Aspect Ratio
Calculate proportional dimensions:
```javascript
// Original: 1920×1080 (16:9)
// Target width: 800

const aspectRatio = 1920 / 1080;
const targetWidth = 800;
const targetHeight = Math.round(targetWidth / aspectRatio); // 450

// Result: &resizeWidth=800&resizeHeight=450
```

### 2. Common Aspect Ratios
```
// 16:9 (Widescreen)
&resizeWidth=1920&resizeHeight=1080
&resizeWidth=1280&resizeHeight=720
&resizeWidth=640&resizeHeight=360

// 4:3 (Standard)
&resizeWidth=1024&resizeHeight=768
&resizeWidth=800&resizeHeight=600

// 1:1 (Square)
&resizeWidth=1000&resizeHeight=1000
&resizeWidth=500&resizeHeight=500

// 9:16 (Vertical/Stories)
&resizeWidth=1080&resizeHeight=1920
&resizeWidth=540&resizeHeight=960
```

### 3. Resize vs Viewport
Understand the difference:
```
// Viewport: Renders at 1920×1080
&vw=1920&vh=1080

// Resize: Captures at original, then scales
&resizeWidth=800&resizeHeight=450

// Combined: Render large, output small
&vw=1920&vh=1080&resizeWidth=800&resizeHeight=450
```

## Transparency Guidelines

### Requirements for Transparency
1. Use PNG or WebP format
2. Page must have transparent areas
3. Enable transparent option

### Common Scenarios
```
// Logo on transparent background
&selector=.logo&transparent=true&type=png

// UI component for documentation
&selector=.button&transparent=true&type=png

// Icon extraction
&selectorId=icon-svg&transparent=true&type=webp
```

### Transparency Limitations
- Won't remove white backgrounds
- Page must define transparency
- May not work with all elements
- Check browser compatibility

## Performance Tips

### 1. Format Performance
Processing speed by format:
- PNG: Fastest (minimal processing)
- JPEG: Fast (compression overhead)
- WebP: Moderate (advanced compression)

### 2. Resize Performance
- Small resizes: Minimal impact
- Large to small: More processing
- Upscaling: Not recommended

### 3. Optimization Strategy
```
// Fast processing
&type=jpeg

// Balanced quality/size
&type=webp&bestFormat=true

// Maximum quality
&type=png
```

## Advanced Techniques

### Dynamic Format Selection
```javascript
// Client-side detection
const supportsWebP = checkWebPSupport();
const format = supportsWebP ? 'webp' : 'jpeg';

// Server-side detection
const accepts = request.headers['accept'];
const format = accepts.includes('webp') ? 'webp' : 'png';
```

### Responsive Images
```html
<!-- Multiple formats -->
<picture>
  <source srcset="capture.page/...&type=webp" type="image/webp">
  <source srcset="capture.page/...&type=jpeg" type="image/jpeg">
  <img src="capture.page/...&type=png" alt="Screenshot">
</picture>
```

### Batch Processing
```javascript
// Generate multiple sizes
const sizes = [
  { w: 300, h: 200, name: 'thumb' },
  { w: 800, h: 600, name: 'medium' },
  { w: 1920, h: 1080, name: 'full' }
];

sizes.forEach(size => {
  const url = `...&resizeWidth=${size.w}&resizeHeight=${size.h}`;
});
```

## Common Issues

### Black Background Instead of Transparent
- Ensure `type=png` or `type=webp`
- Verify page has transparent areas
- Check CSS background settings

### Blurry Resized Images
- Use higher source resolution
- Avoid upscaling
- Consider viewport sizing instead

### Format Not Supported
- Check browser compatibility
- Use bestFormat for auto-selection
- Implement fallback options

## See Also

- [Viewport Configuration](screenshot-viewport.md) - Set capture dimensions
- [Storage & Caching](screenshot-storage.md) - Save optimized images
- [Capture Area](screenshot-capture-area.md) - Capture specific elements