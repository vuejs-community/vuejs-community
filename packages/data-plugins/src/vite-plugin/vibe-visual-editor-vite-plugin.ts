import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vibe-visual-editor/vite-plugin',
  description: 'Dev-only Vite plugin for Vibe Visual Editor, with React (JSX) support: maps rendered text back to the literals in your source, so the VS Code preview can edit it in place.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'react',
    'jsx',
    'visual editor',
    'live edit',
    'vscode',
    'claude code',
    'codex',
    'mcp',
  ],
  links: {
    github: 'https://github.com/andreykats/vibe-visual-editor',
    npm: 'https://www.npmjs.com/package/@vibe-visual-editor/vite-plugin',
    website: 'https://github.com/andreykats/vibe-visual-editor#readme',
  },
  source: {
    github: 'andreykats/vibe-visual-editor',
    npm: '@vibe-visual-editor/vite-plugin',
  },
})
