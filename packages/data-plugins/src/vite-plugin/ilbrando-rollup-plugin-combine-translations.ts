import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ilbrando/rollup-plugin-combine-translations',
  description: 'Rollup/Vite plugin that combines translations declared next to the code into one i18next resource object.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'i18n',
    'i18next',
  ],
  links: {
    github: 'https://github.com/ilbrando/ilbrando',
    npm: 'https://www.npmjs.com/package/@ilbrando/rollup-plugin-combine-translations',
    website: 'https://github.com/ilbrando/ilbrando',
  },
  source: {
    github: 'ilbrando/ilbrando',
    npm: '@ilbrando/rollup-plugin-combine-translations',
  },
})
