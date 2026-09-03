import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-viacep',
  description: 'Plugin Vite para consultar CEP e endereco no Web Service ViaCEP via modulo virtual.',
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
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/vite-plugin-viacep',
  },
  stats: {
    downloads: {
      monthly: 15,
      weekly: 3,
    },
  },
})
