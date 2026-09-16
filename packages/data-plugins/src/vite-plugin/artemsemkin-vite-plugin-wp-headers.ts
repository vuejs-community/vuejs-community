import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@artemsemkin/vite-plugin-wp-headers',
  description: 'Vite plugin for automatic WordPress header generation during build and dev',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'wordpress',
    'wp-headers',
  ],
  source: {
    github: 'artkrsk/vite-plugin-wp-headers',
    npm: '@artemsemkin/vite-plugin-wp-headers',
  },
  links: {
    github: 'https://github.com/artkrsk/vite-plugin-wp-headers',
    npm: 'https://www.npmjs.com/package/@artemsemkin/vite-plugin-wp-headers',
    website: 'https://github.com/artkrsk/vite-plugin-wp-headers#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 66,
      weekly: 9,
    },
  },
})
