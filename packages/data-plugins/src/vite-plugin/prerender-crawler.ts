import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'prerender-crawler',
  description: 'Framework-agnostic build-time prerendering. Point it at anything fetch-shaped (Request in, Response out) and it crawls the site into static HTML: seeds, link discovery, header hints, redirects, retries, throttling, and an integration seam for build-time d',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'prerender',
    'prerendering',
    'static site generation',
    'ssg',
    'crawler',
    'build-time',
    'vite',
    'vite-plugin',
  ],
  source: {
    github: 'solidjs/prerender-crawler',
    npm: 'prerender-crawler',
  },
  links: {
    github: 'https://github.com/solidjs/prerender-crawler',
    npm: 'https://www.npmjs.com/package/prerender-crawler',
    website: 'https://github.com/solidjs/prerender-crawler/tree/main/packages/crawler#readme',
  },
  stats: {
    stars: 5,
    downloads: {
      monthly: 356,
      weekly: 356,
    },
  },
})
