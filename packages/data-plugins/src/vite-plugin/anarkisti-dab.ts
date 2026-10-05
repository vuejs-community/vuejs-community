import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@anarkisti/dab',
  description: 'dab on a folder of character-grid sprites: a Vite plugin serving the pixel editor and the folder to it, and an MCP server for drawing with a model.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'pixel-art',
    'sprite',
    'sprite-editor',
    'vite-plugin',
    'mcp',
    'model-context-protocol',
  ],
  links: {
    github: 'https://github.com/eetu/dab',
    npm: 'https://www.npmjs.com/package/@anarkisti/dab',
    website: 'https://github.com/eetu/dab#readme',
  },
  source: {
    github: 'eetu/dab',
    npm: '@anarkisti/dab',
  },
})
