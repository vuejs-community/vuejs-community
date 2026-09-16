import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-resolve',
  description: 'A vite plugin deals with require.resolve() assets, for node-browser mixed-context environment like nw.js etc',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'require-resolve',
    'require.resolve',
  ],
  source: {
    github: 'keenghost/vite-plugin-require-resolve',
    npm: 'vite-plugin-require-resolve',
  },
  links: {
    github: 'https://github.com/keenghost/vite-plugin-require-resolve',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-resolve',
    website: 'https://github.com/keenghost/vite-plugin-require-resolve#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 27,
      weekly: 8,
    },
  },
})
