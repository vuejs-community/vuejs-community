import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@macaly/static-tagger',
  description: 'Vite plugin that injects source-location data attributes onto JSX elements at build time, so production HTML/JS carries data-macaly-loc / data-macaly-name pointing back at the original source coordinate.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'langtail/macaly-static-tagger',
    npm: '@macaly/static-tagger',
  },
  links: {
    github: 'https://github.com/langtail/macaly-static-tagger',
    npm: 'https://www.npmjs.com/package/@macaly/static-tagger',
    website: 'https://github.com/langtail/macaly-static-tagger#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 3232,
      weekly: 1039,
    },
  },
})
