import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-barrel-subpath-imports',
  description: 'Vite plugin that rewrites barrel-file imports into per-subpath imports at transform time, avoiding the full-barrel inline-sourcemap cost that hangs DevTools on every dev-server page load.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'barrel',
    'tree-shaking',
    'sourcemap',
    'dev-server-performance',
  ],
  links: {
    github: 'https://github.com/ramirezcgn/vite-plugin-barrel-subpath-imports',
    npm: 'https://www.npmjs.com/package/vite-plugin-barrel-subpath-imports',
    website: 'https://github.com/ramirezcgn/vite-plugin-barrel-subpath-imports#readme',
  },
  source: {
    github: 'ramirezcgn/vite-plugin-barrel-subpath-imports',
    npm: 'vite-plugin-barrel-subpath-imports',
  },
})
