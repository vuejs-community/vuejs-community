import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'electron-trio',
  description: 'Simplify Electron application development and builds with Vite.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'electron',
    'vite-plugin',
    'type-safe',
    'rpc',
    'typescript',
  ],
  links: {
    github: 'https://github.com/ye-e-e-e/electron-trio',
    npm: 'https://www.npmjs.com/package/electron-trio',
    website: 'https://github.com/ye-e-e-e/electron-trio#readme',
  },
  source: {
    github: 'ye-e-e-e/electron-trio',
    npm: 'electron-trio',
  },
})
