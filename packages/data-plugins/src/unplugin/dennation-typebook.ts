import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@dennation/typebook',
  description: 'A toolkit for documenting React components from their TypeScript types — one bundler-plugin scan, plugins turn it into artifacts (AI-agent docs and more)',
  version: '0.6.1',
  category: 'plugin',
  tags: [
    'react',
    'typescript',
    'documentation',
    'components',
    'llms-txt',
    'unplugin',
    'ai-agents',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/dennation/typebook',
    npm: 'https://www.npmjs.com/package/@dennation/typebook',
  },
  stats: {
    downloads: {
      monthly: 374,
      weekly: 289,
    },
  },
})
