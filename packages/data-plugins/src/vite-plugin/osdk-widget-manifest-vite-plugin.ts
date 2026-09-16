import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@osdk/widget-manifest-vite-plugin',
  description: 'A vite plugin that will extract parameter definitions from TS/JS files + entrypoint info into a manifest file to be uploaded to Foundry ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'palantir/osdk-ts',
    npm: '@osdk/widget-manifest-vite-plugin',
  },
  links: {
    github: 'https://github.com/palantir/osdk-ts',
    npm: 'https://www.npmjs.com/package/@osdk/widget-manifest-vite-plugin',
    website: 'https://github.com/palantir/osdk-ts#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 47,
      weekly: 10,
    },
  },
})
