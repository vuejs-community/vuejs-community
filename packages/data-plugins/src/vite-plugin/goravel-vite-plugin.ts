import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'goravel-vite-plugin',
  description: 'Vite plugin for Goravel applications.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'goravel',
    'go',
    'golang',
    'vite',
    'vite-plugin',
    'hmr',
    'assets',
  ],
  links: {
    github: 'https://github.com/goravel/vite-plugin',
    npm: 'https://www.npmjs.com/package/goravel-vite-plugin',
    website: 'https://github.com/goravel/vite-plugin#readme',
  },
  source: {
    github: 'goravel/vite-plugin',
    npm: 'goravel-vite-plugin',
  },
})
