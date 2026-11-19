import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-zip',
  description: 'Vite plugin that zips the dist folder after build. jszip is an optional peer dependency, loaded only when zipping.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'zip',
    'dist',
    'compression',
    'archive',
    'build',
    'pack',
  ],
  links: {
    github: 'https://github.com/mic-zhou/vite-zip',
    npm: 'https://www.npmjs.com/package/vite-zip',
    website: 'https://github.com/mic-zhou/vite-zip#readme',
  },
  source: {
    github: 'mic-zhou/vite-zip',
    npm: 'vite-zip',
  },
})
