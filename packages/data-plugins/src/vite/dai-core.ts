import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'dai-core',
  description: 'Compile a web app into a single air-gapped .dai.html file that holds its own SQLite database, runs from a double-click with nothing installed, and is tamper-evident. Command line, MCP server and Vite plugin.',
  version: '0.1.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dynamicapplicationinterface/dai-core',
    npm: 'https://www.npmjs.com/package/dai-core',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
