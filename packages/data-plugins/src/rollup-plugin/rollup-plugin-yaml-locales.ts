import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-yaml-locales',
  description: 'Converts a single YAML file to multiple messages.json locale files',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup-plugin',
    'vite-plugin',
    'chrome-extension',
    'browser-extension',
    'yaml',
    'i18n',
  ],
  links: {
    github: 'https://github.com/ukhan/rollup-plugin-yaml-locales',
    npm: 'https://www.npmjs.com/package/rollup-plugin-yaml-locales',
    website: 'https://github.com/ukhan/rollup-plugin-yaml-locales#readme',
  },
  source: {
    github: 'ukhan/rollup-plugin-yaml-locales',
    npm: 'rollup-plugin-yaml-locales',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 5,
    },
  },
})
