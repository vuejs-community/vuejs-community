import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-nestjs',
  description: 'Vite plugin to run NestJS with native ESM, Vite plugin ecosystem support, and automatic @nestjs/swagger metadata generation',
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
  links: {
    github: 'https://github.com/Alan-Gomes/vite-plugin-nestjs',
    npm: 'https://www.npmjs.com/package/vite-plugin-nestjs',
  },
  stats: {
    downloads: {
      monthly: 278,
      weekly: 27,
    },
  },
})
