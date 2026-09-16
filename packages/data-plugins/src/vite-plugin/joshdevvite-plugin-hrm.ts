import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'joshdevvite-plugin-hrm',
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
  source: {
    github: 'joshdevkit/vite-plugin-joshdevfr',
    npm: 'joshdevvite-plugin-hrm',
  },
  links: {
    github: 'https://github.com/joshdevkit/vite-plugin-joshdevfr',
    npm: 'https://www.npmjs.com/package/joshdevvite-plugin-hrm',
    website: 'https://github.com/joshdevkit/vite-plugin-joshdevfr#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
