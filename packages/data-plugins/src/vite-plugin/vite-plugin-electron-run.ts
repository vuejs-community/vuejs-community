import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-run',
  description: 'Vite and Rollup plugins that build and live-reload Electron with reliable process shutdown.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'electron',
    'hmr',
    'live-reload',
    'restart',
    'rollup',
    'rollup-plugin',
    'typescript',
    'vite',
    'vite-plugin',
    'watch',
  ],
  links: {
    github: 'https://github.com/antelm-dev/electron-run',
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-run',
    website: 'https://antelm-dev.github.io/electron-run/',
  },
  source: {
    github: 'antelm-dev/electron-run',
    npm: 'vite-plugin-electron-run',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 541,
      weekly: 10,
    },
  },
})
