import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@osdk/widget.vite-plugin',
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
    npm: 'https://www.npmjs.com/package/@osdk/widget.vite-plugin',
    website: 'https://github.com/palantir/osdk-ts#readme',
  },
  source: {
    github: 'palantir/osdk-ts',
    npm: '@osdk/widget.vite-plugin',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 19472,
      weekly: 4803,
    },
  },
})
