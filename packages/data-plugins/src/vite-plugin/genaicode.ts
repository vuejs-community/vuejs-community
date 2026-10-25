import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'genaicode',
  description: 'Drive the coding-agent CLIs you already have (Claude Code, Codex, Copilot, Cursor, Gemini, opencode...) behind one API and one CLI, plus a thin provider-neutral LLM layer.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'llm',
    'ai',
    'openai',
    'backend',
    'prompt',
    'toolkit',
    'coding-agent',
    'cli',
    'vite-plugin',
    'react',
  ],
  links: {
    github: 'https://github.com/gtanczyk/genaicode',
    npm: 'https://www.npmjs.com/package/genaicode',
    website: 'https://github.com/gtanczyk/genaicode#readme',
  },
  source: {
    github: 'gtanczyk/genaicode',
    npm: 'genaicode',
  },
})
