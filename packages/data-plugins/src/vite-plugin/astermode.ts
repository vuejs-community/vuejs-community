import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'astermode',
  description: 'A Vite plugin that injects a draggable Dev Mode overlay during development.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'devtools',
    'overlay',
    'frontend',
  ],
  source: {
    github: 'marcuwynu23/AsterMode',
    npm: 'astermode',
  },
  links: {
    github: 'https://github.com/marcuwynu23/AsterMode',
    npm: 'https://www.npmjs.com/package/astermode',
    website: 'https://github.com/marcuwynu23/AsterMode#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 8,
      weekly: 2,
    },
  },
})
