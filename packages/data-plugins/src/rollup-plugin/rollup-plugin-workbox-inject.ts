import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-workbox-inject',
  description: 'Injects a Workbox precache manifest into a Rollup-compiled service worker.',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'workbox',
  ],
  links: {
    github: 'https://github.com/chromeos/static-site-scaffold-modules',
    npm: 'https://www.npmjs.com/package/rollup-plugin-workbox-inject',
    website: 'https://github.com/chromeos/static-site-scaffold-modules#readme',
  },
  source: {
    github: 'chromeos/static-site-scaffold-modules',
    npm: 'rollup-plugin-workbox-inject',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 83,
      weekly: 19,
    },
  },
})
