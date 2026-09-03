import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@coasys/rollup-plugin-holochain',
  description: 'Rollup-plugin to load Holochain DNA or hApp bundle files as modules returning a string with base64 encoded binary data.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'dna',
    'holochain',
    'ad4m',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/coasys/rollup-plugin-dna',
    npm: 'https://www.npmjs.com/package/@coasys/rollup-plugin-holochain',
  },
  stats: {
    downloads: {
      monthly: 110,
      weekly: 24,
    },
  },
})
