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
    website: 'https://typedcss.dev',
  },
  source: {
    github: 'zss-labs/typedcss',
    npm: '@typedcss/unplugin',
  },
})
