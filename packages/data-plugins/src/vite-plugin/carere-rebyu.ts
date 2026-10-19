import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@carere/rebyu',
  description: 'Visual UI reviews for any Vite project. Powered by SolidJS and Zaidan.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'feedback',
    'annotations',
    'solid-js',
    'zaidan',
  ],
  links: {
    github: 'https://github.com/carere/rebyu',
    npm: 'https://www.npmjs.com/package/@carere/rebyu',
  },
  source: {
    github: 'carere/rebyu',
    npm: '@carere/rebyu',
  },
})
