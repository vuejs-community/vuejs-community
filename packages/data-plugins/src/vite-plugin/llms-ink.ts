import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'llms-ink',
  description: 'Turn any link — site, docs section, page, GitHub repo, PDF or video — into llms.txt and llms-full.txt. Typed client for llms.ink, plus a Vite plugin, an Astro integration and middleware that serve the files from your site, and Vercel AI SDK tools. No depe',
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
    'ai-sdk',
    'vercel-ai-sdk',
    'tools',
  ],
  links: {
    github: 'https://github.com/lukax/llms-ink-js',
    npm: 'https://www.npmjs.com/package/llms-ink',
    website: 'https://llms.ink/docs/',
  },
  source: {
    github: 'lukax/llms-ink-js',
    npm: 'llms-ink',
  },
})
