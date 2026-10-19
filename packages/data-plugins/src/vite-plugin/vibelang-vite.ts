import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vibelang-vite',
  description: 'Compile VibeLang source modules with vibelang in Vite and Vitest',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vibelang',
    'effect',
    'vite',
    'vite-plugin',
    'vitest',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vibelang-vite',
    website: 'https://effeck.dev',
  },
  source: {
    npm: 'vibelang-vite',
  },
})
