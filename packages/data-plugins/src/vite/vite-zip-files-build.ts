import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-zip-files-build',
  description: 'Vite plugin that zips the build output after every build. Cross-platform, zero dependencies.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'zip',
    'build',
    'files',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mendesjorge/vite-zip-files-build',
    npm: 'https://www.npmjs.com/package/vite-zip-files-build',
  },
  stats: {
    downloads: {
      monthly: 48,
      weekly: 13,
    },
  },
})
