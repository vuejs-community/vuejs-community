import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'svgr-rollup-inferno',
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
    github: 'greenyas/inferno-svgr',
    npm: 'svgr-rollup-inferno',
  },
  links: {
    github: 'https://github.com/greenyas/inferno-svgr',
    npm: 'https://www.npmjs.com/package/svgr-rollup-inferno',
    website: 'https://react-svgr.com',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
