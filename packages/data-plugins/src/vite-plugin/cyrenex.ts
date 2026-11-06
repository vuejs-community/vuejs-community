import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cyrenex',
  description: 'Full-stack Elysia with Vite dev server, pondi dependency injection and Eden types.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun',
    'dependency-injection',
    'eden',
    'elysia',
    'fullstack',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cyrenex/core',
    npm: 'https://www.npmjs.com/package/cyrenex',
    website: 'https://github.com/cyrenex/core#readme',
  },
  source: {
    github: 'cyrenex/core',
    npm: 'cyrenex',
  },
})
