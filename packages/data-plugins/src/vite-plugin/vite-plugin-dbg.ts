import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dbg',
  description: '```js dbg(); dbg("hello"); dbg(1 + 1, () => {}, Symbol()); /** */ dbg(undefined); ```',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'rollup-plugin',
    'vite-plugin-dbg',
  ],
  source: {
    npm: 'vite-plugin-dbg',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-dbg',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 13,
      weekly: 4,
    },
  },
})
