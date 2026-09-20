import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-realm-uri',
  description: 'Import deduplicated references to intrinsic values using realm: scheme URIs',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'intrinsics',
    'paranoia',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/rollup-plugin-realm-uri',
  },
  source: {
    npm: 'rollup-plugin-realm-uri',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 130,
      weekly: 24,
    },
  },
})
