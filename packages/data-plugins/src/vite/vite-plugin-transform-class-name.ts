import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform-class-name',
  description: 'Used to resolve that css modules loaded in vite react projects must write style references in the tag attribute className',
  version: '2.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yulaughing/vite-plugin-transform-classname',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform-class-name',
  },
  stats: {
    downloads: {
      monthly: 33,
      weekly: 2,
    },
  },
})
