import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devbi/vite',
  description: 'Vite plugin for DevBI: reads dashboards/ and models/, bundles promoted tiles, copies data files into the build. Also devbi-check and devbi-inspect.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'devbi',
    'bi',
    'dashboard',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/ishibashi0112/devbi',
    npm: 'https://www.npmjs.com/package/@devbi/vite',
    website: 'https://github.com/ishibashi0112/devbi#readme',
  },
  source: {
    github: 'ishibashi0112/devbi',
    npm: '@devbi/vite',
  },
})
