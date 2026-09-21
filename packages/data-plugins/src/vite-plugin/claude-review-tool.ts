import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'claude-review-tool',
  description: 'Claude Review Tool (CRT): annotate your local site in the browser, talk to Claude in-page, get a self-contained task file in your repo.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'claude',
    'claude-code',
    'review',
    'annotate',
    'feedback',
    'proxy',
    'overlay',
    'devtools',
    'vite-plugin',
    'nextjs',
  ],
  links: {
    github: 'https://github.com/simv/crt',
    npm: 'https://www.npmjs.com/package/claude-review-tool',
    website: 'https://github.com/simv/crt#readme',
  },
  source: {
    github: 'simv/crt',
    npm: 'claude-review-tool',
  },
})
