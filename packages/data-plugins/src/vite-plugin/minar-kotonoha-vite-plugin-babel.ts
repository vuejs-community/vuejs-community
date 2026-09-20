import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@minar-kotonoha/vite-plugin-babel',
  description: 'Runs Babel in Vite during all commands',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'babel',
  ],
  links: {
    github: 'https://github.com/chengzhuo5/vite-plugin-babel',
    npm: 'https://www.npmjs.com/package/@minar-kotonoha/vite-plugin-babel',
    website: 'https://github.com/chengzhuo5/vite-plugin-babel#readme',
  },
  source: {
    github: 'chengzhuo5/vite-plugin-babel',
    npm: '@minar-kotonoha/vite-plugin-babel',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 3,
    },
  },
})
