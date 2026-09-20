import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'runtime-compiler',
  description: 'A code generation system.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rolldown-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/re-utils/runtime-compiler',
    npm: 'https://www.npmjs.com/package/runtime-compiler',
    website: 'https://github.com/re-utils/runtime-compiler#readme',
  },
  source: {
    github: 're-utils/runtime-compiler',
    npm: 'runtime-compiler',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 328,
      weekly: 82,
    },
  },
})
