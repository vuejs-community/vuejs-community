import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dotenv-local',
  description: 'Vite plugin that plugs dotenv-local into Vite\'s config lifecycle, so env files are loaded identically in `vite dev` and `vite build`.',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'dotenv',
    'dotenv-local',
    'environment-variables',
    'env',
    'import.meta.env',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/yracnet/dotenv-local',
    npm: 'https://www.npmjs.com/package/vite-plugin-dotenv-local',
  },
  stats: {
    downloads: {
      monthly: 42,
      weekly: 11,
    },
  },
})
