import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'astermode',
  description: 'A Vite plugin that injects a draggable Dev Mode overlay during development.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'devtools',
    'overlay',
    'frontend',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/marcuwynu23/AsterMode',
    npm: 'https://www.npmjs.com/package/astermode',
  },
  stats: {
    downloads: {
      monthly: 5,
      weekly: 2,
    },
  },
})
