import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-chuanyun',
  description: 'Expose a Vite dev server through a chuanyun tunnel: registers the port, allows the host, prints the public URL',
  version: '0.1.4',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'chuanyun',
    'tunnel',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/xsxs89757/chuanyun',
    npm: 'https://www.npmjs.com/package/vite-plugin-chuanyun',
  },
  stats: {
    downloads: {
      monthly: 735,
      weekly: 735,
    },
  },
})
