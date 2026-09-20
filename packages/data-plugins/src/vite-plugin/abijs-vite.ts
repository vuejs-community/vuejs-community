import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@abijs/vite',
  description: 'A Vite.js plugin for integrating the Abi.js framework with modern frontend tooling.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'abi',
    'abijs',
    'abi.js',
    'abi-vite',
    'vite',
    'vitejs',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/abi-js/abi',
    npm: 'https://www.npmjs.com/package/@abijs/vite',
    website: 'https://abi.js.org',
  },
  source: {
    github: 'abi-js/abi',
    npm: '@abijs/vite',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 25,
      weekly: 5,
    },
  },
})
