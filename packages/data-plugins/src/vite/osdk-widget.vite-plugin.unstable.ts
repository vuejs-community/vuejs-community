import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@osdk/widget.vite-plugin.unstable',
  description: 'A vite plugin that will extract parameter definitions from TS/JS files + entrypoint info into a manifest file to be uploaded to Foundry ',
  version: '2.0.1',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/palantir/osdk-ts',
    npm: 'https://www.npmjs.com/package/@osdk/widget.vite-plugin.unstable',
  },
  stats: {
    downloads: {
      monthly: 277,
      weekly: 10,
    },
  },
})
