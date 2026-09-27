import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'mappergen',
  description: 'Generate type-safe object mappers from TypeScript method signatures',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'typescript',
    'mapper',
    'object-mapping',
    'dto',
    'code-generation',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/Hoegsgaard/mappergen',
    npm: 'https://www.npmjs.com/package/mappergen',
    website: 'https://github.com/Hoegsgaard/mappergen#readme',
  },
  source: {
    github: 'Hoegsgaard/mappergen',
    npm: 'mappergen',
  },
})
