---
id: mcp-integration
title: MCP (Model Context Protocol)
---

## What is MCP?

The Model Context Protocol (MCP) allows AI tools like Claude Code and Claude Desktop to connect directly to Capture's API, enabling you to capture screenshots, generate PDFs, and extract content from any website directly within your AI conversations.

## Setup

### Step 1: Get Your Bearer Token

Visit the [MCP Integration page](https://capture.page/dashboard/mcp) in your Capture dashboard to get your auto-generated Bearer token. This token authenticates your MCP connection and combines your API key and secret.

### Step 2: Configure Your AI Tool

#### Claude Code (CLI)

Run this command in your terminal to add the Capture MCP server:

```bash
claude mcp add --transport http capture https://capture.page/mcp/http --header "Authorization: Bearer YOUR_TOKEN_HERE"
```

Replace `YOUR_TOKEN_HERE` with the Bearer token from your dashboard.

After running this command, restart your terminal session or start a new conversation.

#### Claude Desktop

Add this configuration to your Claude Desktop config file:

```json
{
  "mcpServers": {
    "capture": {
      "url": "https://capture.page/mcp/http",
      "transport": {
        "type": "http",
        "headers": {
          "Authorization": "Bearer YOUR_TOKEN_HERE"
        }
      }
    }
  }
}
```

Replace `YOUR_TOKEN_HERE` with the Bearer token from your dashboard.

After saving the config file, restart Claude Desktop completely.

## Available Tools

Once configured, you'll have access to these Capture tools directly from your AI assistant:

### capture_screenshot

Capture screenshots of any website with full customization options:

- Full-page screenshots
- Device emulation (iPhone, iPad, etc.)
- Dark mode support
- Block ads and cookie banners
- Custom viewport sizes
- Element selection
- And more

**Example usage:**
```
"Take a screenshot of example.com"
"Capture a full-page screenshot of news.ycombinator.com in dark mode"
```

### capture_pdf

Generate PDFs from any website with custom settings:

- Custom page sizes (A4, Letter, Legal, etc.)
- Margin control
- Landscape/portrait orientation
- Print background graphics
- Custom scaling

**Example usage:**
```
"Generate a PDF of this article"
"Create a PDF of example.com with A4 size"
```

### capture_content

Extract HTML and text content from any website:

- Raw HTML extraction
- Cleaned text content
- Useful for content analysis and web scraping

**Example usage:**
```
"Extract the content from this blog post"
"Get the text from example.com"
```

### capture_metadata

Extract metadata from any website:

- Title and description
- Open Graph tags
- Author and publisher information
- Useful for SEO analysis

**Example usage:**
```
"Extract metadata from apple.com"
"Get the SEO information for this website"
```

## Usage Tips

- Ask your AI assistant naturally - it will know when to use Capture tools
- All standard Capture options are supported through the MCP tools
- Screenshots and PDFs are automatically uploaded to your Capture CDN
- Credits are deducted from your Capture account as normal

## Troubleshooting

### Connection Failed

If you see "Failed to connect" when running `claude mcp list`:

1. Verify your Bearer token is correct
2. Ensure you've restarted your AI tool after configuration
3. Check that you have an active internet connection

### Authentication Errors

If you receive authentication errors:

1. Regenerate your Bearer token from the [MCP Integration page](https://capture.page/dashboard/mcp)
2. Update your configuration with the new token
3. Restart your AI tool

## Learn More

For more details about Capture's features and options:

- [Screenshot Options](/docs/screenshot-options)
- [PDF Options](/docs/pdf-options)
- [Content Options](/docs/content-options)
- [Metadata Options](/docs/metadata-options)
