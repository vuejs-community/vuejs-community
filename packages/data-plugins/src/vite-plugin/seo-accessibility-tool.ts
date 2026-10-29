import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'seo-accessibility-tool',
  description: 'Accessibility and SEO panel for vite dev that gives the issues to your AI agent over MCP: WCAG, ARIA and SEO checks on the page, axe-core when installed, plus a Playwright helper and a CLI for CI',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'accessibility',
    'a11y',
    'wcag',
    'aria',
    'seo',
    'seo-audit',
    'accessibility-testing',
    'devtools',
    'debugger',
    'svelte',
    'vite',
    'vite-plugin',
    'playwright',
    'axe-core',
    'mcp',
    'mcp-server',
    'ai-agent',
    'ci',
  ],
  links: {
    github: 'https://github.com/flgisimone/SAT',
    npm: 'https://www.npmjs.com/package/seo-accessibility-tool',
    website: 'https://github.com/flgisimone/SAT#readme',
  },
  source: {
    github: 'flgisimone/SAT',
    npm: 'seo-accessibility-tool',
  },
})
