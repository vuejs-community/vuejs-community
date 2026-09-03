import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-importer-invalidator',
  description: 'Vite plugin to invalidate the importers of the target file when the file is modified.',
  version: '0.0.17',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'sass',
    'scss',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-importer-invalidator',
  },
  stats: {
    downloads: {
      monthly: 92,
      weekly: 43,
    },
  },
})
