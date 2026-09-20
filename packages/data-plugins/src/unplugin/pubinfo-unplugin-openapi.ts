import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pubinfo/unplugin-openapi',
  description: 'Unplugin for @pubinfo/openapi.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'openapi',
  ],
  links: {
    github: 'https://github.com/werheng/pubinfo-openapi',
    npm: 'https://www.npmjs.com/package/@pubinfo/unplugin-openapi',
    website: 'https://github.com/werheng/pubinfo-openapi#readme',
  },
  source: {
    github: 'werheng/pubinfo-openapi',
    npm: '@pubinfo/unplugin-openapi',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1084,
      weekly: 165,
    },
  },
})
