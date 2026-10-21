import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@realmorg/vite-plugin',
  description: 'Vite plugin that pre-assembles REALM components for strict Content Security Policies and writes a custom-elements.json manifest.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'realm',
    'vite-plugin',
    'web-components',
    'csp',
  ],
  links: {
    github: 'https://github.com/realmorg/realm',
    npm: 'https://www.npmjs.com/package/@realmorg/vite-plugin',
    website: 'https://github.com/realmorg/realm#readme',
  },
  source: {
    github: 'realmorg/realm',
    npm: '@realmorg/vite-plugin',
  },
})
