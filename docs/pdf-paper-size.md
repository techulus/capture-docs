---
id: pdf-paper-size
title: Paper Size & Format
---

Configure the paper dimensions, orientation, and format for your PDF output. These settings determine the layout and appearance of your generated PDFs.

## Paper Format

### Format (`format`)
- **Default**: `A4`
- **Options**: `Letter`, `Legal`, `Tabloid`, `Ledger`, `A0`, `A1`, `A2`, `A3`, `A4`, `A5`, `A6`
- **Example**: `format=Letter`
- **Note**: Predefined sizes following international standards

### Landscape Orientation (`landscape`)
- **Default**: `false` (portrait)
- **Description**: Rotate paper to landscape orientation
- **Example**: `landscape=true`
- **Effect**: Swaps width and height dimensions

## Standard Paper Formats

### ISO 216 A-Series (International)

| Format | Portrait (mm) | Portrait (inches) | Landscape (mm) | Landscape (inches) |
|--------|---------------|-------------------|----------------|-------------------|
| A0 | 841 × 1189 | 33.1 × 46.8 | 1189 × 841 | 46.8 × 33.1 |
| A1 | 594 × 841 | 23.4 × 33.1 | 841 × 594 | 33.1 × 23.4 |
| A2 | 420 × 594 | 16.5 × 23.4 | 594 × 420 | 23.4 × 16.5 |
| A3 | 297 × 420 | 11.7 × 16.5 | 420 × 297 | 16.5 × 11.7 |
| A4 | 210 × 297 | 8.3 × 11.7 | 297 × 210 | 11.7 × 8.3 |
| A5 | 148 × 210 | 5.8 × 8.3 | 210 × 148 | 8.3 × 5.8 |
| A6 | 105 × 148 | 4.1 × 5.8 | 148 × 105 | 5.8 × 4.1 |

### North American Sizes

| Format | Portrait (inches) | Portrait (mm) | Landscape (inches) | Landscape (mm) |
|--------|-------------------|---------------|-------------------|----------------|
| Letter | 8.5 × 11 | 216 × 279 | 11 × 8.5 | 279 × 216 |
| Legal | 8.5 × 14 | 216 × 356 | 14 × 8.5 | 356 × 216 |
| Tabloid | 11 × 17 | 279 × 432 | 17 × 11 | 432 × 279 |
| Ledger | 17 × 11 | 432 × 279 | 11 × 17 | 279 × 432 |

## Custom Paper Size

### Width (`width`)
- **Default**: None (uses format)
- **Description**: Custom paper width
- **Example**: `width=8.5in` or `width=210mm`
- **Required**: Must be used with height

### Height (`height`)
- **Default**: None (uses format)
- **Description**: Custom paper height
- **Example**: `height=11in` or `height=297mm`
- **Required**: Must be used with width

### Supported Units
- **Inches**: `in` (e.g., `8.5in`)
- **Millimeters**: `mm` (e.g., `210mm`)
- **Centimeters**: `cm` (e.g., `21cm`)
- **Points**: `pt` (e.g., `612pt`)
- **Pixels**: `px` (e.g., `816px` at 96 DPI)

## Usage Examples

### Standard A4 PDF
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&format=A4
```

### Letter Size Landscape
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&format=Letter&landscape=true
```

### Custom Size PDF
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&width=5in&height=7in
```

### Large Format Poster
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&format=A1&landscape=true
```

## Common Use Cases

### Business Documents

#### Standard Letter
```
// US business document
&format=Letter

// International business
&format=A4
```

#### Legal Documents
```
// US legal size
&format=Legal

// Landscape for wide tables
&format=Legal&landscape=true
```

### Marketing Materials

#### Brochures
```
// Tri-fold brochure (custom)
&width=11in&height=8.5in&landscape=true

// A4 bi-fold
&format=A4&landscape=true
```

#### Posters
```
// Small poster
&format=A3

// Large poster
&format=A1&landscape=true
```

### Reports & Presentations

#### Financial Reports
```
// Standard report
&format=A4

// Wide financial tables
&format=A4&landscape=true
```

#### Slide Handouts
```
// Presentation format
&format=Letter&landscape=true

// European presentation
&format=A4&landscape=true
```

## Custom Size Guidelines

### Common Custom Sizes

