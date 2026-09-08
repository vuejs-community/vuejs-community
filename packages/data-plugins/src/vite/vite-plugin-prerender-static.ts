import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-prerender-static',
  description: 'Static prerendering plugin for Vite with SEO, meta tags, and multi-route support.',
  icon: 'logos:vite-icon',
  version: '0.1.3',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'prerender',
    'static-site',
    'seo',
    'ssg',
    'spa',
    'meta-tags',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'rahulsushilsharma/vite-plugin-prerender-static',
    npm: 'vite-plugin-prerender-static',
  },
  links: {
    github: 'https://github.com/rahulsushilsharma/vite-plugin-prerender-static',
    npm: 'https://www.npmjs.com/package/vite-plugin-prerender-static',
  },
  stats: {
    downloads: {
      monthly: 2227,
      weekly: 368,
    },
  },
})
