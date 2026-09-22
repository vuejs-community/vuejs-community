import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@sveltekit-i18n/typegen',
  description: 'Generates the TranslationSchema type for sveltekit-i18n from an app\'s own translation files.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'vite-plugin',
    'i18n',
    'typescript',
    'codegen',
    'sveltekit-i18n',
  ],
  links: {
    github: 'https://github.com/sveltekit-i18n/typegen',
    npm: 'https://www.npmjs.com/package/@sveltekit-i18n/typegen',
    website: 'https://sveltekit-i18n.github.io',
  },
  source: {
    github: 'sveltekit-i18n/typegen',
    npm: '@sveltekit-i18n/typegen',
  },
})
