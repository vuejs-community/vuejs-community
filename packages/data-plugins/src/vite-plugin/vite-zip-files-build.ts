import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-zip-files-build',
  description: 'Vite plugin that zips the build output after every build. Cross-platform, zero dependencies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'zip',
    'build',
    'files',
  ],
  links: {
    github: 'https://github.com/mendesjorge/vite-zip-files-build',
    npm: 'https://www.npmjs.com/package/vite-zip-files-build',
    website: 'https://github.com/mendesjorge/vite-zip-files-build',
  },
  source: {
    github: 'mendesjorge/vite-zip-files-build',
    npm: 'vite-zip-files-build',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 62,
      weekly: 3,
    },
  },
})
