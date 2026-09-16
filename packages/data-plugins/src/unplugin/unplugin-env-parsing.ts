import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-env-parsing',
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
    github: 'hairyf/unplugin-env-parsing',
    npm: 'unplugin-env-parsing',
  },
  links: {
    github: 'https://github.com/hairyf/unplugin-env-parsing',
    npm: 'https://www.npmjs.com/package/unplugin-env-parsing',
    website: 'https://github.com/hairyf/unplugin-env-parsing#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 3,
    },
  },
})
