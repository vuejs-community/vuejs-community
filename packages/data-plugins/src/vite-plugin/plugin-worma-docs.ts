import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'plugin-worma-docs',
  description: 'Vite/Webpack plugin: generate a local OpenAPI handbook (method, path, request, response) via wormajs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
    'openapi',
    'swagger',
    'worma',
    'api-docs',
  ],
  links: {
    github: 'https://github.com/Leadgq/vite-plugin-worma-docs',
    npm: 'https://www.npmjs.com/package/plugin-worma-docs',
    website: 'https://github.com/Leadgq/vite-plugin-worma-docs#readme',
  },
  source: {
    github: 'Leadgq/vite-plugin-worma-docs',
    npm: 'plugin-worma-docs',
  },
})
