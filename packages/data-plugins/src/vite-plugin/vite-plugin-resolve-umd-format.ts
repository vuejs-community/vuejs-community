import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-resolve-umd-format',
  description: 'Vite plugin that use \'.js\' extension for the UMD format',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'umd',
  ],
  links: {
    github: 'https://github.com/bent10/vite-plugins',
    npm: 'https://www.npmjs.com/package/vite-plugin-resolve-umd-format',
    website: 'https://github.com/bent10/vite-plugins/tree/main/packages/plugin-resolve-umd-format',
  },
  source: {
    github: 'bent10/vite-plugins',
    npm: 'vite-plugin-resolve-umd-format',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2442,
      weekly: 387,
    },
  },
})
