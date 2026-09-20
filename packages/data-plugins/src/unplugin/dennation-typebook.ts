import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@dennation/typebook',
  description: 'A toolkit for documenting React components from their TypeScript types — one bundler-plugin scan, plugins turn it into artifacts (AI-agent docs and more)',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'react',
    'typescript',
    'documentation',
    'components',
    'llms-txt',
    'unplugin',
    'ai-agents',
  ],
  links: {
    github: 'https://github.com/dennation/typebook',
    npm: 'https://www.npmjs.com/package/@dennation/typebook',
    website: 'https://github.com/dennation/typebook#readme',
  },
  source: {
    github: 'dennation/typebook',
    npm: '@dennation/typebook',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 369,
      weekly: 13,
    },
  },
})
