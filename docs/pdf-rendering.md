---
id: pdf-rendering
title: PDF Rendering Options
---

Control how web content is rendered into PDF format, including scaling and background graphics.

## Rendering Parameters

### Scale (`scale`)
- **Default**: `1`
- **Range**: 0.1 to 2
- **Example**: `scale=0.8`

### Print Background (`printBackground`)
- **Default**: `false`
- **Description**: Include background colors and images
- **Example**: `printBackground=true`

## Usage Examples

```
// Basic rendering
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com

// With backgrounds
&printBackground=true

// Scaled for smaller file
&scale=0.75
```

## Scale Factor Guide

| Scale | Use Case |
|-------|----------|
| 0.75 | Reduced file size, good balance |
| 1.0 | Default, full quality |
| 1.25 | Enlarged text, easier reading |

Scale affects text size, image resolution, file size, and page layout.

## Print Background

**Enable for:**
- Marketing materials, presentations
- Designed layouts with branding
- Visual reports

**Disable for:**
- Text documents, legal papers
- High-volume printing (saves ink)
- File size optimization

## Best Practices

**Match Output Intent:**
- Digital archive: `scale=1&printBackground=true`
- Print handout: `scale=0.9&printBackground=false`
- Email attachment: `scale=0.75&printBackground=false`

**Balance Quality and Size:** Use scale 0.75-0.9 for good quality with smaller files.

**Note:** Websites may have print-specific CSS (`@media print`) that automatically applies during PDF generation.

## Troubleshooting

**Missing Backgrounds:** Ensure `printBackground=true`, check for print CSS overrides

**Text Too Small/Large:** Adjust scale (`scale=1.25` to enlarge, `scale=0.8` to reduce)

**Large File Sizes:** Reduce scale or disable backgrounds

## See Also

- [Paper Size & Format](pdf-paper-size.md)
- [PDF Margins](pdf-margins.md)
- [PDF Storage](pdf-storage.md)
