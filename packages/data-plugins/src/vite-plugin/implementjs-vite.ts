import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@implementjs/vite',
  description: 'The Vite plugin behind implement\'s server rendering, prerendering and dev styles.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'implement',
    'implementjs',
    'vite',
    'vite-plugin',
    'ssr',
    'prerender',
  ],
  source: {
    github: 'ieedan/implement',
    npm: '@implementjs/vite',
  },
  links: {
    github: 'https://github.com/ieedan/implement',
    npm: 'https://www.npmjs.com/package/@implementjs/vite',
    website: 'https://implementjs.dev/docs/vite',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 1799,
      weekly: 61,
    },
  },
})
