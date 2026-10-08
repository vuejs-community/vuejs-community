import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@excom/vite-plugin-nucleus',
  description: 'Vite plugin that builds, serves and previews a Nucleus Stack site',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin-nucleus',
    'tool',
    'vite-plugin',
    'nucleus',
    'static-site',
    'web-components',
  ],
  links: {
    github: 'https://github.com/excom-dev/nucleus',
    npm: 'https://www.npmjs.com/package/@excom/vite-plugin-nucleus',
    website: 'https://github.com/excom-dev/nucleus/tree/main/packages/vite-plugin-nucleus/support/docs/README.md',
  },
  source: {
    github: 'excom-dev/nucleus',
    npm: '@excom/vite-plugin-nucleus',
  },
})
