import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pre.style/vite',
  description: 'Vite plugin for pre.style.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'atomic-css',
    'css-in-js',
    'pre.style',
    'vite',
    'vite-plugin',
    'zero-runtime',
  ],
  links: {
    github: 'https://github.com/soluml/pre.style',
    npm: 'https://www.npmjs.com/package/@pre.style/vite',
    website: 'https://pre.style',
  },
  source: {
    github: 'soluml/pre.style',
    npm: '@pre.style/vite',
  },
})
