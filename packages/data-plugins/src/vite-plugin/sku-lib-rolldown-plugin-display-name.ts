import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sku-lib/rolldown-plugin-display-name',
  description: 'Rolldown/Vite plugin that adds `displayName` to React components, powered by oxc',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'displayName',
    'oxc',
    'react',
    'rolldown-plugin',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/seek-oss/sku',
    npm: 'https://www.npmjs.com/package/@sku-lib/rolldown-plugin-display-name',
  },
  source: {
    github: 'seek-oss/sku',
    npm: '@sku-lib/rolldown-plugin-display-name',
  },
})
