import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@nooh-ts/plugin',
  description: 'Bundler integrations for Nooh.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'nooh',
    'hono',
    'unplugin',
    'vite',
    'rollup',
    'rolldown',
    'webpack',
    'rspack',
    'esbuild',
  ],
  source: {
    github: 'nehu3n/nooh',
    npm: '@nooh-ts/plugin',
  },
  links: {
    github: 'https://github.com/nehu3n/nooh',
    npm: 'https://www.npmjs.com/package/@nooh-ts/plugin',
    website: 'https://nooh-ts.pages.dev',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 0,
      weekly: 0,
    },
  },
})
