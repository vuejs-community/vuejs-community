import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yoshintame/config-kit',
  description: 'Lazy, Standard Schema-validated configuration with pluggable sources and a Vite plugin for runtime config injection',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'config',
    'configuration',
    'standard-schema',
    'zod',
    'valibot',
    'arktype',
    'vite',
    'vite-plugin',
    'runtime-config',
    'yaml',
    'env',
  ],
  links: {
    github: 'https://github.com/yoshintame/config-kit',
    npm: 'https://www.npmjs.com/package/@yoshintame/config-kit',
    website: 'https://github.com/yoshintame/config-kit#readme',
  },
  source: {
    github: 'yoshintame/config-kit',
    npm: '@yoshintame/config-kit',
  },
})
