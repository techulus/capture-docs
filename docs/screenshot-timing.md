---
id: screenshot-timing
title: Timing & Waiting Options
---

Control when the screenshot is taken by adding delays or waiting for specific elements to appear. These options are essential for capturing dynamic content, animations, and JavaScript-rendered pages.

## Timing Parameters

### Delay (`delay`)
- **Default**: `0` seconds
- **Description**: Fixed delay before capturing the screenshot
- **Range**: 0-60 seconds (use edge endpoint for delays > 25 seconds)
- **Example**: `delay=3` waits 3 seconds before capture

### Wait for CSS Selector (`waitFor`)
- **Default**: None
- **Description**: Waits for an element matching the CSS selector to appear
- **Timeout**: 30 seconds maximum
- **Example**: `waitFor=.loading-complete`

### Wait for Element ID (`waitForId`)
- **Default**: None
- **Description**: Waits for an element with specific ID to appear
- **Timeout**: 30 seconds maximum
- **Example**: `waitForId=content-loaded`

## Usage Examples

### Simple Delay
Wait 5 seconds for page animations:
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&delay=5
```

### Wait for Specific Element
Wait for dynamic content to load:
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&waitFor=.chart-container
```

### Wait for Element by ID
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&waitForId=data-table
```

## Common Scenarios

### Single Page Applications (SPAs)
SPAs often render content after initial page load:
```
// Wait for React app to mount
&waitFor=.app-ready

// Wait for Vue component
&waitFor=[data-v-mounted="true"]

// Wait for Angular component
&waitFor=app-root.ng-star-inserted
```

### Lazy-Loaded Images
Ensure images are loaded before capture:
```
// Wait for specific image
&waitFor=img.hero-image

// Wait for all images in container
&waitFor=.gallery img:last-child
```

### Loading Animations
Skip loading states:
```
// Wait for loader to disappear
&waitFor=body:not(.loading)

// Wait for skeleton screens to be replaced
&waitFor=.content:not(.skeleton)
```

### Data Visualizations
Capture charts after they render:
```
// Chart.js
&waitFor=canvas.chart-rendered

// D3.js visualizations
&waitFor=svg.visualization-complete

// Highcharts
&waitFor=.highcharts-container
```

## Best Practices

### 1. Prefer waitFor Over delay
Dynamic waits are more reliable and faster than fixed delays:
```
// Better: Wait for specific condition
&waitFor=.content-loaded

// Avoid: Arbitrary delay
&delay=10
```

### 2. Use Specific Selectors
Target the exact element you're waiting for:
```
// Good: Specific to content
&waitFor=article.post-content

// Bad: Too generic
&waitFor=div
```

### 3. Combine Multiple Strategies
For complex loading scenarios:
```
// Initial delay + element wait
&delay=1&waitFor=.charts-container

// Wait for ID then add small delay for animations
&waitForId=dashboard&delay=0.5
```

### 4. Handle Timeout Gracefully
If element might not appear:
- Set appropriate expectations
- Consider fallback strategies
- Monitor timeout failures

## Advanced Waiting Strategies

### Wait for Text Content
```
// Wait for specific text to appear
&waitFor=h1:contains("Welcome")

// Wait for non-empty element
&waitFor=.price:not(:empty)
```

### Wait for Attribute Changes
```
// Wait for data attribute
&waitFor=[data-loaded="true"]

// Wait for class addition
&waitFor=.modal.open
```

### Wait for Network Idle
While not directly supported, you can approximate:
```
// Wait for loading indicators to disappear
&waitFor=body:not(.ajax-loading)

// Wait for final element in AJAX response
&waitFor=.pagination-loaded
```

## Performance Optimization

### 1. Minimize Wait Times
- Use the most specific selector possible
- Target the first reliable indicator of readiness
- Avoid waiting for elements that load last

### 2. Edge Endpoint for Long Waits
For delays exceeding 25 seconds:
```
// Use edge endpoint
https://edge.capture.page/KEY/HASH/image?url=site.com&delay=45

// Instead of CDN endpoint
https://cdn.capture.page/...
```

### 3. Timeout Considerations
- Default timeout is 30 seconds
- Plan for timeout scenarios
- Log and monitor timeout occurrences

## Common Patterns by Framework

### React Applications
```
// Root component mounted
&waitFor=#root>div

// Specific component loaded
&waitFor=[data-testid="main-content"]

// Redux state updated
&waitFor=[data-ready="true"]
```

### Vue.js Applications
```
// Vue app mounted
&waitFor=#app>div

// Component lifecycle
&waitFor=.vue-component-mounted

// Vuex store populated
&waitFor=[data-store-ready]
```

### Angular Applications
```
// Angular bootstrapped
&waitFor=app-root>*

// Component rendered
&waitFor=.ng-star-inserted

// HTTP calls completed
&waitFor=.data-loaded
```

## Debugging Tips

### 1. Element Not Found
If waitFor times out:
- Verify selector in browser DevTools
- Check if element is in iframe
- Ensure element isn't removed after appearing

### 2. Premature Capture
If capturing too early:
- Element might appear briefly then change
- Use more specific end-state selector
- Add small delay after element appears

### 3. Inconsistent Results
For flaky captures:
- Identify all dynamic elements
- Use most stable indicator
- Consider multiple wait conditions

## Combining with Other Options

### With Full Page Capture
```
// Wait for content then capture full page
&waitFor=.all-content-loaded&full=true
```

### With Element Selection
```
// Wait for element then capture it
&waitFor=.chart-container&selector=.chart-container
```

### With Dark Mode
```
// Wait for theme to apply
&darkMode=true&waitFor=body.dark-theme
```

## See Also

- [Capture Area & Selection](screenshot-capture-area.md) - Capture specific loaded elements
- [Page Enhancements](screenshot-page-enhancements.md) - Modify page before capture
- [Device Emulation](screenshot-device-emulation.md) - Different devices may have different load times