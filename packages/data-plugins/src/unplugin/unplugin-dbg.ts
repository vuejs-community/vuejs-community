import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dbg',
  description: 'Rust\'s `dbg!` for JavaScript, logging values with context effortlessly.',
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
    'swc',
    'debug',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/unplugin-dbg',
  },
  source: {
    npm: 'unplugin-dbg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 934,
      weekly: 198,
    },
  },
})
