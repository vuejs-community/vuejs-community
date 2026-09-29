import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@djarin/sveltekit-inspect',
  description: 'Zero-code, pluggable request/console log inspector for SvelteKit. Captures API calls, server-side fetches and console output with file:line initiators — no per-call code needed.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'svelte',
    'sveltekit',
    'logs',
    'inspector',
    'terminal',
    'debugging',
    'vite-plugin',
  ],
  links: {
    npm: 'https://www.npmjs.com/package/@djarin/sveltekit-inspect',
  },
  source: {
    npm: '@djarin/sveltekit-inspect',
  },
})
