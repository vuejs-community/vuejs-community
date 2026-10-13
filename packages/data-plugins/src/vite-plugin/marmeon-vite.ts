import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@marmeon/vite',
  description: 'The Vite plugin for Marmeon apps: resolution conditions, constructor injection, entries, and virtual modules. UI-agnostic — the adapter\'s own plugin (e.g. @vitejs/plugin-react) goes next to it.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'marmeon',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/marmeon/marmeon',
    npm: 'https://www.npmjs.com/package/@marmeon/vite',
    website: 'https://github.com/marmeon/marmeon/tree/main/packages/vite#readme',
  },
  source: {
    github: 'marmeon/marmeon',
    npm: '@marmeon/vite',
  },
})
