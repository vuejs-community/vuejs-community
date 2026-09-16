import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-just-zip',
  description: 'A Vite plugin to zip your build output folder. Works with both ESM and CommonJS configs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'zip',
    'archiver',
    'build',
  ],
  source: {
    github: 'Jarvis-Dong/vite-just-zip',
    npm: 'vite-just-zip',
  },
  links: {
    github: 'https://github.com/Jarvis-Dong/vite-just-zip',
    npm: 'https://www.npmjs.com/package/vite-just-zip',
    website: 'https://github.com/Jarvis-Dong/vite-just-zip#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 12,
      weekly: 0,
    },
  },
})
