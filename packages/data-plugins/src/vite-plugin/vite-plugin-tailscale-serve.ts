import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-tailscale-serve',
  description: 'Expose the Vite dev server to your tailnet over HTTPS with tailscale serve, on whatever port Vite picked',
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
    'https',
    'dev-server',
  ],
  links: {
    github: 'https://github.com/unfixed3854/vite-plugin-tailscale-serve',
    npm: 'https://www.npmjs.com/package/vite-plugin-tailscale-serve',
    website: 'https://github.com/unfixed3854/vite-plugin-tailscale-serve#readme',
  },
  source: {
    github: 'unfixed3854/vite-plugin-tailscale-serve',
    npm: 'vite-plugin-tailscale-serve',
  },
})
