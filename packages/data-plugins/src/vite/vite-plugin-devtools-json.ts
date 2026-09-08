import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-devtools-json',
  description: 'Vite plugin for generating `com.chrome.devtools.json` on the fly in the devserver.',
  icon: 'logos:vite-icon',
  version: '1.1.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'chrome-devtools',
    'devtools',
    'chrome',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'ChromeDevTools/vite-plugin-devtools-json',
    npm: 'vite-plugin-devtools-json',
  },
  links: {
    github: 'https://github.com/ChromeDevTools/vite-plugin-devtools-json',
    npm: 'https://www.npmjs.com/package/vite-plugin-devtools-json',
  },
  stats: {
    downloads: {
      monthly: 1407925,
      weekly: 358401,
    },
  },
})
