import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-sri',
  description: 'Add subresource integrity tags to all your html files 🔒',
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
  links: {
    github: 'https://github.com/JonasKruckenberg/rollup-plugin-sri',
    npm: 'https://www.npmjs.com/package/rollup-plugin-sri',
  },
  stats: {
    downloads: {
      monthly: 10425,
      weekly: 3370,
    },
  },
})
