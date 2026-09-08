import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-io1',
  description: 'Publish your Vite dev server to the public internet over a bitmot io1 relay, with the CLI auto-managed.',
  icon: 'logos:vite-icon',
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
  source: {
    github: '',
    npm: 'vite-plugin-io1',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-io1',
  },
  stats: {
    downloads: {
      monthly: 61,
      weekly: 3,
    },
  },
})
