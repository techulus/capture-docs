---
id: content-timing
title: Content Timing & Waiting
---

Control when the HTML content is captured by implementing delays and waiting strategies.

## Timing Parameters

### Delay (`delay`)
- **Default**: `0` seconds
- **Range**: 0-60 seconds
- **Example**: `delay=3`

### Wait for CSS Selector (`waitFor`)
- **Default**: None
- **Timeout**: 30 seconds
- **Example**: `waitFor=.content-loaded`

### Wait for Element ID (`waitForId`)
- **Default**: None
- **Timeout**: 30 seconds
- **Example**: `waitForId=main-content`

## Usage Examples

```
// Simple delay
https://cdn.capture.page/KEY/HASH/content?url=https://example.com&delay=2

// Wait for dynamic content (SPAs)
&waitFor=.app-loaded

// Combine for reliability
&delay=2&waitFor=.content-ready
```

## Best Practices

**Choose the Right Strategy:**
- Static sites: No delay or minimal (1-2s)
- Dynamic sites: Use `waitFor` for specific elements
- Slow APIs: Combine `delay` with `waitFor`

**Use Specific Selectors:**
- ✅ `waitFor=.content[data-loaded="true"]`
- ✅ `waitFor=#main-article`
- ❌ `waitFor=div`

**Keep delays reasonable** - under 10 seconds when possible.

## Troubleshooting

**Content Not Loading:** Increase delay or use more specific selector

**Timeout Errors:** Verify selector exists and page has no JavaScript errors

**Partial Content:** Use `waitFor` with specific selector like `[data-loaded="complete"]`

## See Also

- [Content Authentication](content-authentication.md)
- [Content Options](content-options.md)
