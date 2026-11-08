import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@touchup/vite',
  description: 'Vite plugin that tells Touchup where a site\'s elements and text come from: the JSX file and line they were written at, and the data file value they show',
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
