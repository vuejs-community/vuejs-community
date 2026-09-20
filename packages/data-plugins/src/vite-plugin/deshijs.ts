import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'deshijs',
  description: 'Compiler and Vite plugin for .deshi — a zero-JS static site framework.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'deshi',
    'vite',
    'vite-plugin',
    'ssg',
    'static-site',
    'compiler',
    'zero-js',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/deshijs',
  },
  source: {
    npm: 'deshijs',
  },
})
