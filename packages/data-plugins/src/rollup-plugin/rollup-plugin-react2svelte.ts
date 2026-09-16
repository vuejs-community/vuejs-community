import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-react2svelte',
  description: 'Transpile React to Svelte',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'React',
    'Svelte',
  ],
  source: {
    npm: 'rollup-plugin-react2svelte',
  },
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-react2svelte',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
