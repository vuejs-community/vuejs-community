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
    github: 'https://github.com/smithersai/vibelang',
    npm: 'https://www.npmjs.com/package/vibelang-vite',
    website: 'https://vibelang.sh',
  },
  source: {
    github: 'smithersai/vibelang',
    npm: 'vibelang-vite',
  },
})
