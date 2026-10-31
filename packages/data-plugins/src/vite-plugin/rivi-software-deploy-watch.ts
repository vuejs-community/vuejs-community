import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@rivi-software/deploy-watch',
  description: 'Moves a browser tab that was open across a deploy onto the new build at a moment that loses nothing: the next navigation loads the whole page, a notice can offer the reload, and an error screen that caught a missing chunk reloads instead',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'deploy',
    'version-skew',
    'chunk-load-error',
    'vite',
    'vite-plugin',
    'react',
    'tanstack-router',
    'astro',
    'cloudflare-workers',
  ],
  links: {
    github: 'https://github.com/rivi-software/tools',
    npm: 'https://www.npmjs.com/package/@rivi-software/deploy-watch',
    website: 'https://github.com/rivi-software/tools/tree/main/packages/deploy-watch#readme',
  },
  source: {
    github: 'rivi-software/tools',
    npm: '@rivi-software/deploy-watch',
  },
})
