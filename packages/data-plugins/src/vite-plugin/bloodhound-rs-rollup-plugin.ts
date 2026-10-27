import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@bloodhound-rs/rollup-plugin',
  description: 'Rollup, Rolldown, and Vite plugin that scans emitted bundles with @bloodhound-rs/core during generateBundle',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'rollup-plugin',
    'rolldown-plugin',
    'vite-plugin',
    'static-analysis',
    'globals',
  ],
  links: {
    github: 'https://github.com/Justinidlerz/bloodhound',
    npm: 'https://www.npmjs.com/package/@bloodhound-rs/rollup-plugin',
    website: 'https://github.com/Justinidlerz/bloodhound#readme',
  },
  source: {
    github: 'Justinidlerz/bloodhound',
    npm: '@bloodhound-rs/rollup-plugin',
  },
})
