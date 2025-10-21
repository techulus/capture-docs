---
id: content-timing
title: Content Timing & Waiting
---

Control when the HTML content is captured by implementing delays and waiting strategies. These options ensure dynamic content is fully loaded before extraction.

## Timing Parameters

### Delay (`delay`)
- **Default**: `0` seconds
- **Description**: Fixed delay before capturing page content
- **Range**: 0-60 seconds
- **Example**: `delay=3`

### Wait for CSS Selector (`waitFor`)
- **Default**: None
- **Description**: Waits for an element matching the CSS selector to appear
- **Timeout**: 30 seconds maximum
- **Example**: `waitFor=.content-loaded`

### Wait for Element ID (`waitForId`)
- **Default**: None
- **Description**: Waits for an element with specific ID to appear
- **Timeout**: 30 seconds maximum
- **Example**: `waitForId=main-content`

## Usage Examples

### Simple Delay
```
https://cdn.capture.page/KEY/HASH/content?url=https://example.com&delay=2
```

### Wait for Dynamic Content
```
https://cdn.capture.page/KEY/HASH/content?url=https://spa-app.com&waitFor=.app-ready
```

### Wait for Element by ID
```
https://cdn.capture.page/KEY/HASH/content?url=https://example.com&waitForId=article-content
```

## Common Scenarios

### Single Page Applications (SPAs)
```
// Wait for app to mount
&waitFor=.app-loaded

// Wait for specific component
&waitFor=[data-testid="main-content"]

// Wait for router to settle
&waitFor=.route-loaded
```

### API-Driven Content
```
// Wait for data to load
&waitFor=.data-loaded

// Wait for API response
&waitFor=.api-content:not(.loading)

// Wait for specific data attribute
&waitFor=[data-loaded="true"]
```

### E-commerce Sites
```
// Wait for product data
&waitFor=.product-details-loaded

// Wait for cart initialization
&waitFor=.cart-ready
```

### Content Management Systems
```
// Wait for dynamic widgets
&waitFor=.widget-loaded

// Wait for AJAX content
&waitFor=.ajax-content
```

## Combining Timing Parameters

### Multiple Strategies
```
// Delay + waitFor for extra reliability
&delay=2&waitFor=.content-ready

// waitFor with fallback delay
&waitFor=.data-loaded&delay=5
```

## Best Practices

### 1. Choose the Right Strategy
- **Static sites**: No delay needed or minimal delay (1-2s)
- **Dynamic sites**: Use `waitFor` for specific elements
- **Slow APIs**: Combine `delay` with `waitFor`

### 2. Use Specific Selectors
```
✅ Good: &waitFor=.content[data-loaded="true"]
✅ Good: &waitFor=#main-article
❌ Avoid: &waitFor=div
❌ Avoid: &waitFor=.loading
```

### 3. Set Reasonable Delays
- Keep delays under 10 seconds when possible
- Use `waitFor` instead of long delays
- Test to find minimum required wait time

## Troubleshooting

### Content Not Loading
- Increase delay time
- Use more specific `waitFor` selector
- Check if element appears in browser DevTools

### Timeout Errors
- Verify selector exists and is visible
- Check if element is in an iframe
- Ensure page doesn't have JavaScript errors

### Partial Content
- Element appeared but content still loading
- Use `waitFor` with more specific selector (e.g., `[data-loaded="complete"]`)
- Add small delay after `waitFor`

## See Also

- [Content Authentication](content-authentication.md) - Access protected content
- [Content Options](content-options.md) - Additional content extraction options
