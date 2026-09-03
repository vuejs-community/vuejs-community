import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mdscript/vite-plugin',
  description: 'Vite plugin for importing MDS templates as ES modules',
  version: '0.4.1',
  category: 'plugin',
  tags: [
    'mds',
    'vite',
    'vite-plugin',
    'markdown',
    'template',
    'llm',
    'prompt',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/dean0x/mdscript',
    npm: 'https://www.npmjs.com/package/@mdscript/vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 4,
    },
  },
})
