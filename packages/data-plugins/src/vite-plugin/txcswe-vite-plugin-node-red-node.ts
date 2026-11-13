import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@txcswe/vite-plugin-node-red-node',
  description: 'A Vite plugin that builds custom [Node-RED](https://nodered.org) nodes written in TypeScript.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'ts',
    'typescript',
    'tsc',
  ],
  links: {
    github: 'https://github.com/TXC/node-red-vite-plugin',
    npm: 'https://www.npmjs.com/package/@txcswe/vite-plugin-node-red-node',
    website: 'https://github.com/TXC/node-red-vite-plugin#readme',
  },
  source: {
    github: 'TXC/node-red-vite-plugin',
    npm: '@txcswe/vite-plugin-node-red-node',
  },
})
