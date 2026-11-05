import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-rankcli',
  description: 'Vite plugin for SEO lint on each build: meta validation, sitemap.xml and robots.txt. The full 280-check audit of the built site is rankcli audit --dir dist',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'seo',
    'sitemap',
    'meta-tags',
    'rankcli',
  ],
  links: {
    github: 'https://github.com/integrallis/rankcli',
    npm: 'https://www.npmjs.com/package/vite-plugin-rankcli',
    website: 'https://rankcli.dev',
  },
  source: {
    github: 'integrallis/rankcli',
    npm: 'vite-plugin-rankcli',
  },
})
