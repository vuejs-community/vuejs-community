import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'sveltekit-remote-devtools',
  description: 'Drop-in devtool for SvelteKit remote functions: endpoint explorer, decoded call timeline, refresh trees, live query cache and a playground',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'remote-functions',
    'devtools',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/mastermakrela/sveltekit-remote-devtools',
    npm: 'https://www.npmjs.com/package/sveltekit-remote-devtools',
  },
  source: {
    github: 'mastermakrela/sveltekit-remote-devtools',
    npm: 'sveltekit-remote-devtools',
  },
})
