import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@keboola/vite-plugin-kai-preview',
  description: 'Vite plugin for Keboola data apps: pick parts of the page in Keboola\'s app preview and tell Kai where each is written',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'keboola',
    'kai',
    'vite',
    'vite-plugin',
    'react',
    'data-app',
  ],
  links: {
    github: 'https://github.com/keboola/ui',
    npm: 'https://www.npmjs.com/package/@keboola/vite-plugin-kai-preview',
    website: 'https://github.com/keboola/ui/tree/main/packages/vite-plugin-kai-preview#readme',
  },
  source: {
    github: 'keboola/ui',
    npm: '@keboola/vite-plugin-kai-preview',
  },
})
