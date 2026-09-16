import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hyperfixi/vite-plugin',
  description: 'Vite plugin for automatic tree-shaken hyperscript bundles',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hyperscript',
    'hyperfixi',
    'bundler',
    'zero-config',
  ],
  source: {
    github: 'codetalcott/hyperfixi',
    npm: '@hyperfixi/vite-plugin',
  },
  links: {
    github: 'https://github.com/codetalcott/hyperfixi',
    npm: 'https://www.npmjs.com/package/@hyperfixi/vite-plugin',
    website: 'https://github.com/codetalcott/hyperfixi/tree/main/packages/vite-plugin#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 856,
      weekly: 364,
    },
  },
})
