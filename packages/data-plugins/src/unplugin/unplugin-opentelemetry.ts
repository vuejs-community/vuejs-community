import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-opentelemetry',
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
  links: {
    github: 'https://github.com/emattiza/unplugin-opentelemetry',
    npm: 'https://www.npmjs.com/package/unplugin-opentelemetry',
    website: 'https://github.com/emattiza/unplugin-opentelemetry#readme',
  },
  source: {
    github: 'emattiza/unplugin-opentelemetry',
    npm: 'unplugin-opentelemetry',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 22,
      weekly: 4,
    },
  },
})
