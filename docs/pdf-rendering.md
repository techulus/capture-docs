---
id: pdf-rendering
title: PDF Rendering Options
---

Control how web content is rendered into PDF format, including scaling, background graphics, and print-specific optimizations.

## Rendering Parameters

### Scale (`scale`)
- **Default**: `1`
- **Description**: Scale factor for webpage rendering
- **Range**: 0.1 to 2
- **Example**: `scale=0.8` (80% of original size)

### Print Background (`printBackground`)
- **Default**: `false`
- **Description**: Include background colors and images
- **Example**: `printBackground=true`
- **Effect**: Preserves CSS backgrounds in PDF

## Usage Examples

### Basic Rendering
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&scale=1
```

### With Background Graphics
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&printBackground=true
```

### Scaled Down for Smaller Files
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&scale=0.75
```

## Scale Factor Guide

| Scale | Use Case | Effect |
|-------|----------|--------|
| 0.5 | Quick preview | 50% size, smaller file |
| 0.75 | Reduced file size | 75% size, good balance |
| 1.0 | Original size | Default, full quality |
| 1.25 | Enlarged text | 125% size, easier reading |
| 1.5 | Large print | 150% size, accessibility |

**What Scale Affects:**
- Text size and clarity
- Image resolution
- Overall file size
- Page breaks and layout

## Print Background Options

### When to Enable
Enable `printBackground=true` for:
- Marketing materials and presentations
- Designed layouts with branding
- Visual reports and infographics
- Screenshots of styled web pages

### When to Disable
Keep `printBackground=false` for:
- Text documents and legal papers
- High-volume printing (saves ink)
- Accessibility needs
- File size optimization

## Common Use Cases

### Business Documents
```
// Clean report without backgrounds
&scale=1&printBackground=false

// Marketing presentation with full graphics
&scale=1&printBackground=true
```

### Web Page Archives
```
// Clean reading version
&scale=1&printBackground=false

// Preserve original design
&scale=1&printBackground=true
```

### Technical Documentation
```
// Code blocks with syntax highlighting
&scale=1&printBackground=true

// Printer-friendly version
&scale=0.95&printBackground=false
```

## File Size Impact

| Settings | Relative File Size | Quality |
|----------|-------------------|---------|
| scale=0.5, printBackground=false | 25% | Low |
| scale=0.75, printBackground=false | 50% | Medium |
| scale=1, printBackground=false | 75% | High |
| scale=1, printBackground=true | 100% | Maximum |

## Quality Considerations

### Text Rendering
```
// Optimal screen viewing
&scale=1&printBackground=true

// High quality print
&scale=1&printBackground=false

// Draft quality
&scale=0.7&printBackground=false
```

### Images and Graphics
- Scale affects raster image resolution
- SVGs and CSS graphics scale well at any size
- Upscaling (scale > 1) doesn't improve image quality

## Print-Specific Behavior

Websites may have print-specific CSS that automatically applies during PDF generation:
```css
@media print {
  .no-print { display: none; }
  .page-break { page-break-after: always; }
  body { font-size: 12pt; }
}
```

## Best Practices

### 1. Match Output Intent
```
// Digital archive
&scale=1&printBackground=true

// Print handout
&scale=0.9&printBackground=false

// Email attachment
&scale=0.75&printBackground=false
```

### 2. Balance Quality and Size
- Use scale 0.75-0.9 for good quality with smaller files
- Enable backgrounds only when visual design is important
- Test different settings to find optimal balance

### 3. Consider Accessibility
```
// High contrast for readability
&printBackground=false

// Larger text for vision impaired
&scale=1.5
```

## Troubleshooting

### Missing Backgrounds
If backgrounds don't appear:
- Ensure `printBackground=true` is set
- Check if site has print CSS that forces white backgrounds

### Text Too Small/Large
```
// Text too small
&scale=1.25  // Increase scale

// Text too large
&scale=0.8   // Decrease scale
```

### Broken Layouts
```
// Try slight reduction
&scale=0.95

// Use larger paper size
&scale=1&format=A3
```

### Large File Sizes
```
// Reduce scale
&scale=0.7

// Disable backgrounds
&printBackground=false
```

## See Also

- [Paper Size & Format](pdf-paper-size.md) - Configure page dimensions
- [PDF Margins](pdf-margins.md) - Set page margins
- [PDF Storage](pdf-storage.md) - Save rendered PDFs
