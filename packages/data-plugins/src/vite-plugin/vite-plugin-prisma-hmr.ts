import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prisma-hmr',
  description: 'This Vite plugin monitors changes to your Prisma schema file and ensures that the Prisma client is regenerated seamlessly, without needing to restart your development server. It automatically shuts down the Prisma binary process and regenerates the Prisma',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'prisma',
    'hmr',
    'prisma hmr',
    'prisma orm',
    'vite prisma plugin',
  ],
  source: {
    github: 'sliterok/vite-plugin-prisma-hmr',
    npm: 'vite-plugin-prisma-hmr',
  },
  links: {
    github: 'https://github.com/sliterok/vite-plugin-prisma-hmr',
    npm: 'https://www.npmjs.com/package/vite-plugin-prisma-hmr',
    website: 'https://github.com/sliterok/vite-plugin-prisma-hmr#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 10,
      weekly: 3,
    },
  },
})
