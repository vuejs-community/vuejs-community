import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-viacep',
  description: 'Plugin Vite para consultar CEP e endereco no Web Service ViaCEP via modulo virtual.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'viacep',
    'cep',
    'brasil',
  ],
  source: {
    npm: 'vite-plugin-viacep',
  },
  links: {
    npm: 'https://www.npmjs.com/package/vite-plugin-viacep',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 15,
      weekly: 2,
    },
  },
})
