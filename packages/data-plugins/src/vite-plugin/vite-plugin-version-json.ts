import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-version-json',
  description: 'Generate a version.json file based on the version number of the package.json file and support custom configuration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vite plugin',
    'version',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-version-json',
  },
  source: {
    npm: 'vite-plugin-version-json',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 70,
      weekly: 7,
    },
  },
})
