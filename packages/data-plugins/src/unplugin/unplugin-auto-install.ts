import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-auto-install',
  description: 'A universal bundler plugin which automatically installs dependencies that are imported by a bundle, even if not yet in `package.json`.',
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
    github: 'https://github.com/wzc520pyfm/unplugin-auto-install',
    npm: 'https://www.npmjs.com/package/unplugin-auto-install',
    website: 'https://github.com/wzc520pyfm/unplugin-auto-install#readme',
  },
  source: {
    github: 'wzc520pyfm/unplugin-auto-install',
    npm: 'unplugin-auto-install',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
