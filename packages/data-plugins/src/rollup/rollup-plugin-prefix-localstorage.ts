import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-prefix-localstorage',
  description: 'Add a custom prefix to the `setItem`, `getItem`, and `removeItem` methods of `localStorage` to avoid naming collisions.',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
    'prefix-localstorage',
  ],
  types: [
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/vhxubo/rollup-plugin-prefix-localstorage',
    npm: 'https://www.npmjs.com/package/rollup-plugin-prefix-localstorage',
  },
  stats: {
    downloads: {
      monthly: 22,
      weekly: 5,
    },
  },
})
