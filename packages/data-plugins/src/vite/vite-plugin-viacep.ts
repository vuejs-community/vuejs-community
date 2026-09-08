import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-viacep',
  description: 'Plugin Vite para consultar CEP e endereco no Web Service ViaCEP via modulo virtual.',
  icon: 'logos:vite-icon',
  version: '1.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'viacep',
    'cep',
    'brasil',
  ],
  types: [
    'vite-plugin',
  ],
  source: {
    github: '',
    npm: 'vite-plugin-viacep',
  },
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-viacep',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
