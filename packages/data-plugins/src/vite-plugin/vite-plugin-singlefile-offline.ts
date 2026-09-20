import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-singlefile-offline',
  description: 'Vite plugin that inlines a Vite build into a single self-contained HTML file that runs offline under file:// by transforming ES modules to CommonJS with a shared __require loader.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/Jacobinwwey/vite-plugin-singlefile-offline',
    npm: 'https://www.npmjs.com/package/vite-plugin-singlefile-offline',
    website: 'https://github.com/Jacobinwwey/vite-plugin-singlefile-offline',
  },
  source: {
    github: 'Jacobinwwey/vite-plugin-singlefile-offline',
    npm: 'vite-plugin-singlefile-offline',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 6,
    },
  },
})
