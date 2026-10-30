import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@vhosty/vite-plugin',
  description: 'Serve the Vite dev server through vhosty: HTTPS and hot reload at https://<port>.<your-domain> over your tailnet',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'vhosty',
    'tailscale',
    'caddy',
    'laravel',
    'hmr',
    'https',
  ],
  links: {
    github: 'https://github.com/vhostyhq/vite-plugin',
    npm: 'https://www.npmjs.com/package/@vhosty/vite-plugin',
    website: 'https://github.com/vhostyhq/vite-plugin#readme',
  },
  source: {
    github: 'vhostyhq/vite-plugin',
    npm: '@vhosty/vite-plugin',
  },
})
