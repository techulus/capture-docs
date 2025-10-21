---
id: animated-capture-behavior
title: Capture Behavior Options
---

Control when and how the animated screenshot recording begins, what content to focus on, and how the page behaves during capture.

## Timing Controls

### Delay (`delay`)
- **Default**: `0` seconds
- **Range**: 0-25 seconds
- **Description**: Wait time before starting recording
- **Example**: `delay=3`

### Wait for Element (`waitFor`)
- **Default**: None
- **Description**: Wait for CSS selector to appear before recording
- **Example**: `waitFor=.content-loaded`
- **Timeout**: 30 seconds

### Wait for ID (`waitForId`)
- **Default**: None
- **Description**: Wait for element with specific ID
- **Example**: `waitForId=main-content`
- **Timeout**: 30 seconds

## Content Selection

### Element Selector (`selector`)
- **Default**: None (full viewport)
- **Description**: Record only specific element
- **Example**: `selector=.main-content`

### Full Page Recording (`fullPage`)
- **Default**: `false`
- **Description**: Record entire page height
- **Example**: `fullPage=true`

## Usage Examples

### Basic Delayed Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&delay=3&duration=10
```

### Wait for Content
```
https://cdn.capture.page/KEY/HASH/animated?url=https://spa-app.com&waitFor=.app-ready&duration=8
```

### Element-Focused Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&selector=.hero-section&duration=6
```

### Full Page Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&fullPage=true&duration=15
```

## Timing Strategies

### Static Content
For pages with minimal dynamic behavior:
```
&delay=1  // Quick start for static sites
```

### Dynamic Content
For JavaScript-heavy applications:
```
&delay=3&waitFor=.app-mounted  // SPA applications
&delay=5&waitFor=.charts-loaded  // Data-driven dashboards
```

### API-Dependent Content
For pages loading external data:
```
&delay=4&waitFor=.api-content-ready
&delay=6&waitFor=[data-loaded="true"]
```

## Content Selection Strategies

### Focus on Specific Sections
```
&selector=.hero-section&duration=8  // Landing page hero
&selector=.product-gallery&duration=10  // Product showcase
&selector=header nav&duration=6  // Navigation
```

### Dashboard Recording
```
&selector=.dashboard-content&duration=15&waitFor=.data-loaded
```

### Full Page
```
&fullPage=true&duration=20  // Complete page capture
```

## Common Use Cases

### E-commerce Sites
```
// Product details
&waitFor=.product-details-loaded&delay=2&duration=10

// Product grid
&waitFor=.product-grid-complete&fullPage=true&duration=20
```

### Documentation Sites
```
// Code examples
&waitFor=.code-examples-ready&selector=.api-docs&duration=12

// Full tutorial
&fullPage=true&waitFor=.tutorial-loaded&duration=25
```

### SaaS Dashboards
```
// Charts loading
&waitFor=.charts-rendered&delay=4&duration=12

// Real-time metrics
&waitFor=.metrics-live&delay=5&duration=15
```

## Best Practices

### 1. Minimize Wait Times
Use the shortest reliable wait time instead of arbitrary delays:
```
&delay=2  // Instead of &delay=10
&waitFor=.critical-content  // Instead of general delay
```

### 2. Choose Appropriate Duration
```
hero: 6s           // Quick showcase
feature: 10s       // Feature demonstration
tutorial: 15s      // Step-by-step
fullPage: 20s      // Complete page tour
```

### 3. Test Wait Conditions
Verify wait conditions work in browser DevTools:
```javascript
document.querySelector('.your-wait-selector');
```

### 4. Smart Element Selection
Choose stable, well-defined areas:
```
✅ Good: &selector=main.content
✅ Good: &selector=.product-showcase
❌ Avoid: &selector=.ad-container  // May be blocked
```

## Troubleshooting

### Recording Starts Too Early
- Increase delay time
- Use `waitFor` with specific selector
- Check for dynamic content loading

### Element Not Found
- Verify selector in browser DevTools
- Check if element is in iframe
- Ensure element isn't removed after appearing

### Partial Content Recorded
- Use `fullPage=true` for complete content
- Increase duration for long content
- Ensure selector targets the right element

## See Also

- [Animation Settings](animated-animation-settings.md) - Configure output format and quality
- [Animated Viewport](animated-viewport.md) - Set recording dimensions
- [Animated Page Interaction](animated-page-interaction.md) - Modify page before recording
