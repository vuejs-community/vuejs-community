import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'svelte-ws',
  description: 'WebSocket remote functions for SvelteKit: realtime streams and mutations in *.socket.ts over one multiplexed WebSocket. Works in vite dev; Bun and Node adapters, a pub/sub bus with a Redis recipe.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'sv-add',
    'svelte',
    'sveltekit',
    'svelte5',
    'websocket',
    'websockets',
    'sveltekit-websocket',
    'realtime',
    'real-time',
    'rpc',
    'remote-functions',
    'pubsub',
    'pub-sub',
    'redis',
    'bun',
    'node',
    'sveltekit-adapter',
    'vite-plugin',
    'standard-schema',
    'multiplexing',
    'streaming',
  ],
  links: {
    github: 'https://github.com/krowten/svelte-ws',
    npm: 'https://www.npmjs.com/package/svelte-ws',
    website: 'https://krowten.github.io/svelte-ws',
  },
  source: {
    github: 'krowten/svelte-ws',
    npm: 'svelte-ws',
  },
})
