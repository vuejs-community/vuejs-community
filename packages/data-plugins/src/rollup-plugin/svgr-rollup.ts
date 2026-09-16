import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@svgr/rollup',
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
    npm: '@svgr/rollup',
  },
  links: {
    github: 'https://github.com/gregberge/svgr',
    npm: 'https://www.npmjs.com/package/@svgr/rollup',
    website: 'https://react-svgr.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 2107129,
      weekly: 402833,
    },
  },
})
