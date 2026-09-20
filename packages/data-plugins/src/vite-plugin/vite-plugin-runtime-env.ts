import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-runtime-env',
  description: 'Vite plugin which enables you to configure your environment variables when deploying your app.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'docker',
    'environment',
    '12-factor',
    'vite',
    'dot-env',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/micha149/vite-plugin-runtime-env',
    npm: 'https://www.npmjs.com/package/vite-plugin-runtime-env',
    website: 'https://github.com/micha149/vite-plugin-runtime-env#readme',
  },
  source: {
    github: 'micha149/vite-plugin-runtime-env',
    npm: 'vite-plugin-runtime-env',
  },
  stats: {
    stars: 35,
    downloads: {
      monthly: 157042,
      weekly: 37890,
    },
  },
})
