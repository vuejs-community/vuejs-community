import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-embeddable-c-cpp-headers',
  description: 'A simple plugin for transforming vite build artifacts to embeddable C/C++ headers',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'embedded',
    'embeddable',
    'c',
    'c++',
    'headers',
    'transformer',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/bgenia/vite-plugin-embeddable-c-cpp-headers',
    npm: 'https://www.npmjs.com/package/vite-plugin-embeddable-c-cpp-headers',
  },
  stats: {
    downloads: {
      monthly: 4,
      weekly: 2,
    },
  },
})
