import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@monocle.sh/vite-plugin',
  description: 'Vite plugin that injects your release into the Monocle Browser SDK and uploads source maps at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'monocle',
    'observability',
    'opentelemetry',
    'release',
    'sourcemaps',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/monocle-sh/js-sdk',
    npm: 'https://www.npmjs.com/package/@monocle.sh/vite-plugin',
    website: 'https://github.com/monocle-sh/js-sdk/tree/main/packages/vite-plugin',
  },
  source: {
    github: 'monocle-sh/js-sdk',
    npm: '@monocle.sh/vite-plugin',
  },
})
