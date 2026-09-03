import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailscale',
  description: 'A Vite plugin that exposes the dev server via Tailscale Serve or Funnel when --tailscale is passed',
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
  links: {
    github: 'https://github.com/Stupremee/vite-plugin-tailscale',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailscale',
  },
  stats: {
    downloads: {
      monthly: 36,
      weekly: 4,
    },
  },
})
