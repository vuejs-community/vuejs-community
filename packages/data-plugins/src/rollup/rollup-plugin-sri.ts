import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sri',
  description: 'Add subresource integrity tags to all your html files 🔒',
  icon: 'logos:rollupjs',
  version: '1.3.4',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'subresource',
    'subresource-integrity',
    'security',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'JonasKruckenberg/rollup-plugin-sri',
    npm: 'rollup-plugin-sri',
  },
  links: {
    github: 'https://github.com/JonasKruckenberg/rollup-plugin-sri',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sri',
  },
  stats: {
    downloads: {
      monthly: 9454,
      weekly: 1491,
    },
  },
})
