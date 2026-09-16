import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-docx',
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
    'docx',
    'docx-to-html',
  ],
  source: {
    github: 'action-hong/unplugin-docx',
    npm: 'unplugin-docx',
  },
  links: {
    github: 'https://github.com/action-hong/unplugin-docx',
    npm: 'https://www.npmjs.com/package/unplugin-docx',
    website: 'https://github.com/action-hong/unplugin-docx#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 14,
      weekly: 3,
    },
  },
})
