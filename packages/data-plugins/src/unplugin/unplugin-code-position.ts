import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-code-position',
  description: 'Click on an element on the page to find its corresponding position in the code',
  icon: 'icon:dark-unplugin',
  version: '0.1.11',
  category: 'plugin',
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'code position',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'legend402/unplugin-code-position',
    npm: 'unplugin-code-position',
  },
  links: {
    github: 'https://github.com/legend402/unplugin-code-position',
    npm: 'https://www.npmjs.com/package/unplugin-code-position',
  },
  stats: {
    downloads: {
      monthly: 11,
      weekly: 2,
    },
  },
})
