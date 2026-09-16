import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'cortex-editor',
  description: 'Visual editor for Claude Code',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'visual-editor',
    'design-tokens',
    'vite-plugin',
    'webpack-plugin',
    'nextjs',
    'css',
    'tailwindcss',
    'claude-code',
    'mcp',
    'devtools',
  ],
  source: {
    github: 'zerofog/cortex',
    npm: 'cortex-editor',
  },
  links: {
    github: 'https://github.com/zerofog/cortex',
    npm: 'https://www.npmjs.com/package/cortex-editor',
    website: 'https://github.com/zerofog/cortex#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 243,
      weekly: 38,
    },
  },
})
