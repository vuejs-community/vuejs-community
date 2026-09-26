import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rolldown-license-plugin',
  description: 'Rolldown/Vite plugin to extract dependency licenses and optionally validate them. Zero dependencies, optimized for performance.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rolldown',
    'rolldown-plugin',
    'vite',
    'vite-plugin',
    'license',
    'licenses',
    'third-party',
  ],
  links: {
    github: 'https://github.com/silverwind/rolldown-license-plugin',
    npm: 'https://www.npmjs.com/package/rolldown-license-plugin',
    website: 'https://github.com/silverwind/rolldown-license-plugin#readme',
  },
  source: {
    github: 'silverwind/rolldown-license-plugin',
    npm: 'rolldown-license-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13259,
      weekly: 2076,
    },
  },
})
