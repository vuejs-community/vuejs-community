import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@macropygia/vite-plugin-importer-invalidator',
  description: 'Vite plugin to invalidate the importers of the target file when the file is modified.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'static',
    'sass',
    'scss',
  ],
  links: {
    github: 'https://github.com/macropygia/static-site-stack',
    npm: 'https://www.npmjs.com/package/@macropygia/vite-plugin-importer-invalidator',
    website: 'https://github.com/macropygia/static-site-stack/tree/main/packages/vite-plugin-importer-invalidator#readme',
  },
  source: {
    github: 'macropygia/static-site-stack',
    npm: '@macropygia/vite-plugin-importer-invalidator',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 52,
      weekly: 3,
    },
  },
})
