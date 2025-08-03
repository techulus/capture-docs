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

### High Quality with Backgrounds
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&scale=1&printBackground=true
```

## Scale Factor Details

### Understanding Scale

The scale factor affects:
- Text size and clarity
- Image resolution
- Overall file size
- Page breaks and layout

### Common Scale Values

| Scale | Use Case | Effect |
|-------|----------|--------|
| 0.5 | Quick preview | 50% size, smaller file |
| 0.75 | Reduced file size | 75% size, good balance |
| 0.8 | Slight reduction | 80% size, minimal quality loss |
| 1.0 | Original size | Default, full quality |
| 1.25 | Enlarged text | 125% size, easier reading |
| 1.5 | Large print | 150% size, accessibility |
| 2.0 | Maximum zoom | 200% size, very large file |

### Scale Calculations

```javascript
// Calculate effective dimensions
const pageWidth = 8.5; // inches
const scale = 0.75;
const effectiveWidth = pageWidth * scale; // 6.375 inches

// Calculate DPI equivalent
const baseDPI = 96;
const effectiveDPI = baseDPI * scale; // 72 DPI at 0.75 scale
```

## Print Background Options

### When to Enable

Enable `printBackground=true` for:
- Marketing materials
- Designed layouts
- Brand presentations
- Visual reports
- Infographics

### When to Disable

Keep `printBackground=false` for:
- Text documents
- Legal papers
- High-volume printing
- Accessibility needs
- File size optimization

### Background Types Affected

```css
/* CSS backgrounds that require printBackground=true */

