import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nestjs',
  description: 'Vite plugin to run NestJS with native ESM, Vite plugin ecosystem support, and automatic @nestjs/swagger metadata generation',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'nestjs',
    'swagger',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'Alan-Gomes/vite-plugin-nestjs',
    npm: 'vite-plugin-nestjs',
  },
  links: {
    github: 'https://github.com/Alan-Gomes/vite-plugin-nestjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-nestjs',
    website: 'https://github.com/Alan-Gomes/vite-plugin-nestjs#readme',
  },
  stats: {
    stars: 15,
    downloads: {
      monthly: 111,
      weekly: 29,
    },
  },
})
