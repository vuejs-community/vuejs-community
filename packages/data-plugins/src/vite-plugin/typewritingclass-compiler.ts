import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'typewritingclass-compiler',
  description: 'Static CSS extraction compiler and Vite plugin for typewritingclass',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'typewritingclass',
    'compiler',
    'vite-plugin',
    'css',
    'static-extraction',
  ],
  links: {
    github: 'https://github.com/corysimmons/typewritingclass',
    npm: 'https://www.npmjs.com/package/typewritingclass-compiler',
    website: 'https://github.com/corysimmons/typewritingclass',
  },
  source: {
    github: 'corysimmons/typewritingclass',
    npm: 'typewritingclass-compiler',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 167,
      weekly: 32,
    },
  },
})
