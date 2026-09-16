import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@exodus/svgr-rollup',
  description: 'SVGR Rollup plugin.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'svgr',
    'svg',
    'react',
    'rollup',
    'rollup-plugin',
  ],
  source: {
    github: 'gregberge/svgr',
    npm: '@exodus/svgr-rollup',
  },
  links: {
    github: 'https://github.com/gregberge/svgr',
    npm: 'https://www.npmjs.com/package/@exodus/svgr-rollup',
    website: 'https://react-svgr.com/',
  },
  stats: {
    stars: 11057,
    downloads: {
      monthly: 67,
      weekly: 47,
    },
  },
})
