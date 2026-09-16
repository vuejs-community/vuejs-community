import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-release-badge',
  description: 'Vite plugin that surfaces build/release info in the browser: console print, window global, HTML meta, hotkey panel and version.json polling.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'release',
    'build-info',
    'git-commit',
  ],
  source: {
    npm: 'vite-plugin-release-badge',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-release-badge',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 309,
      weekly: 37,
    },
  },
})
