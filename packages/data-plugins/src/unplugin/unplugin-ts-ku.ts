import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-ts-ku',
  description: 'a tool to generate ts string literal union type from files',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/xuyimingwork/unplugin-ts-ku',
    npm: 'https://www.npmjs.com/package/unplugin-ts-ku',
  },
  source: {
    github: 'xuyimingwork/unplugin-ts-ku',
    npm: 'unplugin-ts-ku',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 5,
    },
  },
})
