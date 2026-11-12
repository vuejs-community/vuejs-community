import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'flimsy-vite',
  description: 'Vite dev server plugin for Flimsy visual-to-code synchronization',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'visual-editor',
    'react',
    'tailwind',
  ],
  links: {
    github: 'https://github.com/kuroi17/flimsy',
    npm: 'https://www.npmjs.com/package/flimsy-vite',
    website: 'https://github.com/kuroi17/flimsy#readme',
  },
  source: {
    github: 'kuroi17/flimsy',
    npm: 'flimsy-vite',
  },
})
