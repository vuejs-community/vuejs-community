import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'joshdevvite-plugin',
  description: 'Vite plugin for PHP MVC frameworks with hot reload and asset management created by JoshDev.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'php',
    'mvc',
    'hot-reload',
    'hmr',
    'asset-management',
  ],
  links: {
    github: 'https://github.com/joshdevkit/vite-plugin-joshdevfr',
    npm: 'https://www.npmjs.com/package/joshdevvite-plugin',
    website: 'https://github.com/joshdevkit/vite-plugin-joshdevfr#readme',
  },
  source: {
    github: 'joshdevkit/vite-plugin-joshdevfr',
    npm: 'joshdevvite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
