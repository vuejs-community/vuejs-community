import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ls-stack/vite-plugin-initial-build-time',
  description: 'Vite plugin that measures and reports the initial dev and build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'build-time',
    'performance',
    'dev-server',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@ls-stack/vite-plugin-initial-build-time',
  },
  source: {
    npm: '@ls-stack/vite-plugin-initial-build-time',
  },
})
