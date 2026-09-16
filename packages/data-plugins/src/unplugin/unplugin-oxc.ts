import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-oxc',
  description: 'Oxc integration for unplugin.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'rspack',
    'rollup',
    'rolldown',
    'esbuild',
    'farm',
  ],
  source: {
    github: 'unplugin/unplugin-oxc',
    npm: 'unplugin-oxc',
  },
  links: {
    github: 'https://github.com/unplugin/unplugin-oxc',
    npm: 'https://www.npmjs.com/package/unplugin-oxc',
    website: 'https://github.com/unplugin/unplugin-oxc#readme',
  },
  stats: {
    stars: 57,
    downloads: {
      monthly: 193452,
      weekly: 20774,
    },
  },
})
