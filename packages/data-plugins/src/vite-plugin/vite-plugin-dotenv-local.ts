import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-dotenv-local',
  description: 'Vite plugin that plugs dotenv-local into Vite\'s config lifecycle, so env files are loaded identically in `vite dev` and `vite build`.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dotenv',
    'dotenv-local',
    'environment-variables',
    'env',
    'import.meta.env',
  ],
  links: {
    github: 'https://github.com/yracnet/dotenv-local',
    npm: 'https://www.npmjs.com/package/vite-plugin-dotenv-local',
    website: 'https://github.com/yracnet/dotenv-local',
  },
  source: {
    github: 'yracnet/dotenv-local',
    npm: 'vite-plugin-dotenv-local',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 45,
      weekly: 5,
    },
  },
})
