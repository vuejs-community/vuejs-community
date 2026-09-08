import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nestjs',
  description: 'Vite plugin to run NestJS with native ESM, Vite plugin ecosystem support, and automatic @nestjs/swagger metadata generation',
  icon: 'logos:vite-icon',
  version: '0.3.1',
  category: 'plugin',
  tags: [
    'nestjs',
    'swagger',
    'vite',
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Alan-Gomes/vite-plugin-nestjs',
    npm: 'vite-plugin-nestjs',
  },
  links: {
    github: 'https://github.com/Alan-Gomes/vite-plugin-nestjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-nestjs',
  },
  stats: {
    downloads: {
      monthly: 276,
      weekly: 28,
    },
  },
})
