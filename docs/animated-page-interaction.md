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
- **Effect**: Automatically inverts colors and adjusts brightness

### Block Cookie Banners (`blockCookieBanners`)
- **Default**: `false`
- **Description**: Automatically dismiss cookie consent popups
- **Example**: `blockCookieBanners=true`
- **Benefit**: Cleaner animations without popup overlays

### Block Advertisements (`blockAds`)
- **Default**: `false`
- **Description**: Remove ads before recording
- **Example**: `blockAds=true`
- **Powered by**: uBlock Origin extension

### Bypass Bot Detection (`bypassBotDetection`)
- **Default**: `false`
- **Description**: Attempt to bypass anti-bot systems
- **Example**: `bypassBotDetection=true`
- **Use case**: Access protected or restricted content

## Usage Examples

### Clean Professional Recording
```
https://cdn.capture.page/KEY/HASH/animated?url=https://news-site.com&blockAds=true&blockCookieBanners=true&duration=10
```

### Dark Mode Animation
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&darkMode=true&duration=8
```

### Access Protected Content
```
https://cdn.capture.page/KEY/HASH/animated?url=https://protected-site.com&bypassBotDetection=true&duration=12
```

### Maximum Enhancement
```
https://cdn.capture.page/KEY/HASH/animated?url=https://example.com&darkMode=true&blockAds=true&blockCookieBanners=true&duration=15
```

## Dark Mode Animation

### How Dark Mode Works
1. **Color Inversion**: Light backgrounds become dark
2. **Text Adjustment**: Ensures readability with proper contrast
3. **Image Preservation**: Photos and logos remain unchanged
4. **Animation Friendly**: Smooth transitions to dark theme

### Dark Mode Use Cases

#### Brand Demonstrations
```
// Show app in dark theme
&darkMode=true&emulateDevice=iphone_15_pro&duration=10

// Desktop dark mode
&darkMode=true&vw=1440&vh=900&duration=12
```

#### Documentation Videos
```
// Code editor dark theme
&darkMode=true&selector=.code-editor&duration=8

// API documentation dark
&darkMode=true&fullPage=true&duration=15
```

#### Accessibility Demos
```
// High contrast demonstration
&darkMode=true&duration=6

// Night mode comparison
&darkMode=true&duration=10
```

### Dark Mode Considerations

```javascript
// Sites that work well with dark mode
const darkModeCompatible = [
  'documentation-sites',
  'blogs',
  'portfolios',
  'admin-dashboards',
  'code-editors'
];

// Sites that may have issues
const darkModeChallenges = [
  'e-commerce-with-product-photos',
  'news-sites-with-images',
  'sites-with-existing-dark-themes'
];
```

## Advertisement Blocking

### What Gets Blocked
- **Display Ads**: Banner, sidebar, and embedded ads
- **Video Ads**: Pre-roll and overlay video advertisements
- **Pop-up Ads**: Intrusive popup advertisements
- **Tracking Scripts**: Analytics and tracking pixels
- **Social Widgets**: Facebook, Twitter embed widgets (optional)

### Benefits for Animation
- **Cleaner Visuals**: No distracting advertisements
- **Faster Loading**: Reduced network requests
- **Consistent Layout**: Stable page structure
- **Professional Appearance**: Focus on content

### Ad Blocking Examples

#### News Site Animation
```
// Clean news article
&blockAds=true&selector=article&duration=8

// Full news page without ads
&blockAds=true&fullPage=true&duration=20
```

#### Blog Content
```
// Blog post focus
&blockAds=true&selector=.post-content&duration=10

// Blog homepage clean
&blockAds=true&vw=1440&vh=900&duration=12
```

#### E-commerce Clean
```
// Product page without ads
&blockAds=true&selector=.product-details&duration=8

// Category page clean
&blockAds=true&blockCookieBanners=true&duration=15
```

## Cookie Banner Blocking

### Supported Banner Types
- **GDPR Compliance**: European cookie law banners
- **CCPA Compliance**: California privacy act notices
- **Popular Providers**: OneTrust, CookieBot, Quantcast Choice
- **Custom Banners**: Many custom implementations

### How It Works
1. **Pattern Detection**: Identifies common banner patterns
2. **Auto-Dismiss**: Clicks accept/dismiss buttons automatically
3. **Element Hiding**: Hides banners that can't be dismissed
4. **Overlay Removal**: Removes background overlays

### Cookie Banner Examples

#### Landing Page Recording
```
// Clean landing page
&blockCookieBanners=true&selector=.hero-section&duration=8

// Full landing page tour
&blockCookieBanners=true&fullPage=true&duration=15
```

#### E-commerce Demo
```
// Shopping experience
&blockCookieBanners=true&blockAds=true&emulateDevice=iphone_15_pro&duration=12

