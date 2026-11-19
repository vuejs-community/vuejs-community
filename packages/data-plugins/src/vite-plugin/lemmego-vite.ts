import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lemmego/vite',
  description: 'Lemmego integration for Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lemmego',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/lemmego/vite',
    npm: 'https://www.npmjs.com/package/@lemmego/vite',
    website: 'https://lemmego.github.io/docs/frontend/vite/',
  },
  source: {
    github: 'lemmego/vite',
    npm: '@lemmego/vite',
  },
})
