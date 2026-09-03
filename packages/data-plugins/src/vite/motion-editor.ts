import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'motion-editor',
  description: 'Motion Editor: a visual editor for Motion animations that writes every edit back to your source. This public package is a placeholder; the editor is distributed through Motion\'s registry.',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'motion',
    'animation',
    'editor',
    'timeline',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/motion-editor',
  },
  stats: {
    downloads: {
      monthly: 143,
      weekly: 143,
    },
  },
})
