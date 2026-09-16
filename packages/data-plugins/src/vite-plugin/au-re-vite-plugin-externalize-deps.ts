import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@au-re/vite-plugin-externalize-deps',
  description: '(Temporary fork of) A configurable Vite plugin to help externalize your dependencies (includes subpaths)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'dependencies',
    'dev',
    'utils',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'voracious/vite-plugin-externalize-deps',
    npm: '@au-re/vite-plugin-externalize-deps',
  },
  links: {
    github: 'https://github.com/voracious/vite-plugin-externalize-deps',
    npm: 'https://www.npmjs.com/package/@au-re/vite-plugin-externalize-deps',
    website: 'https://github.com/voracious/vite-plugin-externalize-deps',
  },
  stats: {
    stars: 104,
    downloads: {
      monthly: 95,
      weekly: 5,
    },
  },
})
