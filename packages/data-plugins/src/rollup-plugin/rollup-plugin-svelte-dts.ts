import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-svelte-dts',
  description: 'Create definition files from svelte JavaScript files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'svelte',
    'rollup-plugin',
    'typescript',
    'definition',
  ],
  source: {
    npm: 'rollup-plugin-svelte-dts',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-svelte-dts',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 27,
      weekly: 5,
    },
  },
})
