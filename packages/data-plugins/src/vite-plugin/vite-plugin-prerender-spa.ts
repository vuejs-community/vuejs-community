import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prerender-spa',
  description: 'Vite plugin to pre-render SPA routes into static HTML at build time while emitting accurate asset preloads for lazy imports the rendered routes actually trigger',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'prerender',
    'pre-render',
    'preload',
    'modulepreload',
    'spa',
    'ssr',
    'ssg',
    'lazy-import',
    'lazy-load',
  ],
  links: {
    github: 'https://github.com/silenaker/vite-plugin-prerender-spa',
    npm: 'https://www.npmjs.com/package/vite-plugin-prerender-spa',
    website: 'https://github.com/silenaker/vite-plugin-prerender-spa#readme',
  },
  source: {
    github: 'silenaker/vite-plugin-prerender-spa',
    npm: 'vite-plugin-prerender-spa',
  },
})
