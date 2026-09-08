import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailscale',
  description: 'A Vite plugin that exposes the dev server via Tailscale Serve or Funnel when --tailscale is passed',
  icon: 'logos:vite-icon',
  version: '0.1.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'tailscale',
    'tailscale-serve',
    'tailscale-funnel',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: 'Stupremee/vite-plugin-tailscale',
    npm: 'vite-plugin-tailscale',
  },
  links: {
    github: 'https://github.com/Stupremee/vite-plugin-tailscale',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailscale',
  },
  stats: {
    downloads: {
      monthly: 35,
      weekly: 4,
    },
  },
})
