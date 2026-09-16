import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-typedotenv',
  description: 'typedotenv plugin for webpack/vite (dotenv utility for TypeScript)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'dotenv',
    'typescript',
    'code-generator',
    'unplugin',
    'plugin',
    'webpack',
    'vite',
  ],
  source: {
    github: 'ssssota/typedotenv',
    npm: 'unplugin-typedotenv',
  },
  links: {
    github: 'https://github.com/ssssota/typedotenv',
    npm: 'https://www.npmjs.com/package/unplugin-typedotenv',
    website: 'https://github.com/ssssota/typedotenv#readme',
  },
  stats: {
    stars: 14,
    downloads: {
      monthly: 43,
      weekly: 5,
    },
  },
})
