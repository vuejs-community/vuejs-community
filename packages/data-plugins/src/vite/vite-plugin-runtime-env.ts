import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-runtime-env',
  description: 'Vite plugin which enables you to configure your environment variables when deploying your app.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'docker',
    'environment',
    '12-factor',
    'vite',
    'dot-env',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/micha149/vite-plugin-runtime-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-runtime-env',
  },
  stats: {
    downloads: {
      monthly: 146495,
      weekly: 44544,
    },
  },
})
