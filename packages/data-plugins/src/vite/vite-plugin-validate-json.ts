import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-validate-json',
  description: 'A Vite plugin to validate a set of paths to JSON files.',
  icon: 'logos:vite-icon',
  version: '0.0.4',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'scr2em/vite-plugin-validate-json',
    npm: 'vite-plugin-validate-json',
  },
  links: {
    github: 'https://github.com/scr2em/vite-plugin-validate-json',
    npm: 'https://www.npmjs.com/package/vite-plugin-validate-json',
  },
  stats: {
    downloads: {
      monthly: 136,
      weekly: 84,
    },
  },
})
