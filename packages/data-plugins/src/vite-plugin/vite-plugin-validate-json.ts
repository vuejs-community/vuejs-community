import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-validate-json',
  description: 'A Vite plugin to validate a set of paths to JSON files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'json',
    'validation',
    'json-validation',
    'duplicate-keys',
    'json-schema',
    'watch-mode',
    'development-tools',
  ],
  source: {
    github: 'scr2em/vite-plugin-validate-json',
    npm: 'vite-plugin-validate-json',
  },
  links: {
    github: 'https://github.com/scr2em/vite-plugin-validate-json',
    npm: 'https://www.npmjs.com/package/vite-plugin-validate-json',
    website: 'https://github.com/scr2em/vite-plugin-validate-json#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 232,
      weekly: 26,
    },
  },
})
