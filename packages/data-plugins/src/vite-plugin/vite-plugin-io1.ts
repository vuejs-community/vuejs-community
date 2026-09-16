import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-io1',
  description: 'Publish your Vite dev server to the public internet over a bitmot io1 relay, with the CLI auto-managed.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    npm: 'vite-plugin-io1',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-io1',
    website: 'https://io1.io/vite',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 31,
      weekly: 5,
    },
  },
})
