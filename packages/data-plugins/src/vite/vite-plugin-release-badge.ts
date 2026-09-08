import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-release-badge',
  description: 'Vite plugin that surfaces build/release info in the browser: console print, window global, HTML meta, hotkey panel and version.json polling.',
  icon: 'logos:vite-icon',
  version: '1.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'version',
    'release',
    'build-info',
    'git-commit',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-release-badge',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-release-badge',
  },
  stats: {
    downloads: {
      monthly: 287,
      weekly: 287,
    },
  },
})
