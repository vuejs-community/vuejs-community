import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vincle/precompile',
  description: 'JSX precompile transform for @vincle/core, with Vite and Bun adapters',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun',
    'jsx',
    'precompile',
    'template-literals',
    'transform',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cjean-fr/vincle',
    npm: 'https://www.npmjs.com/package/@vincle/precompile',
    website: 'https://vincle.cjean.fr',
  },
  source: {
    github: 'cjean-fr/vincle',
    npm: '@vincle/precompile',
  },
})
