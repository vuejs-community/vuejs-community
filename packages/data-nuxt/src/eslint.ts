import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'eslint',
  description: 'Project-aware, easy-to-use, extensible and future-proof ESLint integration.',
  icon: 'icon:nuxt',
  category: 'nuxt',
  types: [
    'Devtools',
  ],
  filter: [
    'official',
  ],
  links: {
    github: 'https://github.com/nuxt/eslint',
    npm: 'https://npmjs.com/package/@nuxt/eslint',
    website: 'https://nuxt.com/modules/eslint',
  },
  source: {
    github: 'nuxt/eslint',
    npm: '@nuxt/eslint',
  },
})
