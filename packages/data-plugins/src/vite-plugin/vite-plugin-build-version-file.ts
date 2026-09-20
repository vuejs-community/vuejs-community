import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-build-version-file',
  description: 'A Vite plugin that emits version.json and injects version metadata into HTML.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vue3',
    'build-version',
    'version-json',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-build-version-file',
  },
  source: {
    npm: 'vite-plugin-build-version-file',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 320,
      weekly: 6,
    },
  },
})
