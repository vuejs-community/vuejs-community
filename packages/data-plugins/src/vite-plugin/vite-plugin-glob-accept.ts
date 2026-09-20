import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-glob-accept',
  description: '```ts import.meta.hot.accept([   \'./a.js\',   \'./b.js\',   \'./c.js\',   \'./d.js\',   \'./e.js\',   \'./f.js\' ], dosomething) // replace with import.meta.hot.accept([\'./*.js\'], dosomething) ```',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'hot reload',
    'hot module replacement',
    'hmr',
  ],
  links: {
    github: 'https://github.com/NWYLZW/jiek',
    npm: 'https://www.npmjs.com/package/vite-plugin-glob-accept',
    website: 'https://github.com/NWYLZW/jiek/blob/master/packages/vite-plugins/glob-accept/README.md',
  },
  source: {
    github: 'NWYLZW/jiek',
    npm: 'vite-plugin-glob-accept',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 107,
      weekly: 11,
    },
  },
})
