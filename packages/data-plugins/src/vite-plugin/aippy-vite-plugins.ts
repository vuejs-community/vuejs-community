import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@aippy/vite-plugins',
  description: 'Vite plugins for Aippy projects - Asset management and component tagging',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'aippy',
    'vite',
    'vite-plugin',
    'assets',
    'preload',
    'component-tagger',
    'typescript',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@aippy/vite-plugins',
    website: 'https://aippy.ai',
  },
  source: {
    npm: '@aippy/vite-plugins',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 293,
      weekly: 6,
    },
  },
})
