import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-singlefile-offline',
  description: 'Vite plugin that inlines a Vite build into a single self-contained HTML file that runs offline under file:// by transforming ES modules to CommonJS with a shared __require loader.',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'single-file',
    'offline',
    'file-protocol',
    'bundle',
    'inline',
    'commonjs',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Jacobinwwey/vite-plugin-singlefile-offline',
    npm: 'https://www.npmjs.com/package/vite-plugin-singlefile-offline',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 4,
    },
  },
})
