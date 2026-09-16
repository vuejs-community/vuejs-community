import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@plugin-cra-proxy/vite',
  description: 'A development proxy plugin for **Vite** mimicking [Create React App](https://create-react-app.dev/) proxy behavior.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'cra',
    'proxy',
  ],
  source: {
    github: 'robertpanvip/plugin-proxy',
    npm: '@plugin-cra-proxy/vite',
  },
  links: {
    github: 'https://github.com/robertpanvip/plugin-proxy',
    npm: 'https://www.npmjs.com/package/@plugin-cra-proxy/vite',
    website: 'https://github.com/robertpanvip/plugin-proxy#readme',
  },
  stats: {
    stars: 2,
    downloads: {
      monthly: 58,
      weekly: 2,
    },
  },
})
