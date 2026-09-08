import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-dgnotify',
  description: 'Send rollup build notifications via datagram to a UDP port',
  icon: 'logos:rollupjs',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'rollup',
    'rollup-plugin',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'shanewholloway/rollup-plugin-dgnotify',
    npm: 'rollup-plugin-dgnotify',
  },
  links: {
    github: 'https://github.com/shanewholloway/rollup-plugin-dgnotify',
    npm: 'https://www.npmjs.com/package/rollup-plugin-dgnotify',
  },
  stats: {
    downloads: {
      monthly: 24,
      weekly: 4,
    },
  },
})
