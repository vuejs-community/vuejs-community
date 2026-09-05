import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-dbg',
  description: 'Rust\'s `dbg!` for JavaScript, logging values with context effortlessly.',
  version: '0.1.0-rc.1',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
    'swc',
    'debug',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/unplugin-dbg',
  },
  stats: {
    downloads: {
      monthly: 1224,
      weekly: 344,
    },
  },
})
