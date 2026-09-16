import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@soroush.tech/vite-plugin-msw-server',
  description: 'Make server-side rendering deterministic in end-to-end tests: an msw/node mock server inside Vite, so SSR loaders and SSG prerendering resolve against your mocks instead of a live API.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'msw',
    'ssg',
    'ssr',
    'prerender',
    'mock',
    'vike',
    'testing',
  ],
  source: {
    github: 'soroush-tech/core',
    npm: '@soroush.tech/vite-plugin-msw-server',
  },
  links: {
    github: 'https://github.com/soroush-tech/core',
    npm: 'https://www.npmjs.com/package/@soroush.tech/vite-plugin-msw-server',
    website: 'https://soroush.tech/vite-plugin-msw-server/',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 420,
      weekly: 14,
    },
  },
})
