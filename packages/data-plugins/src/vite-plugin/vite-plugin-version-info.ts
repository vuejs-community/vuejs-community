import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-info',
  description: 'A Vite plugin that injects software version metadata as build-time globals for easy display in your UI or console.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'package',
    'version',
    'git',
    'commit',
    'branch',
    'date',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-version-info',
    website: 'https://codeberg.org/lightrain/vite-plugin-version-info#readme',
  },
  source: {
    npm: 'vite-plugin-version-info',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 24,
      weekly: 5,
    },
  },
})
