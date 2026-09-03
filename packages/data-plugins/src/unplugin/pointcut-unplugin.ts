import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@pointcut/unplugin',
  description: 'Universal transform/inject + dev-server auto-attach for Pointcut, across all bundlers via unplugin.',
  version: '0.1.1',
  category: 'plugin',
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
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/geemeows/pointcut',
    npm: 'https://www.npmjs.com/package/@pointcut/unplugin',
  },
  stats: {
    downloads: {
      monthly: 272,
      weekly: 16,
    },
  },
})
