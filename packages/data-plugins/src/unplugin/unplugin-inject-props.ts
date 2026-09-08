import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inject-props',
  description: 'auto inject props to component for vite/webpack/rollup/esbuild/astro/nuxt',
  icon: 'icon:dark-unplugin',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'inject props',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'zhangfisher/unplugin-inject-props',
    npm: 'unplugin-inject-props',
  },
  links: {
    github: 'https://github.com/zhangfisher/unplugin-inject-props',
    npm: 'https://www.npmjs.com/package/unplugin-inject-props',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 5,
    },
  },
})
