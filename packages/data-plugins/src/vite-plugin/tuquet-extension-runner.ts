import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@tuquet/extension-runner',
  description: 'Isomorphic web extension polyfill, mock runtime, and headless runner bundler for browser automation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'tuquet',
    'webextension',
    'polyfill',
    'chrome-extension',
    'headless-runner',
    'automation',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/tuquet/lib',
    npm: 'https://www.npmjs.com/package/@tuquet/extension-runner',
    website: 'https://github.com/tuquet/lib#readme',
  },
  source: {
    github: 'tuquet/lib',
    npm: '@tuquet/extension-runner',
  },
})
