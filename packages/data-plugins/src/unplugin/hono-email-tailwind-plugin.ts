import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@hono-email/tailwind-plugin',
  description: 'Bundler plugin for Tailwind integration with hono-email.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'email',
    'hono',
    'tailwind',
    'unplugin',
    'vite',
  ],
  source: {
    github: 'hayatosc/hono-email',
    npm: '@hono-email/tailwind-plugin',
  },
  links: {
    github: 'https://github.com/hayatosc/hono-email',
    npm: 'https://www.npmjs.com/package/@hono-email/tailwind-plugin',
    website: 'https://github.com/hayatosc/hono-email#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 254,
      weekly: 114,
    },
  },
})
