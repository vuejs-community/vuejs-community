import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@compelem/compiler',
  description: 'A compiler for compelem',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'compelem',
    'compiler',
    'webcomponents',
    'vite-plugin',
    'rolldown',
    'reactive',
  ],
  links: {
    github: 'https://github.com/holyhigh2/compelem-compiler',
    npm: 'https://www.npmjs.com/package/@compelem/compiler',
    website: 'https://github.com/holyhigh2/compelem-compiler#readme',
  },
  source: {
    github: 'holyhigh2/compelem-compiler',
    npm: '@compelem/compiler',
  },
})
