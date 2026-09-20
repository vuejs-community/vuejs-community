import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mdscript/vite-plugin',
  description: 'Vite plugin for importing MDS templates as ES modules',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'mds',
    'vite',
    'vite-plugin',
    'markdown',
    'template',
    'llm',
    'prompt',
  ],
  links: {
    github: 'https://github.com/dean0x/mdscript',
    npm: 'https://www.npmjs.com/package/@mdscript/vite-plugin',
    website: 'https://github.com/dean0x/mdscript#readme',
  },
  source: {
    github: 'dean0x/mdscript',
    npm: '@mdscript/vite-plugin',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 86,
      weekly: 71,
    },
  },
})
