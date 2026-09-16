import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sri',
  description: 'Add subresource integrity tags to all your html files 🔒',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'subresource',
    'subresource-integrity',
    'security',
  ],
  source: {
    github: 'JonasKruckenberg/rollup-plugin-sri',
    npm: 'rollup-plugin-sri',
  },
  links: {
    github: 'https://github.com/JonasKruckenberg/rollup-plugin-sri',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sri',
    website: 'https://github.com/JonasKruckenberg/rollup-plugin-sri',
  },
  stats: {
    stars: 26,
    downloads: {
      monthly: 9063,
      weekly: 1299,
    },
  },
})
