import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'typewritingclass-compiler',
  description: 'Static CSS extraction compiler and Vite plugin for typewritingclass',
  version: '0.3.2',
  category: 'plugin',
  tags: [
    'typewritingclass',
    'compiler',
    'vite-plugin',
    'css',
    'static-extraction',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/corysimmons/typewritingclass',
    npm: 'https://www.npmjs.com/package/typewritingclass-compiler',
  },
  stats: {
    downloads: {
      monthly: 169,
      weekly: 15,
    },
  },
})
