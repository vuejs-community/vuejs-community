import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-oxc-minifier',
  description: 'Unofficial unplugin for oxc-minifier package of oxidation compiler tools',
  icon: 'icon:dark-unplugin',
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
  source: {
    github: 'mnenie/unplugin-oxc-minifier',
    npm: 'unplugin-oxc-minifier',
  },
  links: {
    github: 'https://github.com/mnenie/unplugin-oxc-minifier',
    npm: 'https://www.npmjs.com/package/unplugin-oxc-minifier',
  },
  stats: {
    downloads: {
      monthly: 32,
      weekly: 8,
    },
  },
})
