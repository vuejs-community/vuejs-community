import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@donotlb/pi-vite',
  description: 'Vite plugins and a container entrypoint for static SPAs: runtime env injected at container start instead of baked in at build time, a shared dev server block (same-origin API proxy, mkcert HTTPS, tunnel hosts) and mode-gated HTML scripts.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'runtime-env',
    'envsubst',
    'docker',
    'nginx',
    'spa',
    'mkcert',
  ],
  links: {
    github: 'https://github.com/donotlb/pipi',
    npm: 'https://www.npmjs.com/package/@donotlb/pi-vite',
  },
  source: {
    github: 'donotlb/pipi',
    npm: '@donotlb/pi-vite',
  },
})
