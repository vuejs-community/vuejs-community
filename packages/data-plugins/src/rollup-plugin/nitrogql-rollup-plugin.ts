import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nitrogql/rollup-plugin',
  description: 'GraphQL + TypeScript toolchain',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'nitrogql',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/uhyo/nitrogql',
    npm: 'https://www.npmjs.com/package/@nitrogql/rollup-plugin',
    website: 'https://github.com/uhyo/nitrogql#readme',
  },
  source: {
    github: 'uhyo/nitrogql',
    npm: '@nitrogql/rollup-plugin',
  },
  stats: {
    stars: 330,
    downloads: {
      monthly: 126,
      weekly: 15,
    },
  },
})
