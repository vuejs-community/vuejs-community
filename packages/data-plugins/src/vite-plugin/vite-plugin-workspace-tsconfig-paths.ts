import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-workspace-tsconfig-paths',
  description: 'Vite plugin that maps tsconfig `paths` per importing file\'s workspace — the file that issues the import decides which tsconfig (and thus which alias rules) applies. Supports cross-repository `extends` chains with TypeScript-native semantics.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tsconfig',
    'paths',
    'workspaces',
    'monorepo',
    'multi-repo',
  ],
  links: {
    github: 'https://github.com/w12594822/workspace-tsconfig-paths',
    npm: 'https://www.npmjs.com/package/vite-plugin-workspace-tsconfig-paths',
    website: 'https://github.com/w12594822/workspace-tsconfig-paths#readme',
  },
  source: {
    github: 'w12594822/workspace-tsconfig-paths',
    npm: 'vite-plugin-workspace-tsconfig-paths',
  },
})
