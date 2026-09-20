import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-chuanyun',
  description: 'Expose a Vite dev server through a chuanyun tunnel: registers the port, allows the host, prints the public URL',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'chuanyun',
    'tunnel',
  ],
  links: {
    github: 'https://github.com/xsxs89757/chuanyun',
    npm: 'https://www.npmjs.com/package/vite-plugin-chuanyun',
    website: 'https://github.com/xsxs89757/chuanyun/tree/main/integrations/vite-plugin-chuanyun',
  },
  source: {
    github: 'xsxs89757/chuanyun',
    npm: 'vite-plugin-chuanyun',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 770,
      weekly: 6,
    },
  },
})
