import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'statable-analytics',
  description: 'Add Statable privacy-first web analytics to an Astro or Vite site with one line of config. Cookieless, no consent banner for your analytics, EU-hosted.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'astro-integration',
    'withastro',
    'vite-plugin',
    'analytics',
    'web-analytics',
    'statable',
    'privacy',
    'cookieless',
    'google-analytics-alternative',
  ],
  links: {
    github: 'https://github.com/key-arg/statable-analytics',
    npm: 'https://www.npmjs.com/package/statable-analytics',
    website: 'https://statable.com/docs/install/astro/',
  },
  source: {
    github: 'key-arg/statable-analytics',
    npm: 'statable-analytics',
  },
})
