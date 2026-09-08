import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-chuanyun',
  description: 'Expose a Vite dev server through a chuanyun tunnel: registers the port, allows the host, prints the public URL',
  icon: 'logos:vite-icon',
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
  source: {
    github: 'xsxs89757/chuanyun',
    npm: 'vite-plugin-chuanyun',
  },
  links: {
    github: 'https://github.com/xsxs89757/chuanyun',
    npm: 'https://www.npmjs.com/package/vite-plugin-chuanyun',
  },
  stats: {
    downloads: {
      monthly: 759,
      weekly: 79,
    },
  },
})
