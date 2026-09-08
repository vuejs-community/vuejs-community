import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-workbox-inject',
  description: 'Injects a Workbox precache manifest into a Rollup-compiled service worker.',
  icon: 'logos:rollupjs',
  version: '2.0.0',
  category: 'plugin',
  tags: [
    'rollup-plugin',
    'workbox',
  ],
  types: [
    'rollup-plugin',
  ],
  source: {
    github: 'chromeos/static-site-scaffold-modules',
    npm: 'rollup-plugin-workbox-inject',
  },
  links: {
    github: 'https://github.com/chromeos/static-site-scaffold-modules',
    npm: 'https://www.npmjs.com/package/rollup-plugin-workbox-inject',
  },
  stats: {
    downloads: {
      monthly: 70,
      weekly: 30,
    },
  },
})
