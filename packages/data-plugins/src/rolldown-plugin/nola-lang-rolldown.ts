import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nola-lang/rolldown',
  description: 'Rolldown plugin for Nola (.tsi)',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'nola',
    'rolldown',
    'rolldown-plugin',
    'llm',
    'ai',
  ],
  source: {
    github: 'nola-lang/nola',
    npm: '@nola-lang/rolldown',
  },
  links: {
    github: 'https://github.com/nola-lang/nola',
    npm: 'https://www.npmjs.com/package/@nola-lang/rolldown',
    website: 'https://github.com/nola-lang/nola#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1109,
      weekly: 459,
    },
  },
})
