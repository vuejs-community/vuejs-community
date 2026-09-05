import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prisma-hmr',
  description: 'This Vite plugin monitors changes to your Prisma schema file and ensures that the Prisma client is regenerated seamlessly, without needing to restart your development server. It automatically shuts down the Prisma binary process and regenerates the Prisma',
  version: '0.0.8',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'prisma',
    'hmr',
    'prisma hmr',
    'prisma orm',
    'vite prisma plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/sliterok/vite-plugin-prisma-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-prisma-hmr',
  },
  stats: {
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
