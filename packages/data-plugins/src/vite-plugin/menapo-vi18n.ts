import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/vi18n',
  description: 'i18n toolkit for Vite: source-as-id messages, per-route translation bundles, SSR and in-place locale switching in every framework',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gettext',
    'i18n',
    'icu',
    'internationalization',
    'po',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/vi18n',
    website: 'https://github.com/menapo/kit/blob/main/packages/vi18n/docs/guide/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/vi18n',
  },
})
