import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kwitsch/rolldown-plugin-claude-code',
  description: 'Rolldown plugin that builds Claude Code plugins.',
  icon: 'logos:rolldown-icon',
  category: 'plugin',
  types: [
    'rolldown-plugin',
  ],
  tags: [
    'claude-code',
    'claude-code-plugin',
    'rolldown',
    'rolldown-plugin',
  ],
  links: {
    github: 'https://github.com/kwitsch/rolldown-plugin-claude-code',
    npm: 'https://www.npmjs.com/package/@kwitsch/rolldown-plugin-claude-code',
  },
  source: {
    github: 'kwitsch/rolldown-plugin-claude-code',
    npm: '@kwitsch/rolldown-plugin-claude-code',
  },
})
