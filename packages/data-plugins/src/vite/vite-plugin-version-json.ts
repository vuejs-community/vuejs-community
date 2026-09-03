import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-json',
  description: 'Generate a version.json file based on the version number of the package.json file and support custom configuration.',
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
