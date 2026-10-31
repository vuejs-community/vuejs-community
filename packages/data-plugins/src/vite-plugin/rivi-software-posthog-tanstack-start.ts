import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rivi-software/posthog-tanstack-start',
  description: 'PostHog error tracking for TanStack Start apps on Cloudflare Workers: the Worker\'s capture, the Start middlewares, the browser SDK loaded after hydration, secret-path redaction and the source map upload',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'posthog',
    'error-tracking',
    'tanstack-start',
    'tanstack-router',
    'cloudflare-workers',
    'source-maps',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/rivi-software/tools',
    npm: 'https://www.npmjs.com/package/@rivi-software/posthog-tanstack-start',
    website: 'https://github.com/rivi-software/tools/tree/main/packages/posthog-tanstack-start#readme',
  },
  source: {
    github: 'rivi-software/tools',
    npm: '@rivi-software/posthog-tanstack-start',
  },
})
