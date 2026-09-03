import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rebundle',
  description: 'Vite plugin that forces single-file output per entry. Ensures each entry point is bundled into a standalone file without code-splitting.',
  version: '2.2.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/eposlabs/epos',
    npm: 'https://www.npmjs.com/package/vite-plugin-rebundle',
  },
  stats: {
    downloads: {
      monthly: 455,
      weekly: 22,
    },
  },
})
