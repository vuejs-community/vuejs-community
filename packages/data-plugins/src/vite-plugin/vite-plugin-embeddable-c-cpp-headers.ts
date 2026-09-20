import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-embeddable-c-cpp-headers',
  description: 'A simple plugin for transforming vite build artifacts to embeddable C/C++ headers',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    github: 'https://github.com/bgenia/vite-plugin-embeddable-c-cpp-headers',
    npm: 'https://www.npmjs.com/package/vite-plugin-embeddable-c-cpp-headers',
    website: 'https://github.com/bgenia/vite-plugin-embeddable-c-cpp-headers#readme',
  },
  source: {
    github: 'bgenia/vite-plugin-embeddable-c-cpp-headers',
    npm: 'vite-plugin-embeddable-c-cpp-headers',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 11,
      weekly: 3,
    },
  },
})
