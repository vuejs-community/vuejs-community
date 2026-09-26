import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'tippa',
  description: 'pick an element in a vite react app and send the change request to a running claude code session',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'claude-code',
    'mcp',
    'react',
  ],
  links: {
    github: 'https://github.com/ap-justin/tippa',
    npm: 'https://www.npmjs.com/package/tippa',
    website: 'https://github.com/ap-justin/tippa#readme',
  },
  source: {
    github: 'ap-justin/tippa',
    npm: 'tippa',
  },
})
