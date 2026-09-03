import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-electron-run',
  description: 'Vite and Rollup plugins that build and live-reload Electron with reliable process shutdown.',
  version: '0.4.1',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/antelm-dev/electron-run',
    npm: 'https://www.npmjs.com/package/vite-plugin-electron-run',
  },
  stats: {
    downloads: {
      monthly: 516,
      weekly: 207,
    },
  },
})
