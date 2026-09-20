import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@artemsemkin/vite-plugin-wp-hmr',
  description: 'Vite plugin that generates a WordPress mu-plugin for HMR dev client injection',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'hmr',
    'hot-module-replacement',
  ],
  links: {
    github: 'https://github.com/artkrsk/vite-plugin-wp-hmr',
    npm: 'https://www.npmjs.com/package/@artemsemkin/vite-plugin-wp-hmr',
    website: 'https://github.com/artkrsk/vite-plugin-wp-hmr#readme',
  },
  source: {
    github: 'artkrsk/vite-plugin-wp-hmr',
    npm: '@artemsemkin/vite-plugin-wp-hmr',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 53,
      weekly: 10,
    },
  },
})
