import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@riffjs/core',
  description: 'Riff runtime — Tone.js engine, schema, theory helpers, Vite plugin, and the riff CLI.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'music',
    'tone.js',
    'react',
    'agent',
    'claude-code',
    'vite-plugin',
  ],
  source: {
    github: 'themankindproject/riff',
    npm: '@riffjs/core',
  },
  links: {
    github: 'https://github.com/themankindproject/riff',
    npm: 'https://www.npmjs.com/package/@riffjs/core',
    website: 'https://github.com/themankindproject/riff#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 14,
      weekly: 1,
    },
  },
})
