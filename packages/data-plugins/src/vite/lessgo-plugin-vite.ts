import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@lessgo/plugin-vite',
  description: 'Vite plugin for using less.go (lessc-go) as the LESS preprocessor',
  version: '0.2.7',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'less',
    'less.go',
    'lessgo',
    'css',
    'preprocessor',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/toakleaf/less.go',
    npm: 'https://www.npmjs.com/package/@lessgo/plugin-vite',
  },
  stats: {
    downloads: {
      monthly: 16,
      weekly: 1,
    },
  },
})
