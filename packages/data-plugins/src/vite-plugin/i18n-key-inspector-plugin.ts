import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'i18n-key-inspector-plugin',
  description: 'Dev-only Vite/webpack plugin that stamps rendered DOM elements with their i18n message keys (data-i18n-path), so rendered text can be traced back to its message key in DevTools',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'i18n',
    'vite-plugin',
    'webpack-plugin',
    'inspector',
    'devtools',
  ],
  links: {
    github: 'https://github.com/electroluxcode/i18n-key-inspector-plugin',
    npm: 'https://www.npmjs.com/package/i18n-key-inspector-plugin',
    website: 'https://github.com/electroluxcode/i18n-key-inspector-plugin#readme',
  },
  source: {
    github: 'electroluxcode/i18n-key-inspector-plugin',
    npm: 'i18n-key-inspector-plugin',
  },
})
