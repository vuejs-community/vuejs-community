import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-mael-jig',
  description: 'The maelstrom jig: a Vite dev-server overlay that sends CSS and instructions to the agent in the worktree',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'maelstrom',
  ],
  links: {
    github: 'https://github.com/sminnee/maelstrom',
    npm: 'https://www.npmjs.com/package/vite-plugin-mael-jig',
    website: 'https://github.com/sminnee/maelstrom#readme',
  },
  source: {
    github: 'sminnee/maelstrom',
    npm: 'vite-plugin-mael-jig',
  },
})
