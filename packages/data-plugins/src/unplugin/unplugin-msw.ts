import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-msw',
  description: 'utility unplugin for msw',
  icon: 'icon:dark-unplugin',
  version: '0.6.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'msw',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'esttom/unplugin-msw',
    npm: 'unplugin-msw',
  },
  links: {
    github: 'https://github.com/esttom/unplugin-msw',
    npm: 'https://www.npmjs.com/package/unplugin-msw',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
