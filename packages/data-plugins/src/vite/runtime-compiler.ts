import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'runtime-compiler',
  description: 'A code generation system.',
  version: '4.2.2',
  category: 'plugin',
  tags: [
    'rolldown-plugin',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/re-utils/runtime-compiler',
    npm: 'https://www.npmjs.com/package/runtime-compiler',
  },
  stats: {
    downloads: {
      monthly: 418,
      weekly: 44,
    },
  },
})
