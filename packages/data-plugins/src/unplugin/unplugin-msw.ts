import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-msw',
  description: 'utility unplugin for msw',
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
    'msw',
  ],
  links: {
    github: 'https://github.com/esttom/unplugin-msw',
    npm: 'https://www.npmjs.com/package/unplugin-msw',
    website: 'https://github.com/esttom/unplugin-msw#readme',
  },
  source: {
    github: 'esttom/unplugin-msw',
    npm: 'unplugin-msw',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 10,
      weekly: 2,
    },
  },
})
