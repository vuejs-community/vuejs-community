import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svelte-dts',
  description: 'Create definition files from svelte JavaScript files',
  version: '1.0.7',
  category: 'plugin',
  tags: [
    'svelte',
    'rollup-plugin',
    'typescript',
    'definition',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/rollup-plugin-svelte-dts',
  },
  stats: {
    downloads: {
      monthly: 26,
      weekly: 4,
    },
  },
})
