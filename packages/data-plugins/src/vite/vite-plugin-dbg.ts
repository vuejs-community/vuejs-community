import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dbg',
  description: '```js dbg(); dbg("hello"); dbg(1 + 1, () => {}, Symbol()); /** */ dbg(undefined); ```',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'vite-plugin-dbg',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-dbg',
  },
  stats: {
    downloads: {
      monthly: 8,
      weekly: 1,
    },
  },
})
