import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'ai-debug-pins',
  description: 'Click a spot on your dev page and type a note: Claude Code gets a picture with a ring where you clicked, your words and the code they point at.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'claude-code-plugin',
    'visual-feedback',
    'debugging',
    'claude-code',
    'screenshot',
    'notes',
    'ai',
  ],
  links: {
    github: 'https://github.com/TiagoJeronimo/ai-debug-pins',
    npm: 'https://www.npmjs.com/package/ai-debug-pins',
    website: 'https://github.com/TiagoJeronimo/ai-debug-pins#readme',
  },
  source: {
    github: 'TiagoJeronimo/ai-debug-pins',
    npm: 'ai-debug-pins',
  },
})
