import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pointcut/unplugin',
  description: 'Universal transform/inject + dev-server auto-attach for Pointcut, across all bundlers via unplugin.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'pointcut',
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'esbuild',
    'rollup',
    'farm',
    'design-mode',
    'ai-agent',
    'source-stamp',
  ],
  source: {
    github: 'geemeows/pointcut',
    npm: '@pointcut/unplugin',
  },
  links: {
    github: 'https://github.com/geemeows/pointcut',
    npm: 'https://www.npmjs.com/package/@pointcut/unplugin',
    website: 'https://github.com/geemeows/pointcut/tree/main/packages/unplugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 105,
      weekly: 13,
    },
  },
})
