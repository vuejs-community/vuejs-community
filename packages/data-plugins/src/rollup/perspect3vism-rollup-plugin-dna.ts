import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@perspect3vism/rollup-plugin-dna',
  description: 'Rollup-plugin to load Holochain DNA files as modules returning a string with base64 encoded binary data.',
  version: '0.0.2',
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
    github: 'https://github.com/perspect3vism/rollup-plugin-dna',
    npm: 'https://www.npmjs.com/package/@perspect3vism/rollup-plugin-dna',
  },
  stats: {
    downloads: {
      monthly: 146,
      weekly: 47,
    },
  },
})
