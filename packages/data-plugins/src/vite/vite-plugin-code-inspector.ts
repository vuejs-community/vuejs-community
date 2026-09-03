import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-code-inspector',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  version: '1.0.1',
  category: 'plugin',
  tags: [
    'vue',
    'react',
    'angular',
    'nuxt',
    'svelte',
    'vite',
    'vscode',
    'vite-plugin',
    'inspector',
    'debug',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jm-niu/vite-plugin-code-inspector',
    npm: 'https://www.npmjs.com/package/vite-plugin-code-inspector',
  },
  stats: {
    downloads: {
      monthly: 68,
      weekly: 11,
    },
  },
})
