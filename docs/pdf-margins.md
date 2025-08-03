---
id: pdf-margins
title: PDF Margins
---

Control the white space around your PDF content with precise margin settings. Proper margins ensure readability, allow for binding, and create professional-looking documents.

## Margin Parameters

All margins accept values with units (e.g., `1in`, `2.5cm`, `20mm`, `72pt`).

### Top Margin (`marginTop`)
- **Default**: Browser default (~0.4in)
- **Description**: Space at the top of each page
- **Example**: `marginTop=1in`

### Right Margin (`marginRight`)
- **Default**: Browser default (~0.4in)
- **Description**: Space on the right side of each page
- **Example**: `marginRight=0.75in`

### Bottom Margin (`marginBottom`)
- **Default**: Browser default (~0.4in)
- **Description**: Space at the bottom of each page
- **Example**: `marginBottom=1in`

### Left Margin (`marginLeft`)
- **Default**: Browser default (~0.4in)
- **Description**: Space on the left side of each page
- **Example**: `marginLeft=0.75in`

## Important Note
**All four margins must be specified together** when setting custom margins. You cannot set individual margins.

## Usage Examples

### Standard Office Margins
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&marginTop=1in&marginRight=1in&marginBottom=1in&marginLeft=1in
```

### Narrow Margins
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&marginTop=0.5in&marginRight=0.5in&marginBottom=0.5in&marginLeft=0.5in
```

### Wide Margins for Binding
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&marginTop=1in&marginRight=0.75in&marginBottom=1in&marginLeft=1.25in
```

### Metric Margins
```
https://cdn.capture.page/KEY/HASH/pdf?url=https://example.com&marginTop=25mm&marginRight=20mm&marginBottom=25mm&marginLeft=20mm
```

## Common Margin Presets

### Document Types

#### Standard Document
```
// 1 inch all around (US)
&marginTop=1in&marginRight=1in&marginBottom=1in&marginLeft=1in

// 2.5cm all around (Metric)
&marginTop=2.5cm&marginRight=2.5cm&marginBottom=2.5cm&marginLeft=2.5cm
```

#### Academic Papers
```
// MLA Format
&marginTop=1in&marginRight=1in&marginBottom=1in&marginLeft=1in

// APA Format
&marginTop=1in&marginRight=1in&marginBottom=1in&marginLeft=1in
```

#### Business Letters
```
// Professional letter
&marginTop=2in&marginRight=1in&marginBottom=1in&marginLeft=1in

// Compact business
&marginTop=1in&marginRight=0.75in&marginBottom=1in&marginLeft=0.75in
```

#### Books & Publications
```
// Book with binding consideration
&marginTop=0.75in&marginRight=0.5in&marginBottom=0.75in&marginLeft=1in

// Magazine style
&marginTop=0.5in&marginRight=0.5in&marginBottom=0.5in&marginLeft=0.5in
```

### Specialty Formats

#### Presentation Handouts
```
// Wide margins for notes
&marginTop=1in&marginRight=2in&marginBottom=1in&marginLeft=0.75in

// Minimal margins for slides
&marginTop=0.25in&marginRight=0.25in&marginBottom=0.25in&marginLeft=0.25in
```

#### Forms & Applications
```
// Room for hole punching
&marginTop=0.5in&marginRight=0.5in&marginBottom=0.5in&marginLeft=1.25in

// Government forms
&marginTop=0.75in&marginRight=0.75in&marginBottom=0.75in&marginLeft=0.75in
```

#### Brochures
```
// Tri-fold margins
&marginTop=0.25in&marginRight=0.25in&marginBottom=0.25in&marginLeft=0.25in

// With bleed area
&marginTop=0.375in&marginRight=0.375in&marginBottom=0.375in&marginLeft=0.375in
```

## Unit Conversions

### Supported Units
| Unit | Description | Example | Conversion |
|------|-------------|---------|------------|
| `in` | Inches | `1in` | 1 inch = 25.4mm |
| `mm` | Millimeters | `25mm` | 1mm = 0.0394 inches |
| `cm` | Centimeters | `2.5cm` | 1cm = 0.394 inches |
| `pt` | Points | `72pt` | 72pt = 1 inch |
| `px` | Pixels | `96px` | 96px = 1 inch (at 96 DPI) |

### Common Conversions
```javascript
// Inches to other units
1 inch = 2.54 cm = 25.4 mm = 72 pt = 96 px

// Centimeters to other units
1 cm = 0.394 in = 10 mm = 28.35 pt = 37.8 px

