import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-html-entry',
  description: 'Import an .html file with ?html to get its built URL - Vite registers it as a real build entry (added to rollupOptions.input automatically) so its <link> and <script> tags are processed like any other page, not copied as a static asset. Useful for multi-p',
  icon: 'logos:vite-icon',
  version: '0.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'html',
    'html-entry',
    'multi-page',
    'multi-page-app',
    'mpa',
    'rollup-plugin',
    'rollupOptions',
    'build-entry',
    'virtual-module',
    'iframe',
    'chrome-extension',
    'browser-extension',
    'webextension',
    'manifest-v3',
    'extension',
    'typescript',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'SheikhAminul/vite-plugin-html-entry',
    npm: 'vite-plugin-html-entry',
  },
  links: {
    github: 'https://github.com/SheikhAminul/vite-plugin-html-entry',
    npm: 'https://www.npmjs.com/package/vite-plugin-html-entry',
  },
  stats: {
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
