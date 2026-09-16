import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-inject-props',
  description: 'auto inject props to component for vite/webpack/rollup/esbuild/astro/nuxt',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'inject props',
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  source: {
    github: 'zhangfisher/unplugin-inject-props',
    npm: 'unplugin-inject-props',
  },
  links: {
    github: 'https://github.com/zhangfisher/unplugin-inject-props',
    npm: 'https://www.npmjs.com/package/unplugin-inject-props',
    website: 'https://zhangfisher.github.io/repos',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 4,
    },
  },
})
