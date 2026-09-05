import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-install',
  description: 'A universal bundler plugin which automatically installs dependencies that are imported by a bundle, even if not yet in `package.json`.',
  version: '0.2.0',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rollup',
    'transform',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/wzc520pyfm/unplugin-auto-install',
    npm: 'https://www.npmjs.com/package/unplugin-auto-install',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
