import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@brickkit/cli',
  description: 'CLI and server engine for Brick-TS',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'typescript',
    'bun',
    'cli',
    'dev-server',
    'elysia',
    'openapi-generator',
    'typed-client',
    'vite-plugin',
    'build-tool',
    'mcp',
  ],
  links: {
    github: 'https://github.com/Chandraprakash-Darji/brick',
    npm: 'https://www.npmjs.com/package/@brickkit/cli',
    website: 'https://brickkit.dev',
  },
  source: {
    github: 'Chandraprakash-Darji/brick',
    npm: '@brickkit/cli',
  },
})
