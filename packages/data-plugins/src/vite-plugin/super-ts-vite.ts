import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@super-ts/vite',
  description: 'Vite plugin for Super: compiles .super files, enforces the architecture rules, generates the contracts registry.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'super',
    'super-ts',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/super-ts/super',
    npm: 'https://www.npmjs.com/package/@super-ts/vite',
    website: 'https://github.com/super-ts/super#readme',
  },
  source: {
    github: 'super-ts/super',
    npm: '@super-ts/vite',
  },
})
