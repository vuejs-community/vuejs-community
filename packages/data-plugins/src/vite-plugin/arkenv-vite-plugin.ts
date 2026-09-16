import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@arkenv/vite-plugin',
  description: 'ArkEnv plugin for Vite',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'arkenv',
    'arktype',
    'env',
    'environment-variables',
    'dotenv',
    'config',
    'validation',
    'typesafe',
    'standard-schema',
    'vite',
    'plugin',
    'vite-plugin',
  ],
  source: {
    github: 'yamcodes/arkenv',
    npm: '@arkenv/vite-plugin',
  },
  links: {
    github: 'https://github.com/yamcodes/arkenv',
    npm: 'https://www.npmjs.com/package/@arkenv/vite-plugin',
    website: 'https://arkenv.js.org',
  },
  stats: {
    stars: 141,
    downloads: {
      monthly: 9869,
      weekly: 1207,
    },
  },
})
