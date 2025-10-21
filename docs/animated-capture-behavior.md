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
- **Default**: None (full page)
- **Description**: Record only specific element
- **Example**: `selector=.main-content`
- **Note**: Creates focused animation of selected area

### Full Page Recording (`fullPage`)
- **Default**: `false`
- **Description**: Record entire page height
- **Example**: `fullPage=true`
- **Note**: Captures the entire page in a single frame

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
// Quick start for static sites
&delay=1

// No delay for simple pages
&delay=0
```

### Dynamic Content
For JavaScript-heavy applications:
```
// SPA applications
&delay=3&waitFor=.app-mounted

// Data-driven dashboards
&delay=5&waitFor=.charts-loaded

// E-commerce pages
&delay=2&waitFor=.product-images-loaded
```

### API-Dependent Content
For pages loading external data:
```
// Wait for API responses
&delay=4&waitFor=.api-content-ready

// Real-time data
&delay=6&waitFor=[data-loaded="true"]

// Third-party widgets
&delay=5&waitFor=.widgets-initialized
```

## Content Selection Strategies

### Hero Section Recording
```
// Focus on landing page hero
&selector=.hero-section&duration=8

// Product showcase
&selector=.product-gallery&duration=10
```

### Navigation Demonstrations
```
// Header navigation
&selector=header nav&duration=6

// Mobile menu animation
&selector=.mobile-menu&delay=1&duration=5
```

### Feature Highlights
```
// Specific features
&selector=.features-section&duration=12

// Interactive components
&selector=.interactive-demo&delay=2&duration=10
```

### Dashboard Recording
```
// Main dashboard area
&selector=.dashboard-content&duration=15&waitFor=.data-loaded

// Specific charts
&selector=.charts-container&delay=3&duration=8
```

## Full Page Recording

### Long Form Content
```
// Blog posts
&fullPage=true&duration=20

// Documentation pages
&fullPage=true&duration=25

// Product catalogs
&fullPage=true&duration=30
```

### Landing Pages
```
// Complete landing page tour
&fullPage=true&duration=15

// Services overview
&fullPage=true&duration=18
```

## Advanced Behavior Patterns

### Progressive Loading
For content that loads in stages:
```javascript
// Wait for critical content first
&waitFor=.critical-content&delay=2

// Then capture full content
&duration=12&fullPage=true
```

### Interactive Demos
For demonstrating user interactions:
```
// Wait for interactive elements
&waitFor=.interactive-ready&delay=3&duration=10

// Focus on interaction area
&selector=.demo-area&duration=8
```

### Multi-Stage Applications
For complex applications with multiple loading phases:
```
// Phase 1: App initialization
&waitFor=.app-initialized

// Phase 2: Data loading
&waitFor=.data-ready

// Phase 3: UI complete
&waitFor=.ui-complete&duration=15
```

## Platform-Specific Patterns

### E-commerce Sites

#### Product Pages
```
// Product details loading
&waitFor=.product-details-loaded&delay=2&duration=10

// Image gallery animation
&selector=.product-gallery&duration=8

// Reviews section
&selector=.reviews-section&waitFor=.reviews-loaded&duration=6
```

#### Category Pages
```
// Product grid loading
&waitFor=.product-grid-complete&fullPage=true&duration=20

// Filter demonstrations
&selector=.filters-container&delay=1&duration=8
```

### Documentation Sites

#### API Documentation
```
// Code examples loading
&waitFor=.code-examples-ready&selector=.api-docs&duration=12

// Interactive API explorer
&selector=.api-explorer&waitFor=.explorer-ready&duration=15
```

#### Tutorials
```
// Step-by-step content
&fullPage=true&waitFor=.tutorial-loaded&duration=25

// Code playground
&selector=.code-playground&delay=3&duration=10
```

### SaaS Dashboards

#### Analytics Dashboards
```
// Charts loading
&waitFor=.charts-rendered&delay=4&duration=12

