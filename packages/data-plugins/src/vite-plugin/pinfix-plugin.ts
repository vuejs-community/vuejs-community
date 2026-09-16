import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@pinfix/plugin',
  description: 'Visual UI annotation overlay for Claude Code-powered source editing in dev servers.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ai',
    'claude',
    'claude-code',
    'vite-plugin',
    'webpack-plugin',
    'rspack-plugin',
    'developer-tools',
    'code-editing',
    'hot-reload',
    'react',
    'vue',
    'unplugin',
    'browser-overlay',
    'ai-coding',
    'devtools',
  ],
  source: {
    github: 'ForeverSc/pinfix',
    npm: '@pinfix/plugin',
  },
  links: {
    github: 'https://github.com/ForeverSc/pinfix',
    npm: 'https://www.npmjs.com/package/@pinfix/plugin',
    website: 'https://github.com/ForeverSc/pinfix#readme',
  },
  stats: {
    stars: 10,
    downloads: {
      monthly: 33,
      weekly: 1,
    },
  },
})
