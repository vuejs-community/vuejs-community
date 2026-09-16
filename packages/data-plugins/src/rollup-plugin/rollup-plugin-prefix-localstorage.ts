import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-prefix-localstorage',
  description: 'Add a custom prefix to the `setItem`, `getItem`, and `removeItem` methods of `localStorage` to avoid naming collisions.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'prefix-localstorage',
  ],
  source: {
    github: 'vhxubo/rollup-plugin-prefix-localstorage',
    npm: 'rollup-plugin-prefix-localstorage',
  },
  links: {
    github: 'https://github.com/vhxubo/rollup-plugin-prefix-localstorage',
    npm: 'https://www.npmjs.com/package/rollup-plugin-prefix-localstorage',
    website: 'https://github.com/vhxubo/rollup-plugin-prefix-localstorage#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 3,
    },
  },
})
