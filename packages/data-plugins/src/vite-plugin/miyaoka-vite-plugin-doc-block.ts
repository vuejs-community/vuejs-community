import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@miyaoka/vite-plugin-doc-block',
  description: 'Vite plugin to strip <doc> custom blocks from Vue SFC',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'sfc',
    'doc',
    'documentation',
  ],
  source: {
    github: 'miyaoka/vite-plugin-doc-block',
    npm: '@miyaoka/vite-plugin-doc-block',
  },
  links: {
    github: 'https://github.com/miyaoka/vite-plugin-doc-block',
    npm: 'https://www.npmjs.com/package/@miyaoka/vite-plugin-doc-block',
    website: 'https://github.com/miyaoka/vite-plugin-doc-block#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 731,
      weekly: 157,
    },
  },
})
