import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-glob-accept',
  description: '```ts import.meta.hot.accept([   \'./a.js\',   \'./b.js\',   \'./c.js\',   \'./d.js\',   \'./e.js\',   \'./f.js\' ], dosomething) // replace with import.meta.hot.accept([\'./*.js\'], dosomething) ```',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'hot reload',
    'hot module replacement',
    'hmr',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NWYLZW/jiek',
    npm: 'https://www.npmjs.com/package/vite-plugin-glob-accept',
  },
  stats: {
    downloads: {
      monthly: 175,
      weekly: 19,
    },
  },
})
