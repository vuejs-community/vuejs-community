import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dgnotify',
  description: 'Send rollup build notifications via datagram to a UDP port',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-dgnotify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dgnotify',
    website: 'https://github.com/shanewholloway/rollup-plugin-dgnotify#readme',
  },
  source: {
    github: 'shanewholloway/rollup-plugin-dgnotify',
    npm: 'rollup-plugin-dgnotify',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 26,
      weekly: 4,
    },
  },
})
