import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@soroush.tech/vite-plugin-msw-server',
  description: 'Make server-side rendering deterministic in end-to-end tests: an msw/node mock server inside Vite, so SSR loaders and SSG prerendering resolve against your mocks instead of a live API.',
  version: '1.0.5',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/soroush-tech/core',
    npm: 'https://www.npmjs.com/package/@soroush.tech/vite-plugin-msw-server',
  },
  stats: {
    downloads: {
      monthly: 551,
      weekly: 19,
    },
  },
})
