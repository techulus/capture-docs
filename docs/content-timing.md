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
- **Example**: `delay=3` waits 3 seconds before capture

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
Wait for page to settle:
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

#### React Applications
```
// Wait for React app to mount
&waitFor=.react-app-loaded

// Wait for specific component
&waitFor=[data-testid="main-content"]

// Wait for router to settle
&waitFor=.route-loaded
```

#### Vue.js Applications
```
// Wait for Vue app initialization
&waitFor=#app.vue-mounted

// Wait for component hydration
&waitFor=.vue-component[data-loaded]

// Wait for Vuex state populated
&waitFor=[data-store-ready="true"]
```

#### Angular Applications
```
// Wait for Angular bootstrap
&waitFor=app-root>*

// Wait for component initialization
&waitFor=.ng-star-inserted

// Wait for HTTP requests complete
&waitFor=[data-loading="false"]
```

### API-Driven Content

#### REST API Loading
```
// Wait for data to load
&waitFor=.data-loaded

// Wait for specific API response
&waitFor=.api-content:not(.loading)

// Wait for error states to clear
&waitFor=body:not(.api-error)
```

#### GraphQL Content
```
// Wait for GraphQL query completion
&waitFor=[data-apollo-loading="false"]

// Wait for specific data
&waitFor=.graphql-data-ready

// Wait for subscription updates
&waitFor=.subscription-active
```

### Content Management Systems

#### WordPress
```
// Wait for dynamic widgets
&waitFor=.widget-loaded

// Wait for AJAX content
&waitFor=.ajax-content

// Wait for lazy-loaded posts
&waitFor=.post-list-complete
```

#### Drupal
```
// Wait for views to load
&waitFor=.view-loaded

// Wait for dynamic blocks
&waitFor=.block-content
```

### E-commerce Platforms

#### Shopify
```
// Wait for product data
&waitFor=.product-details-loaded

// Wait for cart to initialize
&waitFor=.cart-ready

// Wait for recommendations
&waitFor=.product-recommendations
```

#### WooCommerce
```
// Wait for product gallery
&waitFor=.woocommerce-product-gallery

// Wait for variation data
&waitFor=.variation-data-loaded
```

## Advanced Waiting Strategies

### Multiple Conditions

```javascript
// Wait for multiple elements (server-side logic)
const conditions = [
  '.header-loaded',
  '.content-ready', 
  '.footer-initialized'
];

// Use the last loading element
&waitFor=.footer-initialized
```

### Content-Specific Waiting

#### Text Content
```
// Wait for specific text to appear
&waitFor=h1:contains("Welcome")

// Wait for non-empty content
&waitFor=.article-body:not(:empty)

// Wait for minimum content length
&waitFor=.content[data-min-length="true"]
```

#### Media Content
```
// Wait for images to load
&waitFor=.image-gallery.loaded

// Wait for videos to initialize
&waitFor=.video-player.ready

// Wait for iframes to load
&waitFor=.embedded-content.loaded
```

#### Form Content
```
// Wait for form initialization
&waitFor=.form-ready

// Wait for validation setup
&waitFor=.form-validated

// Wait for dynamic fields
&waitFor=.conditional-fields-loaded
```

### Performance Optimization

#### Minimize Wait Times
```javascript
// Use most specific indicator
// ✅ Good
&waitFor=.main-content.fully-loaded

// ❌ Avoid waiting for slow elements
&waitFor=.slow-loading-widget
```

#### Progressive Enhancement
```javascript
// Wait for core content first
&waitFor=.core-content

// Don't wait for optional enhancements
// .social-widgets, .ads, .analytics
```

## Best Practices

### 1. Choose Optimal Selectors

```
// Specific and reliable
&waitFor=.article-content[data-loaded="true"]

// Avoid generic selectors
&waitFor=div  // Too generic

// Use semantic indicators
&waitFor=main.content-ready
```

### 2. Combine Strategies

```
// Initial delay + element wait
&delay=1&waitFor=.app-initialized

// Multiple element strategy
&waitFor=.critical-content.loaded
```

### 3. Handle Different Content Types

```javascript
// Dynamic content strategy
function getWaitStrategy(contentType) {
  switch(contentType) {
    case 'spa':
      return '&waitFor=.app-ready&delay=2';
    case 'cms':
      return '&waitFor=.content-loaded&delay=1';
    case 'ecommerce':
      return '&waitFor=.product-data&delay=3';
    default:
      return '&delay=2';
  }
}
```

## Debugging Wait Conditions

### Element Not Found

If `waitFor` times out:

1. **Verify selector in browser DevTools**
   ```javascript
   // Test in browser console
   document.querySelector('.your-selector')
   ```

2. **Check element timing**
   ```javascript
   // Monitor element appearance
   const observer = new MutationObserver(() => {
     if (document.querySelector('.target-element')) {
       console.log('Element appeared at:', Date.now());
     }
   });
   ```

3. **Element lifecycle issues**
   - Element appears then disappears
   - Element is in iframe
   - Element requires interaction

### Fallback Strategies

```javascript
// Implement graceful degradation
function buildContentUrl(baseUrl, options) {
  let url = baseUrl;
  
  // Try specific wait condition first
  if (options.waitFor) {
    url += `&waitFor=${options.waitFor}`;
  } else if (options.delay) {
    // Fallback to delay
    url += `&delay=${options.delay}`;
  } else {
    // Default delay
    url += '&delay=2';
  }
  
  return url;
}
```

## Content Extraction Patterns

### Structured Content

```
// News articles
&waitFor=article.post-content

// Blog posts  
&waitFor=.entry-content.loaded

// Documentation
&waitFor=.docs-content[data-ready]
```

### Dynamic Lists

```
// Infinite scroll completion
&waitFor=.list-complete

// Paginated content
&waitFor=.pagination-ready

// Search results
&waitFor=.search-results.loaded
```

### User-Generated Content

```
// Comments loaded
&waitFor=.comments-section.loaded

// Reviews displayed
&waitFor=.reviews-list.complete

// Social media feeds
&waitFor=.social-feed.ready
```

## Specific Platform Guidance

### WordPress/CMS
```
// General WordPress
&delay=2&waitFor=.site-content

// Gutenberg blocks
&waitFor=.wp-block-group.loaded

// Custom themes
&waitFor=.theme-content-ready
```

### E-commerce
```
// Product pages
&waitFor=.product-info.loaded&delay=3

// Category pages
&waitFor=.product-grid.complete

// Checkout process
&waitFor=.checkout-form.initialized
```

### Documentation Sites
```
// GitBook
&waitFor=.markdown-section

// Notion
&waitFor=.notion-page-content

// Confluence  
&waitFor=.wiki-content
```

## Troubleshooting Common Issues

### Content Partially Loaded

```
// Increase delay for slow APIs
&delay=5&waitFor=.api-content

// Wait for specific data attributes
&waitFor=[data-loaded="complete"]

// Use more specific selectors
&waitFor=.main-content.fully-rendered
```

### JavaScript Errors

```
// Wait after error recovery
&delay=3&waitFor=.error-recovered

// Skip problematic elements
&waitFor=.essential-content
```

### Network Dependencies

```
// Wait for external resources
&delay=4&waitFor=.external-content

// Handle CDN delays
&delay=3&waitFor=.cdn-assets-loaded
```

## See Also

- [Content Authentication](content-authentication.md) - Access protected content
- [Screenshot Timing](screenshot-timing.md) - Similar timing options for screenshots
- [PDF Timing](pdf-timing.md) - Timing considerations for PDF generation