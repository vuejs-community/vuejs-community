import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lucy/vite',
  description: 'Vite plugin for Lucy: import .lucy files as JavaScript state machines',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lucy',
    'vite-plugin',
    'rolldown-plugin',
    'state-machine',
  ],
  links: {
    github: 'https://github.com/lucydsl/vite-plugin',
    npm: 'https://www.npmjs.com/package/@lucy/vite',
    website: 'https://lucy.spooky.click/install/#vite',
  },
  source: {
    github: 'lucydsl/vite-plugin',
    npm: '@lucy/vite',
  },
})
