import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vibe-visual-editor/vite-plugin',
  description: 'Dev-only Vite plugin for Vibe Visual Editor, with React (JSX) and plain HTML support: maps rendered text back to the literals and page text in your source, so the VS Code preview can edit it in place.',
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
    'html',
    'visual editor',
    'live edit',
    'vscode',
    'claude code',
    'codex',
    'mcp',
  ],
  links: {
    github: 'https://github.com/andreykats/vscode-visual-editor',
    npm: 'https://www.npmjs.com/package/@vibe-visual-editor/vite-plugin',
    website: 'https://github.com/andreykats/vscode-visual-editor#readme',
  },
  source: {
    github: 'andreykats/vscode-visual-editor',
    npm: '@vibe-visual-editor/vite-plugin',
  },
})
