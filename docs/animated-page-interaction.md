---
id: animated-page-interaction
title: Page Interaction Options
---

Modify and enhance web pages before recording animated screenshots. These options help create cleaner, more professional animations by removing distractions and applying visual enhancements.

## Page Enhancement Options

### Dark Mode (`darkMode`)

- **Default**: `false`
- **Description**: Apply dark mode styling to the page
- **Example**: `darkMode=true`

### Block Cookie Banners (`blockCookieBanners`)

- **Default**: `false`
- **Description**: Automatically dismiss cookie consent popups
- **Example**: `blockCookieBanners=true`

### Block Advertisements (`blockAds`)

- **Default**: `false`
- **Description**: Remove ads before recording
- **Example**: `blockAds=true`

## Usage Examples

### Clean Professional Recording

```
https://cdn.capture.page/KEY/HASH/animated?url=https://news-site.com&blockAds=true&blockCookieBanners=true&duration=10
```

### Dark Mode Animation

```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&darkMode=true&duration=8
```

### Maximum Enhancement

```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&darkMode=true&blockAds=true&blockCookieBanners=true&duration=15
```

## Dark Mode

### How It Works

- Inverts colors (light backgrounds become dark)
- Adjusts text for readability
- Preserves images and logos
- Smooth transitions to dark theme

### Best For

- Documentation sites
- Code editors
- Admin dashboards
- Blogs and portfolios

## Advertisement Blocking

### What Gets Blocked

- Display ads (banners, sidebars)
- Video ads
- Pop-up ads
- Tracking scripts

### Benefits

- Cleaner visuals
- Faster loading
- Professional appearance
- Focus on content

## Cookie Banner Blocking

### Supported Types

- GDPR compliance banners
- CCPA compliance notices
- Popular providers (OneTrust, CookieBot, Quantcast Choice)
- Custom implementations

### How It Works

1. Detects common banner patterns
2. Auto-clicks accept/dismiss buttons
3. Hides banners that can't be dismissed
4. Removes background overlays

## Combining Enhancements

```
// Maximum clean setup
&darkMode=true&blockAds=true&blockCookieBanners=true&duration=12

// News site clean
&blockAds=true&blockCookieBanners=true&duration=8

// Documentation with dark mode
&darkMode=true&blockCookieBanners=true&fullPage=true&duration=20
```

## Performance Considerations

Each enhancement adds processing time:

- **Dark Mode**: +1-2 seconds
- **Cookie Banners**: +2-3 seconds
- **Ad Blocking**: +1-2 seconds

## Best Practices

1. **Choose by Purpose**: Marketing videos need `blockAds` and `blockCookieBanners`. Developer docs benefit from `darkMode`.

2. **Test Combinations**: Try different enhancement combinations to find what works best for your content.

3. **Consider Audience**: Professional/corporate audiences expect clean, ad-free content.

## Troubleshooting

### Dark Mode Issues

- Site already has dark mode (double inversion)
- Complex CSS interactions
- Some images may not display correctly

### Cookie Banner Problems

- Banner reappears (session-based consent)
- Some sites require consent acceptance
- Multiple consent layers

### Ad Blocking Conflicts

- Legitimate content blocked
- Layout shifts when ad spaces removed

### Bot Detection Failures

- Advanced protection systems may still block
- May require longer processing time

## See Also

- [Animated Capture Behavior](animated-capture-behavior.md) - Timing and content selection
- [Animated Viewport](animated-viewport.md) - Device and screen configuration
- [Screenshot Page Enhancements](screenshot-page-enhancements.md) - Similar options for static screenshots
