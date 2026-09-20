import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailscale',
  description: 'A Vite plugin that exposes the dev server via Tailscale Serve or Funnel when --tailscale is passed',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'tailscale',
    'tailscale-serve',
    'tailscale-funnel',
  ],
  links: {
    github: 'https://github.com/Stupremee/vite-plugin-tailscale',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailscale',
    website: 'https://github.com/Stupremee/vite-plugin-tailscale#readme',
  },
  source: {
    github: 'Stupremee/vite-plugin-tailscale',
    npm: 'vite-plugin-tailscale',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 25,
      weekly: 7,
    },
  },
})
