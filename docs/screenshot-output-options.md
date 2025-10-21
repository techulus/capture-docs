---
id: screenshot-output-options
title: Image Output Options
---

Control the format, quality, and dimensions of your screenshot output.

## Image Format Options

### Image Type (`type`)
- **Default**: `png`
- **Options**: `png`, `jpeg`, `webp`
- **Example**: `type=jpeg`

### Best Format (`bestFormat`)
- **Default**: `false`
- **Description**: Automatically selects optimal format based on browser support
- **Example**: `bestFormat=true`

## Format Specifications

**PNG:** Lossless, supports transparency, larger files. Best for text/UI.

**JPEG:** Lossy, no transparency, smaller files (200-500 KB). Best for photos.

**WebP:** Modern format, 25-35% smaller, supports transparency. Best for web.

## Image Resizing

Both width and height must be specified together:
- `resizeWidth`: Target width in pixels
- `resizeHeight`: Target height in pixels

```
// Social media (Open Graph)
&resizeWidth=1200&resizeHeight=630

// Thumbnail
&resizeWidth=300&resizeHeight=200
```

## Transparent Background

### Transparent (`transparent`)
- **Default**: `false`
- **Format**: PNG or WebP only
- **Example**: `transparent=true`

## Usage Examples

```
// High-quality PNG
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&type=png

// Optimized JPEG
&type=jpeg

// WebP with resize
&type=webp&resizeWidth=1200&resizeHeight=630

// Transparent logo
&selector=.logo&transparent=true&type=png
```

## Best Practices

**Format Selection:**
- PNG: Text clarity, UI elements, transparency required
- JPEG: Photos, file size constraints
- WebP: Modern web apps, best compression

**Maintain Aspect Ratio:**
```javascript
const aspectRatio = 1920 / 1080;
const targetHeight = Math.round(targetWidth / aspectRatio);
```

**Viewport vs Resize:**
- Viewport: Renders at specific size
- Resize: Captures then scales
- Combined: Render large, output small (best quality)

## Troubleshooting

**Black Background:** Ensure `type=png` or `type=webp`, page must have CSS transparency

**Blurry Images:** Use higher source resolution, avoid upscaling

**Format Not Supported:** Use `bestFormat=true` for auto-selection

## See Also

- [Viewport Configuration](screenshot-viewport.md)
- [Storage & Caching](screenshot-storage.md)
- [Capture Area](screenshot-capture-area.md)
