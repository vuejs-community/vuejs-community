import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plugin-123/my-f-plugin',
  description: 'Register global imports on demand for Vite and Webpack',
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
  ],
  source: {
    github: 'antfu/unplugin-starter',
    npm: '@plugin-123/my-f-plugin',
  },
  links: {
    github: 'https://github.com/antfu/unplugin-starter',
    npm: 'https://www.npmjs.com/package/@plugin-123/my-f-plugin',
    website: 'https://github.com/antfu/unplugin-starter#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 10,
      weekly: 1,
    },
  },
})
