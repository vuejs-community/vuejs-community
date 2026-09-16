import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rebundle',
  description: 'Vite plugin that forces single-file output per entry. Ensures each entry point is bundled into a standalone file without code-splitting.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'eposlabs/epos',
    npm: 'vite-plugin-rebundle',
  },
  links: {
    github: 'https://github.com/eposlabs/epos',
    npm: 'https://www.npmjs.com/package/vite-plugin-rebundle',
    website: 'https://github.com/eposlabs/epos/tree/main/packages/vite-plugin-rebundle',
  },
  stats: {
    stars: 3,
    downloads: {
      monthly: 179,
      weekly: 3,
    },
  },
})
