import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gen-typed-css-modules',
  description: 'Generate type definition files for css or sass or less modules',
  version: '0.1.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'typed-css-modules',
    'typed-scss-modules',
    'typed-less-modules',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/zhangone233/vite-plugin-gen-typed-css-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-gen-typed-css-modules',
  },
  stats: {
    downloads: {
      monthly: 31,
      weekly: 4,
    },
  },
})
