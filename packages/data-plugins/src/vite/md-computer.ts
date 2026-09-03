import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'md-computer',
  description: 'A Markdown-native UI DSL that compiles to React + shadcn/ui',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'markdown',
    'ui',
    'dsl',
    'react',
    'shadcn',
    'codegen',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/vladzima/md-computer',
    npm: 'https://www.npmjs.com/package/md-computer',
  },
  stats: {
    downloads: {
      monthly: 59,
      weekly: 8,
    },
  },
})
