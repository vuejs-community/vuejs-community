import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@plugin-cra-proxy/vite',
  description: 'A development proxy plugin for **Vite** mimicking [Create React App](https://create-react-app.dev/) proxy behavior.',
  version: '1.0.3',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'cra',
    'proxy',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/robertpanvip/plugin-proxy',
    npm: 'https://www.npmjs.com/package/@plugin-cra-proxy/vite',
  },
  stats: {
    downloads: {
      monthly: 226,
      weekly: 10,
    },
  },
})
