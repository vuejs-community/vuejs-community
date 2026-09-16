import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-code-inspector',
  description: 'jump to local IDE source code while click the element of browser automatically.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'jm-niu/vite-plugin-code-inspector',
    npm: 'vite-plugin-code-inspector',
  },
  links: {
    github: 'https://github.com/jm-niu/vite-plugin-code-inspector',
    npm: 'https://www.npmjs.com/package/vite-plugin-code-inspector',
    website: 'https://github.com/jm-niu/vite-plugin-code-inspector/blob/main/README.md',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 65,
      weekly: 19,
    },
  },
})