// Product browsing
&blockCookieBanners=true&selector=.product-grid&duration=10
```

## Bot Detection Bypass

### Supported Systems
- **Cloudflare**: Basic challenges and bot detection
- **Basic CAPTCHAs**: Simple verification systems
- **Rate Limiting**: Bypass basic rate limiting
- **User Agent Checks**: Advanced browser fingerprinting

### When to Use
```javascript
// Sites with protection
const protectedSites = [
  'corporate-websites',
  'e-commerce-with-bot-protection', 
  'news-sites-with-paywalls',
  'saas-platforms',
  'financial-sites'
];

// Enhanced protection needed
&bypassBotDetection=true&delay=5&format=mp4
```

### Bot Bypass Examples

#### Corporate Sites
```
// Company website demo
&bypassBotDetection=true&blockCookieBanners=true&duration=10

// Product demo site
&bypassBotDetection=true&selector=.product-demo&duration=12
```

#### SaaS Platforms
```
// Platform overview
&bypassBotDetection=true&delay=3&duration=15

// Feature demonstration
&bypassBotDetection=true&selector=.features-section&duration=10
```

## Combining Enhancements

### Professional Demo Setup
```
// Maximum clean setup
&darkMode=true&blockAds=true&blockCookieBanners=true&bypassBotDetection=true&duration=12

// News site clean recording
&blockAds=true&blockCookieBanners=true&selector=article&duration=8

// E-commerce clean demo
&blockAds=true&blockCookieBanners=true&emulateDevice=iphone_15_pro&duration=10
```

### Content-Specific Combinations

#### Documentation Sites
```
// Clean docs with dark mode
&darkMode=true&blockCookieBanners=true&fullPage=true&duration=20

// API docs clean
&blockAds=true&blockCookieBanners=true&selector=.api-docs&duration=15
```

#### Portfolio Sites
```
// Clean portfolio showcase
&blockAds=true&blockCookieBanners=true&fullPage=true&duration=18

// Dark mode portfolio
&darkMode=true&blockCookieBanners=true&duration=12
```

#### Product Demos
```
// SaaS product clean demo
&blockAds=true&blockCookieBanners=true&bypassBotDetection=true&duration=15

// Mobile app landing
&blockAds=true&blockCookieBanners=true&emulateDevice=iphone_15_pro&duration=10
```

## Performance Considerations

### Processing Time Impact
Each enhancement adds processing time:
- **Dark Mode**: +1-2 seconds
- **Cookie Banners**: +2-3 seconds  
- **Ad Blocking**: +1-2 seconds
- **Bot Bypass**: +3-5 seconds

### Optimization Strategies

```javascript
const fastConfig = {
  blockCookieBanners: true,
  duration: 8
};

const qualityConfig = {
  darkMode: true,
  blockAds: true,
  blockCookieBanners: true,
  bypassBotDetection: true,
  duration: 15
};

const balancedConfig = {
  blockAds: true,
  blockCookieBanners: true,
  duration: 10
};
```

## Best Practices

### 1. Choose Enhancements by Purpose

```
// Marketing videos
&blockAds=true&blockCookieBanners=true

// Developer documentation
&darkMode=true&blockCookieBanners=true

// Product demos
&blockAds=true&blockCookieBanners=true&bypassBotDetection=true
```

### 2. Test Enhancement Combinations

```javascript
// A/B test different combinations
const testConfigs = [
  { blockAds: true },
  { blockAds: true, blockCookieBanners: true },
  { darkMode: true, blockCookieBanners: true }
];
```

### 3. Consider Target Audience

```
// Professional/Corporate
&blockAds=true&blockCookieBanners=true&bypassBotDetection=true

// Creative/Design
&darkMode=true&blockCookieBanners=true

// Technical/Developer
&darkMode=true&blockAds=true&blockCookieBanners=true
```

### 4. Monitor Enhancement Success

```javascript
// Track enhancement effectiveness
function trackEnhancements(url, enhancements, success) {
  console.log({
    url: url,
    enhancements: enhancements,
    success: success,
    timestamp: Date.now()
  });
}
```

## Troubleshooting

### Dark Mode Issues
- **Double Inversion**: Site already has dark mode
- **Broken Layouts**: Complex CSS interactions
- **Image Problems**: Some images may not display correctly

### Cookie Banner Problems
- **Banner Reappears**: Session-based consent systems
- **Site Functionality**: Some sites require consent acceptance
- **Multiple Banners**: Sites with multiple consent layers

### Ad Blocking Conflicts
- **Missing Content**: Legitimate content blocked
- **Layout Shifts**: Ad spaces removed causing layout changes
- **False Positives**: Content mistakenly identified as ads

### Bot Detection Failures
- **Still Blocked**: Advanced protection systems
- **Increased Delay**: May require longer processing time
- **Partial Success**: Some elements may still be restricted

## See Also

- [Animated Capture Behavior](animated-capture-behavior.md) - Timing and content selection
- [Animated Viewport](animated-viewport.md) - Device and screen configuration
- [Screenshot Page Enhancements](screenshot-page-enhancements.md) - Similar options for static screenshots