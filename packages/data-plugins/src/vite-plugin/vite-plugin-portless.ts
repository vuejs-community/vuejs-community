import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-portless',
  description: 'Show Vite listener URLs alongside Portless local and sharing URLs.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'localhost',
    'portless',
    'tailscale',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/gerardbalaoro/vite-plugin-portless',
    npm: 'https://www.npmjs.com/package/vite-plugin-portless',
    website: 'https://github.com/gerardbalaoro/vite-plugin-portless#readme',
  },
  source: {
    github: 'gerardbalaoro/vite-plugin-portless',
    npm: 'vite-plugin-portless',
  },
})
