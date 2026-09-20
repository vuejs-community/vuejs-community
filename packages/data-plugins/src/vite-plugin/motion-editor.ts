import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'motion-editor',
  description: 'Motion Editor: a visual editor for Motion animations that writes every edit back to your source. This public package is a placeholder; the editor is distributed through Motion\'s registry.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'motion',
    'animation',
    'editor',
    'timeline',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/motion-editor',
    website: 'https://motion.dev/plus',
  },
  source: {
    npm: 'motion-editor',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 157,
      weekly: 5,
    },
  },
})
