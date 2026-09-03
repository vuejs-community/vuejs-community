import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'remove-attr',
  description: 'A Vite plugin designed specifically for Vue.js projects that allows the removal of specified attributes in production builds. Useful for excluding attributes like \'data-testid\' used in testing. Options include specific file extensions, attributes, ignored',
  version: '0.0.15',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mustafadalga/remove-attr',
    npm: 'https://www.npmjs.com/package/remove-attr',
  },
  stats: {
    downloads: {
      monthly: 25818,
      weekly: 6857,
    },
  },
})
