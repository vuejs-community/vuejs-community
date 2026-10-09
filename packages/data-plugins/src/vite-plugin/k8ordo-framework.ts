import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@k8ordo/framework',
  description: 'The k8ordo framework: routes/ compiled into React Server Components, run with or without a server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'k8ordo',
    'react',
    'rsc',
    'server',
    'ssg',
    'ssr',
    'static-site-generator',
    'vercel',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/k35o/k8ordo',
    npm: 'https://www.npmjs.com/package/@k8ordo/framework',
    website: 'https://ordo.k8o.me',
  },
  source: {
    github: 'k35o/k8ordo',
    npm: '@k8ordo/framework',
  },
})
