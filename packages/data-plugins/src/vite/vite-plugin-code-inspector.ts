import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-code-inspector',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  icon: 'logos:vite-icon',
  version: '1.3.0',
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
  source: {
    github: 'jm-niu/vite-plugin-code-inspector',
    npm: 'vite-plugin-code-inspector',
  },
  links: {
    github: 'https://github.com/jm-niu/vite-plugin-code-inspector',
    npm: 'https://www.npmjs.com/package/vite-plugin-code-inspector',
  },
  stats: {
    downloads: {
      monthly: 66,
      weekly: 11,
    },
  },
})
