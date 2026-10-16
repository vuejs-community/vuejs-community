import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'auto-types-api',
  description: 'Bridge between modules-page-routing API files and endpoint-kit: declare typed endpoints once, get a typed client generated for you',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'typescript',
    'api',
    'types',
    'codegen',
    'react-router',
    'modules-page-routing',
    'endpoint-kit',
    'type-safe',
    'standard-schema',
    'zod',
    'vite-plugin',
    'openapi',
    'ssr',
  ],
  links: {
    github: 'https://github.com/sonicname/auto-types-api',
    npm: 'https://www.npmjs.com/package/auto-types-api',
    website: 'https://github.com/sonicname/auto-types-api#readme',
  },
  source: {
    github: 'sonicname/auto-types-api',
    npm: 'auto-types-api',
  },
})
