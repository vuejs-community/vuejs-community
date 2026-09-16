import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-squoosh',
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
    github: 'byronogis/unplugin-squoosh',
    npm: 'unplugin-squoosh',
  },
  links: {
    github: 'https://github.com/byronogis/unplugin-squoosh',
    npm: 'https://www.npmjs.com/package/unplugin-squoosh',
    website: 'https://github.com/byronogis/unplugin-squoosh#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
