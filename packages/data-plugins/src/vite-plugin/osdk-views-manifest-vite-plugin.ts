import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@osdk/views-manifest-vite-plugin',
  description: 'A vite plugin that will extract parameter definitions from TS/JS files + entrypoint info into a manifest file to be uploaded to Foundry ',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/palantir/osdk-ts',
    npm: 'https://www.npmjs.com/package/@osdk/views-manifest-vite-plugin',
    website: 'https://github.com/palantir/osdk-ts#readme',
  },
  source: {
    github: 'palantir/osdk-ts',
    npm: '@osdk/views-manifest-vite-plugin',
  },
  stats: {
    stars: 91,
    downloads: {
      monthly: 29,
      weekly: 2,
    },
  },
})
