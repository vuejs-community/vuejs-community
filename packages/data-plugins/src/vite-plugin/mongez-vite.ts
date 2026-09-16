import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@mongez/vite',
  description: 'Drop-in Vite plugin for SPA workflows: typed env loading with NODE_ENV-aware resolution, in-HTML env interpolation, tsconfig path aliasing, auto-open dev server, post-build zip, .htaccess generation, and pre-render integration.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'dotenv',
    'tsconfig',
    'tsconfig-path',
    'tsconfig-path-resolver',
    'vite-tsconfig-path-resolver',
    'dotenv-in-html',
    'spa',
    'single-page-application',
    'htaccess',
    'prerender',
    'auto-open-browser',
    'build-compress',
    'zip-build',
    'PUBLIC_URL',
    'production-base-url',
    'env-in-html',
  ],
  source: {
    github: 'hassanzohdy/mongez-vite',
    npm: '@mongez/vite',
  },
  links: {
    github: 'https://github.com/hassanzohdy/mongez-vite',
    npm: 'https://www.npmjs.com/package/@mongez/vite',
    website: 'https://github.com/hassanzohdy/mongez-vite#readme',
  },
  stats: {
    stars: 4,
    downloads: {
      monthly: 461,
      weekly: 77,
    },
  },
})
