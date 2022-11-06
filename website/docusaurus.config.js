module.exports={
  "title": "Capture",
  "tagline": "Screenshot and PDF automation tool",
  "url": "https://capture.techulus.in",
  "baseUrl": "/",
  "organizationName": "techulus",
  "projectName": "capture",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/favicon.ico",
  "customFields": {
    "users": []
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "../website/sidebars.json"
        },
        "blog": {},
        "theme": {
        },
        "googleAnalytics": {
          "trackingID": "UA-4655726-11"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Capture",
      "logo": {
        "src": "img/logo.png"
      },
      "items": [
        {
          "to": "docs/get-started",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "docs/batch-image",
          "label": "API",
          "position": "left"
        },
        {
          "to": "docs/slack-integration",
          "label": "Integrations",
          "position": "left"
        }
      ]
    },
    "image": "https://capture.techulus.in/assets/paper_img/promo.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022 Techulus"
    },
  }
}