import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'static-link-sentinel',
  description: 'Crawl a static build (dist/, build/, out/, public/, _site/) before deploy and fail CI on broken internal links, missing assets, case-mismatched paths, missing #anchors and dead or redirecting external links. CLI, API, Vite and webpack plugins, GitHub Acti',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'broken-links',
    'link-checker',
    'dead-links',
    '404',
    'static-site',
    'dist',
    'ci',
    'vite',
    'vite-plugin',
    'webpack-plugin',
    'netlify',
    'vercel',
    'astro',
    'eleventy',
    'hugo',
    'nextjs',
    'sitemap',
    'redirects',
    'sarif',
    'github-action',
    'markdown',
  ],
  links: {
    github: 'https://github.com/MrLouisWright/static-link-sentinel',
    npm: 'https://www.npmjs.com/package/static-link-sentinel',
    website: 'https://mrlouiswright.github.io/static-link-sentinel/',
  },
  source: {
    github: 'MrLouisWright/static-link-sentinel',
    npm: 'static-link-sentinel',
  },
})