// Data tables
&selector=.data-tables&waitFor=.table-ready&duration=8

// Real-time metrics
&waitFor=.metrics-live&delay=5&duration=15
```

## Optimization Techniques

### Efficient Waiting
```javascript
// Use most reliable indicator
// ✅ Good - Specific and reliable
&waitFor=.main-content[data-loaded="complete"]

// ❌ Avoid - Generic or unreliable
&waitFor=div
&waitFor=.loading  // Might disappear quickly
```

### Smart Element Selection
```javascript
// Choose stable, well-defined areas
// ✅ Good selections
&selector=main.content
&selector=.product-showcase
&selector=#dashboard-main

// ❌ Avoid problematic selectors
&selector=.ad-container    // May be blocked
&selector=.social-widget   // External dependencies
```

### Performance Balancing
```javascript
// Balance wait time vs recording time
function optimizeRecording(contentType) {
  const configs = {
    static: { delay: 1, duration: 6 },
    dynamic: { delay: 3, duration: 10 },
    complex: { delay: 5, duration: 15 }
  };
  
  return configs[contentType] || configs.dynamic;
}
```

## Common Patterns

### Loading States
```
// Skip loading spinners
&waitFor=body:not(.loading)&delay=1

// Wait for content to replace skeleton
&waitFor=.content:not(.skeleton)&delay=2

// Ensure data is populated
&waitFor=[data-state="loaded"]&delay=1
```

### Animation Sequences
```
// CSS animations complete
&delay=3&duration=8  // Allow entrance animations

// JavaScript animations
&waitFor=.animations-complete&duration=10

// Transition states
&waitFor=.transition-settled&delay=2
```

### Interactive Elements
```
// Form initialization
&waitFor=.form-ready&selector=.contact-form&duration=6

// Map loading
&waitFor=.map-loaded&selector=.map-container&duration=8

// Chat widget
&waitFor=.chat-ready&selector=.chat-widget&duration=5
```

## Best Practices

### 1. Minimize Wait Times
```
// Use shortest reliable wait
&delay=2  // Instead of arbitrary &delay=10

// Specific element waiting
&waitFor=.critical-content  // Instead of general delay
```

### 2. Choose Appropriate Duration
```javascript
// Match duration to content
const durations = {
  hero: 6,           // Quick showcase
  feature: 10,       // Feature demonstration  
  tutorial: 15,      // Step-by-step
  fullPage: 20       // Complete page tour
};
```

### 3. Test Wait Conditions
```javascript
// Verify wait conditions work
// Test in browser DevTools first
document.querySelector('.your-wait-selector');

// Monitor element appearance timing
console.time('element-load');
// ... wait for element
console.timeEnd('element-load');
```

### 4. Fallback Strategies
```javascript
// Implement graceful degradation
function buildCaptureUrl(url, options) {
  let captureUrl = url;
  
  if (options.waitFor) {
    captureUrl += `&waitFor=${options.waitFor}`;
  }
  
  // Always include a reasonable delay as fallback
  const safeDelay = options.delay || 2;
  captureUrl += `&delay=${safeDelay}`;
  
  return captureUrl;
}
```

## Troubleshooting

### Recording Starts Too Early
- Increase delay time
- Use waitFor with specific selector
- Check for dynamic content loading

### Element Not Found
- Verify selector in browser DevTools
- Check if element is in iframe
- Ensure element isn't removed after appearing

### Partial Content Recorded
- Use fullPage=true for complete content
- Increase duration for long content
- Ensure selector targets the right element

### Poor Animation Quality
- Ensure adequate delay before recording
- Wait for animations to settle
- Check for conflicting CSS transitions

## See Also

- [Animation Settings](animated-animation-settings.md) - Configure output format and quality
- [Animated Viewport](animated-viewport.md) - Set recording dimensions
- [Animated Page Interaction](animated-page-interaction.md) - Modify page before recording