#### Books & Publications
```
// Paperback novel
&width=5.5in&height=8.5in

// Technical manual
&width=7in&height=10in

// Magazine
&width=8.375in&height=10.875in
```

#### Labels & Cards
```
// Business card
&width=3.5in&height=2in

// Postcard
&width=6in&height=4in

// CD cover
&width=4.75in&height=4.75in
```

#### Digital Formats
```
// Kindle
&width=3.6in&height=4.8in

// iPad screen
&width=7.76in&height=10.24in

// Mobile viewport
&width=375px&height=812px
```

### Size Calculations

#### Converting Units
```javascript
// Inches to millimeters
const mm = inches * 25.4;

// Millimeters to inches
const inches = mm / 25.4;

// Points to inches (72 points = 1 inch)
const inches = points / 72;

// Pixels to inches (at 96 DPI)
const inches = pixels / 96;
```

#### Aspect Ratios
```javascript
// Calculate height from width and ratio
const ratio = 1.414; // A4 ratio
const width = 210; // mm
const height = width * ratio; // 297mm

// Common ratios
const A_SERIES = 1.414; // √2
const GOLDEN = 1.618;
const US_LETTER = 1.294;
```

## Orientation Best Practices

### When to Use Portrait
- Text-heavy documents
- Standard reports
- Books and articles
- Vertical infographics
- Mobile app screenshots

### When to Use Landscape
- Wide tables and spreadsheets
- Presentations
- Horizontal timelines
- Panoramic images
- Side-by-side comparisons

### Dynamic Orientation
```javascript
// Choose orientation based on content
const contentWidth = measureContentWidth();
const threshold = 800; // pixels

const orientation = contentWidth > threshold ? 
  '&landscape=true' : '';
```

## Performance Considerations

### File Size Impact
Larger paper sizes result in:
- Increased file size
- Higher memory usage
- Longer processing time
- More storage space

### Optimization Tips

#### Right-size Your PDFs
```
// Don't use A0 for simple documents
❌ &format=A0  // Unnecessary

// Use appropriate size
✅ &format=A4  // Standard document
```

#### Consider Digital vs Print
```
// Digital viewing (smaller file)
&width=8.5in&height=11in&scale=0.8

// Print quality (full size)
&format=Letter&scale=1
```

## Regional Preferences

### By Region

#### North America
- Default: Letter (8.5" × 11")
- Legal documents: Legal (8.5" × 14")
- Posters: Tabloid (11" × 17")

#### Europe & International
- Default: A4 (210mm × 297mm)
- Large docs: A3 (297mm × 420mm)
- Small docs: A5 (148mm × 210mm)

#### Japan
- Default: A4 or B5 (182mm × 257mm)
- Books: B6 (128mm × 182mm)
- Business: A4

### Auto-Detection
```javascript
// Detect user region
const region = getUserRegion();

const defaultFormat = {
  'US': 'Letter',
  'CA': 'Letter',
  'EU': 'A4',
  'UK': 'A4',
  'JP': 'A4',
  'default': 'A4'
}[region] || 'A4';
```

## Common Issues

### Content Cut Off
If content is truncated:
```
// Increase page size
&format=A3  // Instead of A4

// Use landscape
&landscape=true

// Adjust scale
&scale=0.8
```

### Unexpected Dimensions
When custom sizes don't work:
- Verify unit syntax (8.5in not 8.5")
- Both width AND height required
- Check maximum size limits

### Resolution Problems
For print quality:
- Use larger formats
- Increase scale factor
- Consider vector content

## Best Practices

### 1. Match Intent
```
// Screen viewing
&format=A4&scale=0.9

// Professional printing
&format=Letter&scale=1

// Archive/legal
&format=Legal&scale=1
```

### 2. Test Multiple Sizes
```javascript
const sizes = ['A4', 'Letter', 'A3'];
sizes.forEach(format => {
  generatePDF(url, format);
});
```

### 3. Document Standards
- Follow organizational guidelines
- Consider international users
- Maintain consistency
- Document size choices

## See Also

- [PDF Margins](pdf-margins.md) - Configure page margins
- [PDF Rendering](pdf-rendering.md) - Scale and quality settings
- [Screenshot Options](screenshot-options.md) - Alternative to PDF for some use cases