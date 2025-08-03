---
id: screenshot-page-enhancements
title: Page Enhancements
---

Enhance and modify web pages before capturing screenshots. These options help you capture cleaner, more consistent screenshots by removing distractions and applying visual modifications.

## Enhancement Options

### Dark Mode (`darkMode`)
- **Default**: `false`
- **Description**: Automatically applies dark mode styling to the page
- **Example**: `darkMode=true`
- **How it works**: Injects CSS to invert colors and adjust brightness

### Block Cookie Banners (`blockCookieBanners`)
- **Default**: `false`
- **Description**: Automatically dismisses cookie consent popups
- **Example**: `blockCookieBanners=true`
- **Coverage**: Works with most popular cookie consent solutions

### Block Ads (`blockAds`)
- **Default**: `false`
- **Description**: Removes advertisements before screenshot
- **Example**: `blockAds=true`
- **Powered by**: uBlock Origin extension

### Bypass Bot Detection (`bypassBotDetection`)
- **Default**: `false`
- **Description**: Attempts to bypass anti-bot systems and CAPTCHAs
- **Example**: `bypassBotDetection=true`
- **Note**: Uses advanced browser fingerprinting techniques

## Usage Examples

### Clean Content Screenshot
Remove all distractions:
```
https://cdn.capture.page/KEY/HASH/image?url=https://news-site.com&blockAds=true&blockCookieBanners=true
```

### Dark Mode Screenshot
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&darkMode=true
```

### Access Protected Content
```
https://cdn.capture.page/KEY/HASH/image?url=https://protected-site.com&bypassBotDetection=true
```

### All Enhancements Combined
```
https://cdn.capture.page/KEY/HASH/image?url=https://example.com&darkMode=true&blockAds=true&blockCookieBanners=true
```

## Dark Mode Details

### How It Works
The dark mode feature applies intelligent color inversion:
1. Inverts light backgrounds to dark
2. Adjusts text colors for readability
3. Preserves images and videos
4. Maintains brand colors where possible

### Best Use Cases
- Creating dark theme previews
- Generating night-mode documentation
- Consistent screenshot styling
- Accessibility testing

### Limitations
- May not work perfectly with all sites
- Sites with existing dark themes might double-invert
- Some custom CSS might override the effect

### Tips for Better Results
```
// Wait for dark mode to fully apply
&darkMode=true&delay=1

// Combine with specific selectors
&darkMode=true&selector=.main-content

// Some sites need body class detection
&darkMode=true&waitFor=body.dark-mode
```

## Cookie Banner Blocking

### Supported Providers
- CookieBot
- OneTrust
- TrustArc
- Quantcast Choice
- Cookie Notice
- GDPR Cookie Consent
- And many more...

### How It Works
1. Detects common cookie banner patterns
2. Automatically clicks accept/dismiss buttons
3. Hides banners that can't be dismissed
4. Removes overlay elements

### Best Practices
```
// Allow time for banner to appear and be dismissed
&blockCookieBanners=true&delay=2

// Combine with element waiting
&blockCookieBanners=true&waitFor=.content-loaded
```

### When It Might Not Work
- Custom-built consent systems
- Banners requiring scrolling
- Multi-step consent flows
- Region-specific implementations

## Ad Blocking

### What Gets Blocked
- Display advertisements
- Video ad overlays
- Popup advertisements
- Tracking pixels
- Social media widgets (optionally)
- Newsletter popups

### Powered by uBlock Origin
Uses the same filtering engine as the popular browser extension:
- EasyList filters
- EasyPrivacy filters
- Peter Lowe's Ad server list
- Online malicious URL blocklist

### Performance Benefits
- Faster page load times
- Reduced bandwidth usage
- Cleaner screenshots
- Less JavaScript execution

### Use Cases
```
// News article without ads
&url=https://news-site.com/article&blockAds=true

// Product page focused on content
&url=https://shopping-site.com/product&blockAds=true&selector=.product-details
```

## Bot Detection Bypass

### Supported Systems
- Cloudflare challenges
- ReCAPTCHA (limited)
- Basic bot detection scripts
- Fingerprinting protection

### Technical Approach
- Realistic browser fingerprints
- Human-like behavior simulation
- Proper browser headers
- Cookie handling

### Important Notes
- Not 100% guaranteed
- Respects robots.txt
- Should be used responsibly
- May increase processing time

### When to Use
```
// Sites with Cloudflare protection
&url=https://protected-site.com&bypassBotDetection=true

// Sites checking for automation
&url=https://anti-bot-site.com&bypassBotDetection=true&delay=3
```

## Combining Enhancements

### News Site Screenshot
Clean article capture:
```
&blockAds=true&blockCookieBanners=true&selector=article
```

### E-commerce Product Page
```
&blockAds=true&blockCookieBanners=true&waitFor=.product-image
```

### Documentation Site
```
&darkMode=true&blockCookieBanners=true&selector=.docs-content
```

### Social Media
```
&blockAds=true&bypassBotDetection=true&waitFor=.feed-loaded
```

## Performance Considerations

### Processing Time
Each enhancement adds processing time:
- Dark Mode: +0.5-1s
- Cookie Banners: +1-2s
- Ad Blocking: +0.5-1s
- Bot Bypass: +2-5s

### Resource Usage
- Ad blocking reduces bandwidth
- Bot bypass increases CPU usage
- Dark mode has minimal impact
- Cookie blocking may trigger reflows

### Optimization Tips
1. Only enable needed enhancements
2. Combine with appropriate delays
3. Use specific selectors when possible
4. Monitor timeout occurrences

## Troubleshooting

### Dark Mode Issues
- **Double inversion**: Site already has dark mode
- **Broken layouts**: Complex CSS interactions
- **Missing elements**: JavaScript-dependent styles

### Cookie Banner Problems
- **Banner reappears**: Session-based consent
- **Partial blocking**: Multi-layer popups
- **Site breaks**: Consent required for function

### Ad Blocking Conflicts
- **Missing content**: Overly aggressive filtering
- **Layout shifts**: Ad placeholder removal
- **False positives**: Content misidentified as ads

### Bot Detection Failures
- **Still blocked**: Advanced protection
- **CAPTCHAs appear**: Manual intervention required
- **Rate limiting**: Too many requests

## Best Practices

### 1. Test Enhancement Combinations
Different sites respond differently:
```
// Start simple
&blockAds=true

// Add enhancements gradually
&blockAds=true&blockCookieBanners=true

// Full enhancement suite
&blockAds=true&blockCookieBanners=true&darkMode=true
```

### 2. Allow Processing Time
Enhancements need time to apply:
```
// Quick enhancements
&blockAds=true&delay=1

// Complex scenarios
&blockAds=true&blockCookieBanners=true&bypassBotDetection=true&delay=3
```

### 3. Monitor Results
- Check for visual artifacts
- Verify content completeness
- Ensure consistent results
- Track processing times

## See Also

- [Timing & Waiting](screenshot-timing.md) - Allow time for enhancements
- [Viewport Configuration](screenshot-viewport.md) - Different viewports may show different ads
- [Device Emulation](screenshot-device-emulation.md) - Mobile devices may have different protections