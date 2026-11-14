import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'llms-ink',
  description: 'Turn any link — site, docs section, page, GitHub repo, PDF or video — into llms.txt and llms-full.txt. Typed client for llms.ink, plus a Vite plugin, an Astro integration and middleware that serve the files from your site. No dependencies.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'llms.txt',
    'llms-full.txt',
    'llm',
    'ai',
    'markdown',
    'docs',
    'context',
    'rag',
    'sdk',
    'llms-ink',
    'vite-plugin',
    'astro-integration',
    'middleware',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/llms-ink',
    website: 'https://llms.ink/docs/',
  },
  source: {
    npm: 'llms-ink',
  },
})
