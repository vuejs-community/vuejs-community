import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@salesforce/vite-plugin-lwc-ui-bundle',
  description: 'Vite plugin for compiling LWC components into static bundles for off-platform and MCP use',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'lwc',
    'lightning-web-components',
    'salesforce',
    'mcp',
    'agentic',
    'off-platform',
    'compiler',
  ],
  links: {
    github: 'https://github.com/salesforce-experience-platform-emu/webapps',
    npm: 'https://www.npmjs.com/package/@salesforce/vite-plugin-lwc-ui-bundle',
    website: 'https://github.com/salesforce-experience-platform-emu/webapps#readme',
  },
  source: {
    github: 'salesforce-experience-platform-emu/webapps',
    npm: '@salesforce/vite-plugin-lwc-ui-bundle',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12922,
      weekly: 1699,
    },
  },
})
