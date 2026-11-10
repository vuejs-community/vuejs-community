import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-license-csv',
  description: 'Vite plugin that emits a CSV of the npm packages actually bundled into the build output (name, version, license, url)',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'license',
    'licenses',
    'csv',
    'oss',
    'third-party',
  ],
  links: {
    github: 'https://github.com/yano3nora/vite-plugin-license-csv',
    npm: 'https://www.npmjs.com/package/vite-plugin-license-csv',
    website: 'https://github.com/yano3nora/vite-plugin-license-csv#readme',
  },
  source: {
    github: 'yano3nora/vite-plugin-license-csv',
    npm: 'vite-plugin-license-csv',
  },
})
