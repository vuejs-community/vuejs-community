import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-mdx-raw-plugin',
  description: 'A vite plugin for getting mdx file into raw string',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'mdx',
    'raw',
  ],
  source: {
    github: 'Mikaleb/vite-mdx-raw-plugin',
    npm: 'vite-mdx-raw-plugin',
  },
  links: {
    github: 'https://github.com/Mikaleb/vite-mdx-raw-plugin',
    npm: 'https://www.npmjs.com/package/vite-mdx-raw-plugin',
    website: 'https://github.com/Mikaleb/vite-mdx-raw-plugin#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 7,
      weekly: 1,
    },
  },
})
