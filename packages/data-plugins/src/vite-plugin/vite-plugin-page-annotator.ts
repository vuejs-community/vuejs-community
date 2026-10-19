import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-page-annotator',
  description: 'Click elements on your live Vite dev page, write what should change, and send exact JSX source locations (file:line:column) and element screenshots straight to Claude Code or OpenAI Codex via MCP, plugin, or clipboard.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'page-annotator',
    'annotate',
    'annotation',
    'claude-code',
    'claude',
    'codex',
    'openai-codex',
    'mcp',
    'mcp-server',
    'devtools',
    'ai-coding',
    'visual-feedback',
    'click-to-source',
    'jsx',
    'react',
    'preact',
    'solid',
  ],
  links: {
    github: 'https://github.com/shinelikeamillion/vite-plugin-page-annotator',
    npm: 'https://www.npmjs.com/package/vite-plugin-page-annotator',
    website: 'https://shinelikeamillion.github.io/vite-plugin-page-annotator/',
  },
  source: {
    github: 'shinelikeamillion/vite-plugin-page-annotator',
    npm: 'vite-plugin-page-annotator',
  },
})
