import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hyperyond/vite-plugin',
  description: 'Vite plugin that injects the Hover chat widget into your dev server, so AI can drive your real Chrome.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'hover',
    'vite',
    'vite-plugin',
    'playwright',
    'browser-testing',
    'claude',
  ],
  links: {
    github: 'https://github.com/Hyperyond/Hover',
    npm: 'https://www.npmjs.com/package/@hyperyond/vite-plugin',
    website: 'https://github.com/Hyperyond/Hover#readme',
  },
  source: {
    github: 'Hyperyond/Hover',
    npm: '@hyperyond/vite-plugin',
  },
  stats: {
    stars: 11,
    downloads: {
      monthly: 16,
      weekly: 2,
    },
  },
})
