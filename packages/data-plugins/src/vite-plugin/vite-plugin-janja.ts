import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-janja',
  description: 'Vite and Rollup plugin that pre-compiles Janja templates',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'janja',
    'template',
  ],
  links: {
    github: 'https://github.com/vvenv/janja',
    npm: 'https://www.npmjs.com/package/vite-plugin-janja',
    website: 'https://janja.wenfu.dev',
  },
  source: {
    github: 'vvenv/janja',
    npm: 'vite-plugin-janja',
  },
})
