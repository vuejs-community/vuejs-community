import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mdx',
  description: 'Write JSX in your Markdown with Nuxt and import Vue Components in your .mdx files',
  category: 'nuxt',
  types: [
    'Extensions',
  ],
  filter: [
    'community',
  ],
  links: {
    github: 'https://github.com/nuxt-community/mdx-module',
    npm: 'https://npmjs.com/package/@nuxtjs/mdx',
    website: 'https://mdx.nuxtjs.org',
  },
  source: {
    github: 'nuxt-community/mdx-module',
    npm: '@nuxtjs/mdx',
  },
  stats: {
    stars: 46,
    downloads: {
      monthly: 214,
      weekly: 22,
    },
  },
})
