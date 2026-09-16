import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@coasys/rollup-plugin-holochain',
  description: 'Rollup-plugin to load Holochain DNA or hApp bundle files as modules returning a string with base64 encoded binary data.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'dna',
    'holochain',
    'ad4m',
  ],
  source: {
    github: 'coasys/rollup-plugin-dna',
    npm: '@coasys/rollup-plugin-holochain',
  },
  links: {
    github: 'https://github.com/coasys/rollup-plugin-dna',
    npm: 'https://www.npmjs.com/package/@coasys/rollup-plugin-holochain',
    website: 'https://github.com/coasys/rollup-plugin-dna#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 108,
      weekly: 16,
    },
  },
})
