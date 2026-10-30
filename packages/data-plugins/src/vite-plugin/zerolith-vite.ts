import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@zerolith/vite',
  description: 'The Vite plugin for zerolith: hot module replacement that swaps components in place and keeps named signal state, with no effect on production builds',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'zerolith',
    'vite',
    'vite-plugin',
    'hmr',
  ],
  links: {
    github: 'https://github.com/molexxxx/zerolith',
    npm: 'https://www.npmjs.com/package/@zerolith/vite',
    website: 'https://github.com/molexxxx/zerolith#readme',
  },
  source: {
    github: 'molexxxx/zerolith',
    npm: '@zerolith/vite',
  },
})
