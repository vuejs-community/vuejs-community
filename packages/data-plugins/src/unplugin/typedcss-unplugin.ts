import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@typedcss/unplugin',
  description: 'Universal TypedCSS plugin for various build tools',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'typedcss',
    'css',
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'esbuild',
    'farm',
    'rollup',
    'rolldown',
    'bun',
  ],
  links: {
    github: 'https://github.com/zss-labs/typedcss',
    npm: 'https://www.npmjs.com/package/@typedcss/unplugin',
    website: 'https://github.com/zss-labs/typedcss/tree/main/packages/css',
  },
  source: {
    github: 'zss-labs/typedcss',
    npm: '@typedcss/unplugin',
  },
})
