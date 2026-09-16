import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ohos-ports/vite-plugin-cjs-interop',
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
  source: {
    github: 'ohos-ports/ohos-ports',
    npm: '@ohos-ports/vite-plugin-cjs-interop',
  },
  links: {
    github: 'https://github.com/ohos-ports/ohos-ports',
    npm: 'https://www.npmjs.com/package/@ohos-ports/vite-plugin-cjs-interop',
    website: 'https://github.com/ohos-ports/ohos-ports#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 78,
      weekly: 78,
    },
  },
})
