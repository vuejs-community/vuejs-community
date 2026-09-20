import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@funstack/static',
  description: 'FUNSTACK static library',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'framework',
    'react-server-components',
    'rsc',
  ],
  links: {
    github: 'https://github.com/uhyo/funstack-static',
    npm: 'https://www.npmjs.com/package/@funstack/static',
    website: 'https://github.com/uhyo/funstack-static#readme',
  },
  source: {
    github: 'uhyo/funstack-static',
    npm: '@funstack/static',
  },
  stats: {
    stars: 90,
    downloads: {
      monthly: 3707,
      weekly: 390,
    },
  },
})