/* Background colors */
.header { background-color: #007bff; }

/* Background images */
.hero { background-image: url('pattern.png'); }

/* Gradients */
.banner { background: linear-gradient(to right, #667eea, #764ba2); }

/* Multiple backgrounds */
.decorated { 
  background: url('icon.png') no-repeat,
              linear-gradient(#f0f0f0, #ffffff);
}
```

## Common Use Cases

### Professional Documents

#### Clean Business Report
```
// No backgrounds, standard scale
&scale=1&printBackground=false

// Reduced for email
&scale=0.8&printBackground=false
```

#### Marketing Presentation
```
// Full graphics and backgrounds
&scale=1&printBackground=true

// Slightly reduced for file size
&scale=0.9&printBackground=true
```

### Web Page Archives

#### News Articles
```
// Clean reading version
&scale=1&printBackground=false

// Preserve original design
&scale=1&printBackground=true
```

#### Portfolio Sites
```
// Showcase with full design
&scale=1&printBackground=true

// Print-friendly version
&scale=0.9&printBackground=false
```

### Technical Documentation

#### API Documentation
```
// Code blocks with backgrounds
&scale=1&printBackground=true

// Printer-friendly
&scale=0.95&printBackground=false
```

#### User Manuals
```
// With UI screenshots
&scale=1&printBackground=true

// Text-only version
&scale=0.85&printBackground=false
```

## Performance Optimization

### File Size Impact

| Settings | Relative File Size | Quality |
|----------|-------------------|---------|
| scale=0.5, printBackground=false | 25% | Low |
| scale=0.75, printBackground=false | 50% | Medium |
| scale=1, printBackground=false | 75% | High |
| scale=1, printBackground=true | 100% | Maximum |
| scale=1.5, printBackground=true | 150% | Very High |

### Processing Time

Factors affecting rendering speed:
```javascript
// Fast rendering
{
  scale: 0.75,
  printBackground: false,
  format: 'A4'
}

// Slower rendering
{
  scale: 1.5,
  printBackground: true,
  format: 'A0'
}
```

### Memory Usage

```javascript
// Estimate memory usage
function estimateMemory(width, height, scale, hasBackground) {
  const baseMemory = width * height * 4; // 4 bytes per pixel
  const scaledMemory = baseMemory * (scale * scale);
  const backgroundMultiplier = hasBackground ? 1.5 : 1;
  
  return scaledMemory * backgroundMultiplier;
}
```

## Quality Considerations

### Text Rendering

#### For Screen Reading
```
// Optimal screen viewing
&scale=1&printBackground=true

// Reduced but readable
&scale=0.8&printBackground=true
```

#### For Printing
```
// High quality print
&scale=1&printBackground=false

// Draft quality
&scale=0.7&printBackground=false
```

### Image Quality

Scale affects image resolution:
```
// Original image: 300x200px

// At scale=1: 300x200px (full quality)
// At scale=0.5: 150x100px (reduced quality)
// At scale=2: 600x400px (upscaled, no quality gain)
```

### Vector Graphics

SVGs and CSS graphics scale well:
```
// SVGs remain crisp at any scale
&scale=2  // Still sharp

// Raster images may blur
&scale=2  // JPEGs/PNGs may pixelate
```

## Print-Specific Adjustments

### @media print Styles

Websites may have print-specific CSS:
```css
@media print {
  /* These styles apply during PDF generation */
  .no-print { display: none; }
  .page-break { page-break-after: always; }
  body { font-size: 12pt; }
}
```

### Forcing Screen Styles

If print styles remove important elements:
```javascript
// Consider these approaches:
// 1. Use screenshot endpoint instead
// 2. Inject CSS to override print styles
// 3. Contact support for custom solutions
```

## Advanced Techniques

### Dynamic Scaling

```javascript
// Scale based on content width
function calculateOptimalScale(contentWidth, pdfWidth) {
  const defaultWidth = 816; // pixels at 96 DPI
  if (contentWidth <= defaultWidth) {
    return 1;
  }
  return Math.min(1, defaultWidth / contentWidth);
}

// Scale based on file size requirements
function scaleForFileSize(maxSizeMB) {
  if (maxSizeMB < 1) return 0.5;
  if (maxSizeMB < 5) return 0.75;
  if (maxSizeMB < 10) return 0.9;
  return 1;
}
```

### Conditional Backgrounds

```javascript
// Enable backgrounds for specific content
function shouldPrintBackground(url) {
  const visualSites = ['portfolio', 'gallery', 'design'];
  return visualSites.some(keyword => url.includes(keyword));
}
```

### Multi-Scale Generation

```javascript
// Generate multiple versions
const versions = [
  { name: 'screen', scale: 1, bg: true },
  { name: 'print', scale: 0.9, bg: false },
  { name: 'mobile', scale: 0.75, bg: true }
];

versions.forEach(version => {
  const url = `...&scale=${version.scale}&printBackground=${version.bg}`;
  // Generate each version
});
```

## Troubleshooting

### Missing Backgrounds

If backgrounds don't appear:
```
// Ensure printBackground is enabled
&printBackground=true

// Check for !important CSS rules
// Some sites force white backgrounds for print
```

### Text Too Small/Large

Adjust scale appropriately:
```
// Text too small
&scale=1.25  // Increase scale

// Text too large
&scale=0.8   // Decrease scale

// Or adjust CSS before capture
```

### Broken Layouts

If scaling breaks layout:
```
// Try different scale values
&scale=0.95  // Slight reduction often helps

// Use original scale with larger paper
&scale=1&format=A3
```

### Performance Issues

For slow rendering:
```
// Reduce quality for drafts
&scale=0.7&printBackground=false

// Process in batches
// Use edge endpoint for long operations
```

## Best Practices

### 1. Test Different Settings
```javascript
const testConfigs = [
  { scale: 1, bg: true },    // Full quality
  { scale: 0.8, bg: true },  // Balanced
  { scale: 0.7, bg: false }  // Performance
];
```

### 2. Match Output Intent
```
// Digital archive
&scale=1&printBackground=true

// Print handout
&scale=0.9&printBackground=false

// Email attachment
&scale=0.75&printBackground=false
```

### 3. Consider Accessibility
```
// High contrast for readability
&printBackground=false

// Larger text for vision impaired
&scale=1.5
```

### 4. Optimize Workflow
```javascript
// Quick preview
const preview = { scale: 0.5, printBackground: false };

// Final version
const final = { scale: 1, printBackground: true };
```

## See Also

- [Paper Size & Format](pdf-paper-size.md) - Configure page dimensions
- [PDF Margins](pdf-margins.md) - Set page margins
- [PDF Storage](pdf-storage.md) - Save rendered PDFs