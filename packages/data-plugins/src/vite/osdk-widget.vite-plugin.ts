import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@osdk/widget.vite-plugin',
  description: 'A vite plugin that will extract parameter definitions from TS/JS files + entrypoint info into a manifest file to be uploaded to Foundry ',
  version: '3.63.0',
  category: 'plugin',
  tags: [
    'vite-plugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/palantir/osdk-ts',
    npm: 'https://www.npmjs.com/package/@osdk/widget.vite-plugin',
  },
  stats: {
    downloads: {
      monthly: 21044,
      weekly: 5622,
    },
  },
})
