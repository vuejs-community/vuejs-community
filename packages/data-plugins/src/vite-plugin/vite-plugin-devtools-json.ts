import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-devtools-json',
  description: 'Vite plugin for generating `com.chrome.devtools.json` on the fly in the devserver.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'chrome-devtools',
    'devtools',
    'chrome',
  ],
  source: {
    github: 'ChromeDevTools/vite-plugin-devtools-json',
    npm: 'vite-plugin-devtools-json',
  },
  links: {
    github: 'https://github.com/ChromeDevTools/vite-plugin-devtools-json',
    npm: 'https://www.npmjs.com/package/vite-plugin-devtools-json',
    website: 'https://github.com/ChromeDevTools/vite-plugin-devtools-json#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 1275262,
      weekly: 254959,
    },
  },
})
