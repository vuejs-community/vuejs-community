import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-just-zip',
  description: 'A Vite plugin to zip your build output folder. Works with both ESM and CommonJS configs.',
  version: '1.0.5',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'vite',
    'zip',
    'archiver',
    'build',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Jarvis-Dong/vite-just-zip',
    npm: 'https://www.npmjs.com/package/vite-just-zip',
  },
  stats: {
    downloads: {
      monthly: 12,
      weekly: 6,
    },
  },
})
