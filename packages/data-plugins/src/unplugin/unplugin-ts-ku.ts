import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-ts-ku',
  description: 'a tool to generate ts string literal union type from files',
  icon: 'icon:dark-unplugin',
  version: '0.0.4',
  category: 'plugin',
  tags: [
    'unplugin',
  ],
  types: [
    'unplugin',
  ],
  source: {
    github: 'xuyimingwork/unplugin-ts-ku',
    npm: 'unplugin-ts-ku',
  },
  links: {
    github: 'https://github.com/xuyimingwork/unplugin-ts-ku',
    npm: 'https://www.npmjs.com/package/unplugin-ts-ku',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 0,
    },
  },
})
