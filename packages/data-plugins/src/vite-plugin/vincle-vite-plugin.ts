import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vincle/vite-plugin',
  description: 'Vite asset integration for @vincle/core',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'asset',
    'hmr',
    'jsx',
    'manifest',
    'ssr',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cjean-fr/vincle',
    npm: 'https://www.npmjs.com/package/@vincle/vite-plugin',
    website: 'https://vincle.cjean.fr',
  },
  source: {
    github: 'cjean-fr/vincle',
    npm: '@vincle/vite-plugin',
  },
})
