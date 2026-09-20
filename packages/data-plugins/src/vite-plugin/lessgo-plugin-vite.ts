import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lessgo/plugin-vite',
  description: 'Vite plugin for using less.go (lessc-go) as the LESS preprocessor',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'less',
    'less.go',
    'lessgo',
    'css',
    'preprocessor',
  ],
  links: {
    github: 'https://github.com/toakleaf/less.go',
    npm: 'https://www.npmjs.com/package/@lessgo/plugin-vite',
    website: 'https://github.com/toakleaf/less.go',
  },
  source: {
    github: 'toakleaf/less.go',
    npm: '@lessgo/plugin-vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 30,
      weekly: 4,
    },
  },
})
