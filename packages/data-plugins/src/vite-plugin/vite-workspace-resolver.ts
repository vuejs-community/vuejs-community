import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-workspace-resolver',
  description: 'Vite and Vitest plugin that resolves workspace packages\' exports-map subpaths and deep src/ imports, without per-package aliases.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vitest',
    'vite-plugin',
    'monorepo',
    'pnpm-workspace',
    'typescript',
  ],
  links: {
    github: 'https://github.com/arnaud-zg/packages',
    npm: 'https://www.npmjs.com/package/vite-workspace-resolver',
    website: 'https://github.com/arnaud-zg/packages/tree/main/packages/vite-workspace-resolver#readme',
  },
  source: {
    github: 'arnaud-zg/packages',
    npm: 'vite-workspace-resolver',
  },
})
