import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'forge-mode',
  description: 'Figma-style design mode for your running Vite or Next.js app — sends deterministic, token-aware change requests to the AI coding agent you already use.',
  version: '0.2.0',
  category: 'plugin',
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
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/NoahHendrickson/the-forge',
    npm: 'https://www.npmjs.com/package/forge-mode',
  },
  stats: {
    downloads: {
      monthly: 39,
      weekly: 4,
    },
  },
})
