import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-cjs-interop',
  description: 'Vite plugin to unwrap default imports from CJS dependencies during SSR',
  version: '4.0.3',
  category: 'plugin',
  tags: [
    'cjs',
    'interop',
    'ssr',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-cjs-interop',
  },
  stats: {
    downloads: {
      monthly: 1355328,
      weekly: 330874,
    },
  },
})
