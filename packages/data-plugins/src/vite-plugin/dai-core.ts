import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'dai-core',
  description: 'Compile a web app into a single air-gapped .dai.html file that holds its own SQLite database, runs from a double-click with nothing installed, and is tamper-evident. Command line, MCP server and Vite plugin.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dai',
    'container',
    'offline',
    'air-gapped',
    'single-file',
    'sqlite',
    'wasm',
    'cli',
    'mcp',
    'vite-plugin',
    'portable',
    'tamper-evident',
  ],
  source: {
    github: 'dynamicapplicationinterface/dai-core',
    npm: 'dai-core',
  },
  links: {
    github: 'https://github.com/dynamicapplicationinterface/dai-core',
    npm: 'https://www.npmjs.com/package/dai-core',
    website: 'https://github.com/dynamicapplicationinterface/dai-core#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 15,
    },
  },
})
