import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@macaly/static-tagger',
  description: 'Vite plugin that injects source-location data attributes onto JSX elements at build time, so production HTML/JS carries data-macaly-loc / data-macaly-name pointing back at the original source coordinate.',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'jsx',
    'tsx',
    'react',
    'ssr',
    'ssg',
    'source-location',
    'click-to-source',
    'debugging',
    'typescript',
    'babel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/langtail/macaly-static-tagger',
    npm: 'https://www.npmjs.com/package/@macaly/static-tagger',
  },
  stats: {
    downloads: {
      monthly: 2811,
      weekly: 886,
    },
  },
})
