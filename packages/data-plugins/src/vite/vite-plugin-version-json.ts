import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-json',
  description: 'Generate a version.json file based on the version number of the package.json file and support custom configuration.',
  icon: 'logos:vite-icon',
  version: '0.0.1',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'vite plugin',
    'version',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-version-json',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-version-json',
  },
  stats: {
    downloads: {
      monthly: 119,
      weekly: 36,
    },
  },
})
