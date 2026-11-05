import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@lit-material/vite',
  description: 'Vite plugin for lit-material apps: every page server-rendered in dev and production (route status, redirects, titles, loader data), the client build plus a server build, static prerendering, and a Request→Response handler for any Node server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'lit-material',
    'vite',
    'vite-plugin',
    'ssr',
    'prerender',
    'lit',
  ],
  links: {
    github: 'https://github.com/bohdaq/lit-material',
    npm: 'https://www.npmjs.com/package/@lit-material/vite',
    website: 'https://lit.rws8.tech/guides/server-rendering/',
  },
  source: {
    github: 'bohdaq/lit-material',
    npm: '@lit-material/vite',
  },
})
