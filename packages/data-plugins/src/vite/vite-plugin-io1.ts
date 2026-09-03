import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-io1',
  description: 'Publish your Vite dev server to the public internet over a bitmot io1 relay, with the CLI auto-managed.',
  version: '0.1.8',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'reverse-proxy',
    'bitmot',
    'io1',
    'relay',
    'https',
    'share',
    'dev-server',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-io1',
  },
  stats: {
    downloads: {
      monthly: 71,
      weekly: 1,
    },
  },
})
