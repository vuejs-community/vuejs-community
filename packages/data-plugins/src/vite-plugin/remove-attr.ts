import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'remove-attr',
  description: 'A Vite plugin designed specifically for Vue.js projects that allows the removal of specified attributes in production builds. Useful for excluding attributes like \'data-testid\' used in testing. Options include specific file extensions, attributes, ignored',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue',
    'vuejs',
    'remove-attributes',
    'html',
    'build-tool',
    'javascript',
    'typescript',
    'optimization',
    'web-development',
  ],
  links: {
    github: 'https://github.com/mustafadalga/remove-attr',
    npm: 'https://www.npmjs.com/package/remove-attr',
    website: 'https://github.com/mustafadalga/remove-attr#readme',
  },
  source: {
    github: 'mustafadalga/remove-attr',
    npm: 'remove-attr',
  },
  stats: {
    stars: 12,
    downloads: {
      monthly: 24106,
      weekly: 4847,
    },
  },
})
