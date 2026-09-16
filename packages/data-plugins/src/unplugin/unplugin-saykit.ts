import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-saykit',
  description: 'Universal build tool plugin for saykit (Vite, Rollup, Webpack, esbuild)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'i18n',
    'rollup',
    'saykit',
    'unplugin',
    'vite',
    'webpack',
  ],
  source: {
    github: 'k0d13/saykit',
    npm: 'unplugin-saykit',
  },
  links: {
    github: 'https://github.com/k0d13/saykit',
    npm: 'https://www.npmjs.com/package/unplugin-saykit',
    website: 'https://github.com/k0d13/saykit#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 775,
      weekly: 387,
    },
  },
})
