import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-gen-typed-css-modules',
  description: 'Generate type definition files for css or sass or less modules',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'typed-css-modules',
    'typed-scss-modules',
    'typed-less-modules',
  ],
  links: {
    github: 'https://github.com/zhangone233/vite-plugin-gen-typed-css-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-gen-typed-css-modules',
    website: 'https://github.com/zhangone233/vite-plugin-gen-typed-css-modules#readme',
  },
  source: {
    github: 'zhangone233/vite-plugin-gen-typed-css-modules',
    npm: 'vite-plugin-gen-typed-css-modules',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
