import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-claude-locator',
  description: 'Option+click a React element in your Vite dev server to open its source in the Claude desktop app\'s Files pane or your editor, or hand it to Codex, OpenCode and other agents, with a component tree.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'react',
    'claude',
    'claude-code',
    'locator',
    'click-to-source',
    'vue',
    'svelte',
    'solid',
    'preact',
    'astro',
    'codex',
    'opencode',
    'cursor',
    'angular',
    'webpack',
  ],
  links: {
    github: 'https://github.com/scs0209/claude-locator',
    npm: 'https://www.npmjs.com/package/vite-plugin-claude-locator',
    website: 'https://github.com/scs0209/claude-locator#readme',
  },
  source: {
    github: 'scs0209/claude-locator',
    npm: 'vite-plugin-claude-locator',
  },
})
