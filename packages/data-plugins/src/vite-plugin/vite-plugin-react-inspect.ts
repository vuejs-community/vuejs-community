import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-inspect',
  description: 'jump to local IDE source code while click the element of browser automatically. Supports React.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'react',
    'vite',
    'vscode',
    'vite-plugin',
    'inspector',
    'debug',
  ],
  source: {
    github: 'MartinBspheroid/vite-plugin-react-vue-inspector',
    npm: 'vite-plugin-react-inspect',
  },
  links: {
    github: 'https://github.com/MartinBspheroid/vite-plugin-react-vue-inspector',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-inspect',
    website: 'https://github.com/MartinBspheroid/vite-plugin-react-vue-inspector#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 164,
      weekly: 56,
    },
  },
})