// Standard margins in different units
1 inch = 2.54cm = 25.4mm = 72pt
0.5 inch = 1.27cm = 12.7mm = 36pt
0.75 inch = 1.905cm = 19.05mm = 54pt
```

## Margin Guidelines

### Minimum Margins

#### For Printing
- **Laser/Inkjet**: 0.25in (6.35mm) minimum
- **Professional**: 0.5in (12.7mm) recommended
- **Binding edge**: Add 0.25-0.5in extra

#### For Digital Viewing
- **Screen**: 0.25in (6.35mm) minimum
- **Mobile**: 0.125in (3.175mm) possible
- **Tablets**: 0.25in (6.35mm) comfortable

### Maximum Margins

Consider content area:
```javascript
// Calculate content area
const pageWidth = 8.5; // inches
const marginLeft = 1;
const marginRight = 1;
const contentWidth = pageWidth - marginLeft - marginRight; // 6.5 inches

// Ensure adequate content space
const minContentWidth = 4; // inches
const maxMargins = (pageWidth - minContentWidth) / 2; // 2.25 inches
```

## Special Considerations

### Binding & Hole Punching

#### Left Binding
```
// Extra left margin for binding
&marginTop=1in&marginRight=0.75in&marginBottom=1in&marginLeft=1.25in
```

#### Top Binding
```
// Extra top margin for binding
&marginTop=1.5in&marginRight=0.75in&marginBottom=0.75in&marginLeft=0.75in
```

#### Three-Hole Punch
```
// Standard hole punch spacing
&marginTop=0.5in&marginRight=0.5in&marginBottom=0.5in&marginLeft=1.25in
```

### Headers & Footers

Margins affect header/footer placement:
```
// Room for headers
&marginTop=1.5in&marginRight=1in&marginBottom=1in&marginLeft=1in

// Room for footers
&marginTop=1in&marginRight=1in&marginBottom=1.5in&marginLeft=1in
```

### Landscape Orientation

Adjust margins for landscape:
```
// Portrait margins
&marginTop=1in&marginRight=1in&marginBottom=1in&marginLeft=1in

// Landscape adjusted
&landscape=true&marginTop=0.75in&marginRight=1in&marginBottom=0.75in&marginLeft=1in
```

## Dynamic Margin Calculation

### Based on Content Type

```javascript
function getMargins(contentType) {
  const margins = {
    'report': { top: '1in', right: '1in', bottom: '1in', left: '1in' },
    'letter': { top: '2in', right: '1in', bottom: '1in', left: '1in' },
    'form': { top: '0.5in', right: '0.5in', bottom: '0.5in', left: '0.5in' },
    'poster': { top: '0.25in', right: '0.25in', bottom: '0.25in', left: '0.25in' }
  };
  
  return margins[contentType] || margins['report'];
}
```

### Responsive Margins

```javascript
// Scale margins based on page size
function scaleMargins(format, baseMargin = 1) {
  const scaleFactor = {
    'A6': 0.5,
    'A5': 0.75,
    'A4': 1,
    'A3': 1.25,
    'Letter': 1,
    'Legal': 1.1,
    'Tabloid': 1.5
  }[format] || 1;
  
  const margin = `${baseMargin * scaleFactor}in`;
  return { top: margin, right: margin, bottom: margin, left: margin };
}
```

## Troubleshooting

### Content Cut Off

If content is cut off at margins:
```
// Reduce margins
&marginTop=0.5in&marginRight=0.5in&marginBottom=0.5in&marginLeft=0.5in

// Or increase page size
&format=A3  // Larger format
```

### Margins Not Applied

Common issues:
- All four margins must be specified
- Include units (1in not just 1)
- Check for typos in parameter names

### Printer Compatibility

Different printers have different minimums:
```
// Safe for most printers
&marginTop=0.5in&marginRight=0.5in&marginBottom=0.5in&marginLeft=0.5in

// Test with your specific printer
// Some may support 0.25in or less
```

## Best Practices

### 1. Consistency
Maintain consistent margins throughout a document set:
```javascript
// Define standard margins
const COMPANY_MARGINS = {
  top: '1in',
  right: '0.75in',
  bottom: '1in',
  left: '0.75in'
};
```

### 2. Purpose-Driven
Choose margins based on use:
```
// Reading document
&marginTop=1in&marginRight=1.25in&marginBottom=1in&marginLeft=1.25in

// Data-heavy report
&marginTop=0.5in&marginRight=0.5in&marginBottom=0.5in&marginLeft=0.5in

// Formal document
&marginTop=1in&marginRight=1in&marginBottom=1in&marginLeft=1in
```

### 3. Testing
Always test with your target output:
- Print a test page
- Check on different devices
- Verify binding space
- Confirm readability

## Accessibility Considerations

### Readable Margins
- Minimum 0.5in for body text
- Wider margins for large print
- Consider visual comfort
- Allow for annotations

### Device Variations
```javascript
// Desktop viewing
const desktopMargins = '1in';

// Tablet viewing
const tabletMargins = '0.75in';

// Mobile viewing (if applicable)
const mobileMargins = '0.5in';
```

## See Also

- [Paper Size & Format](pdf-paper-size.md) - Set page dimensions
- [PDF Rendering](pdf-rendering.md) - Scale and print options
- [Storage Options](pdf-storage.md) - Save PDFs with proper formatting