import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cjs-interop',
  description: 'Vite plugin to unwrap default imports from CJS dependencies during SSR',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'cjs',
    'interop',
    'ssr',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-cjs-interop',
    website: 'https://github.com/cyco130/vite-plugin-cjs-interop#readme',
  },
  source: {
    npm: 'vite-plugin-cjs-interop',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1193509,
      weekly: 219197,
    },
  },
})
