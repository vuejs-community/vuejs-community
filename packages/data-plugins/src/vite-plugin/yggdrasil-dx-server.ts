import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@yggdrasil-dx/server',
  description: 'Servidor de desarrollo de Yggdrasil-dx: plugin de Vite, preview aislado y API del registro',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'yggdrasil-dx',
    'vite',
    'vite-plugin',
    'react',
  ],
  links: {
    github: 'https://github.com/mauriciorossdev/yggdrasil-dx',
    npm: 'https://www.npmjs.com/package/@yggdrasil-dx/server',
    website: 'https://github.com/mauriciorossdev/yggdrasil-dx#readme',
  },
  source: {
    github: 'mauriciorossdev/yggdrasil-dx',
    npm: '@yggdrasil-dx/server',
  },
})
