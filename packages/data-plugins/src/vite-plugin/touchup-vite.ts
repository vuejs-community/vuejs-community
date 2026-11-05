import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@touchup/vite',
  description: 'Vite plugin that stamps JSX elements with the source file and line they came from, for Touchup',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'code-review',
    'jsx',
    'source',
    'touchup',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/j0nas/touchup',
    npm: 'https://www.npmjs.com/package/@touchup/vite',
    website: 'https://github.com/j0nas/touchup#readme',
  },
  source: {
    github: 'j0nas/touchup',
    npm: '@touchup/vite',
  },
})
