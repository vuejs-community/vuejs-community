import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@mongez/vite',
  description: 'Drop-in Vite plugin for SPA workflows: typed env loading with NODE_ENV-aware resolution, in-HTML env interpolation, tsconfig path aliasing, auto-open dev server, post-build zip, .htaccess generation, and pre-render integration.',
  version: '2.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hassanzohdy/mongez-vite',
    npm: 'https://www.npmjs.com/package/@mongez/vite',
  },
  stats: {
    downloads: {
      monthly: 497,
      weekly: 97,
    },
  },
})
