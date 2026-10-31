import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@znight/compiler',
  description: 'Znight compiler: Vite plugin that analyzes your code and generates the DI container at build time',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'znight',
    'vite-plugin',
    'bun-plugin',
    'compiler',
    'dependency-injection',
    'codegen',
    'static-analysis',
    'decorators',
  ],
  links: {
    github: 'https://github.com/znight-org/znight',
    npm: 'https://www.npmjs.com/package/@znight/compiler',
    website: 'https://github.com/znight-org/znight/tree/main/packages/compiler#readme',
  },
  source: {
    github: 'znight-org/znight',
    npm: '@znight/compiler',
  },
})
