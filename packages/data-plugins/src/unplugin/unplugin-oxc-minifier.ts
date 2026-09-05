import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-oxc-minifier',
  description: 'Unofficial unplugin for oxc-minifier package of oxidation compiler tools',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'oxc',
    'minifier',
    'oxc-minifier',
    'unplugin-oxc-minifier',
    'unplugin',
    'webpack',
    'vite',
    'rollup',
    'esbuild',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/mnenie/unplugin-oxc-minifier',
    npm: 'https://www.npmjs.com/package/unplugin-oxc-minifier',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 7,
    },
  },
})
