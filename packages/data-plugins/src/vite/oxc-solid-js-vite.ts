import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@oxc-solid-js/vite',
  description: 'Vite plugin for @oxc-solid-js/compiler',
  version: '0.1.0-alpha.15',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'solid',
    'solidjs',
    'jsx',
    'oxc',
    'rolldown',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/taskylizard/oxc-solid-js',
    npm: 'https://www.npmjs.com/package/@oxc-solid-js/vite',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 11,
    },
  },
})
