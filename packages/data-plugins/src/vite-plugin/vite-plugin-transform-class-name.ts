import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-transform-class-name',
  description: 'Used to resolve that css modules loaded in vite react projects must write style references in the tag attribute className',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'yulaughing/vite-plugin-transform-classname',
    npm: 'vite-plugin-transform-class-name',
  },
  links: {
    github: 'https://github.com/yulaughing/vite-plugin-transform-classname',
    npm: 'https://www.npmjs.com/package/vite-plugin-transform-class-name',
    website: 'https://github.com/yulaughing/vite-plugin-transform-classname#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 25,
      weekly: 1,
    },
  },
})
