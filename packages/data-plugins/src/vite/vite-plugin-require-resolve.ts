import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-require-resolve',
  description: 'A vite plugin deals with require.resolve() assets, for node-browser mixed-context environment like nw.js etc',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'require-resolve',
    'require.resolve',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/keenghost/vite-plugin-require-resolve',
    npm: 'https://www.npmjs.com/package/vite-plugin-require-resolve',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 12,
    },
  },
})
