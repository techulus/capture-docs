---
id: screenshot-capture-area
title: Capture Area & Selection
---

Control exactly what part of the page gets captured in your screenshot. From full-page captures to specific elements, these options give you precise control over the capture area.

## Capture Modes

### Full Page Capture (`full`)
- **Default**: `false`
- **Description**: Captures the entire page height, including content below the fold
- **Example**: `full=true`
- **Note**: Overrides any height clipping settings

### Element Selection

#### CSS Selector (`selector`)
- **Default**: None
- **Description**: Captures only the element matching the CSS selector
- **Example**: `selector=.main-content` or `selector=header nav`
- **URL Encoding**: Remember to URL-encode complex selectors

#### Element ID (`selectorId`)
- **Default**: None
- **Description**: Captures only the element with the specified ID
- **Example**: `selectorId=hero-section`
- **Note**: More performant than CSS selector for ID-based selection

## Clipping Rectangle

Define a specific rectangular area to capture within the viewport:

### Left Offset (`left`)
- **Default**: `0`
- **Description**: X-coordinate of the top-left corner in pixels
- **Range**: 0 to viewport width

### Top Offset (`top`)
- **Default**: `0`
- **Description**: Y-coordinate of the top-left corner in pixels
- **Range**: 0 to viewport height

### Width (`width`)
- **Default**: Viewport width
- **Description**: Width of the clipping rectangle in pixels
- **Note**: Cannot exceed viewport width minus left offset

### Height (`height`)
- **Default**: Viewport height
- **Description**: Height of the clipping rectangle in pixels
- **Note**: Cannot exceed viewport height minus top offset

## Usage Examples

### Full Page Screenshot
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&full=true
```

### Capture Specific Element by Class
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&selector=.featured-article
```

### Capture Element by ID
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&selectorId=main-navigation
```

### Custom Clipping Rectangle
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&top=100&left=50&width=800&height=600
```

## Common Use Cases

### Hero Section Capture
Capture just the hero section of a landing page:
```
&selectorId=hero-section
// or
&selector=.hero-banner
```

### Navigation Bar
Capture only the navigation area:
```
&selector=header nav
// or with clipping
&top=0&height=80&width=1920
```

### Content Area Without Sidebar
```
&selector=main.content
// or manually clip
&left=300&width=900&top=100&height=800
```

### Footer Capture
```
&selector=footer
// or
&selectorId=site-footer
```

## Selector Best Practices

### 1. Use Specific Selectors
```
// Good
&selector=article.post-content
&selector=#main-content .featured-section

// Avoid if possible
&selector=div
&selector=.content (too generic)
```

### 2. ID vs Class Selection
- Use `selectorId` when targeting elements with unique IDs (faster)
- Use `selector` for class-based or complex selections

### 3. URL Encoding
Always URL-encode complex selectors:
```
// Original: section[data-type="hero"]
&selector=section%5Bdata-type%3D%22hero%22%5D

// Original: .class1.class2
&selector=.class1.class2
```

## Clipping Best Practices

### 1. Stay Within Viewport
Ensure your clipping rectangle stays within the viewport bounds:
```javascript
// Valid (assuming 1920x1080 viewport)
top=100&left=100&width=1720&height=880

// Invalid (exceeds viewport)
top=100&left=100&width=2000&height=1200
```

### 2. Account for Responsive Design
Different viewport sizes may require different clipping coordinates:
```
// Desktop
&vw=1920&vh=1080&left=460&width=1000

// Mobile (adjusted proportionally)
&vw=375&vh=667&left=37&width=300
```

### 3. Combine with Full Page
When using `full=true`, clipping width is respected but height is ignored:
```
&full=true&left=100&width=1200
// Captures full height but only 1200px width starting from left=100
```

## Advanced Techniques

### Dynamic Element Capture
For elements that load dynamically, combine with wait options:
```
&waitFor=.dynamic-content&selector=.dynamic-content
```

### Multiple Element Capture
To capture multiple elements, use a parent selector that contains all desired elements:
```
// Capture all articles
&selector=.articles-container

// Capture specific sections
&selector=main section:nth-of-type(2)
```

### Viewport-Relative Capture
Calculate clipping based on viewport percentages:
```javascript
const vw = 1920;
const vh = 1080;

// Capture center 80% of viewport
const left = vw * 0.1;  // 10% from left
const width = vw * 0.8; // 80% width
const top = vh * 0.1;   // 10% from top
const height = vh * 0.8; // 80% height

const url = `&left=${left}&width=${width}&top=${top}&height=${height}`;
```

## Performance Tips

### 1. Element Selection vs Clipping
- Element selection is more reliable for dynamic content
- Clipping is faster for fixed-position content

### 2. Full Page Considerations
- Full page captures use more memory and time
- Consider element selection for long pages

### 3. Selector Performance
- ID selectors are fastest
- Complex CSS selectors may slow down capture
- Avoid universal selectors (*)

## Common Issues and Solutions

### Element Not Found
If selector doesn't match any element:
- Verify selector syntax
- Check if element is dynamically loaded (use `waitFor`)
- Ensure proper URL encoding

### Clipping Outside Viewport
If clipping appears cut off:
- Verify coordinates are within viewport bounds
- Check viewport size settings
- Consider using element selection instead

### Dynamic Content
For content that changes position:
- Use element selectors instead of fixed coordinates
- Implement wait strategies
- Consider multiple captures

## See Also

- [Viewport Configuration](screenshot-viewport.md) - Set the visible area size
- [Timing & Waiting](screenshot-timing.md) - Wait for elements before capture
- [Output Options](screenshot-output-options.md) - Resize captured images