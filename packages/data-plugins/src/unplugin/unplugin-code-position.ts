import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-code-position',
  description: 'Click on an element on the page to find its corresponding position in the code',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
    'vite',
    'webpack',
    'code position',
  ],
  links: {
    github: 'https://github.com/legend402/unplugin-code-position',
    npm: 'https://www.npmjs.com/package/unplugin-code-position',
    website: 'https://github.com/legend402/unplugin-code-position#readme',
  },
  source: {
    github: 'legend402/unplugin-code-position',
    npm: 'unplugin-code-position',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 14,
      weekly: 2,
    },
  },
})
