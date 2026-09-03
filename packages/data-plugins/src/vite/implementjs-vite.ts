import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@implementjs/vite',
  description: 'The Vite plugin behind implement\'s server rendering, prerendering and dev styles.',
  version: '0.0.3',
  category: 'plugin',
  tags: [
    'implement',
    'implementjs',
    'vite',
    'vite-plugin',
    'ssr',
    'prerender',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ieedan/implement',
    npm: 'https://www.npmjs.com/package/@implementjs/vite',
  },
  stats: {
    downloads: {
      monthly: 1622,
      weekly: 1209,
    },
  },
})
