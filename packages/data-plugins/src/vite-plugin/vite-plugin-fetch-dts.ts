import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-fetch-dts',
  description: 'A vite plugin for obtain the vue component type and module type through remote connection',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin-fetch-dts',
    'vite-plugin',
    'remote',
    'fetch',
    'dts',
  ],
  source: {
    npm: 'vite-plugin-fetch-dts',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-fetch-dts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 78,
      weekly: 8,
    },
  },
})
