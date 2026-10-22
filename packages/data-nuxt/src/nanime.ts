import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'nanime',
  description: 'Anime.js v4 integration: SSR-safe, auto-imported composables and transitions for animation, scroll, drag and text',
  icon: 'icon:nanime',
  category: 'nuxt',
  types: [
    'Animation',
  ],
  filter: [
    '3rd-party',
  ],
  links: {
    github: 'https://github.com/astraldev/nanime',
    npm: 'https://npmjs.com/package/nanime',
    website: 'https://nanimejs.netlify.app/',
  },
  source: {
    github: 'astraldev/nanime',
    npm: 'nanime',
  },
})
