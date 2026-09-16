import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@animus-ui/unplugin',
  description: 'Animus transform host for non-plugin bundlers — unplugin-based rollup/esbuild/rspack/webpack entry points over the one extraction session',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'animus',
    'css',
    'esbuild',
    'extraction',
    'rollup',
    'rspack',
    'static-css',
    'unplugin',
    'webpack',
  ],
  source: {
    github: 'codecaaron/animus',
    npm: '@animus-ui/unplugin',
  },
  links: {
    github: 'https://github.com/codecaaron/animus',
    npm: 'https://www.npmjs.com/package/@animus-ui/unplugin',
    website: 'https://github.com/codecaaron/animus/tree/main/packages/unplugin#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 137,
      weekly: 5,
    },
  },
})
