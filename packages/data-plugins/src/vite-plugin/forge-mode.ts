import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'forge-mode',
  description: 'Figma-style design mode for your running Vite or Next.js app — sends deterministic, token-aware change requests to the AI coding agent you already use.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'design-mode',
    'vite-plugin',
    'nextjs',
    'mcp',
    'claude-code',
    'cursor',
    'tailwind',
    'devtools',
  ],
  links: {
    github: 'https://github.com/NoahHendrickson/the-forge',
    npm: 'https://www.npmjs.com/package/forge-mode',
    website: 'https://github.com/NoahHendrickson/the-forge#readme',
  },
  source: {
    github: 'NoahHendrickson/the-forge',
    npm: 'forge-mode',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 35,
      weekly: 4,
    },
  },
})
