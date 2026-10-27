import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@devsignid/vite',
  description: 'Plugin de Vite de DevsignID. Añade devsignid() a vite.config y listo.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'devsignid',
    'design-feedback',
    'react',
    'ai-agent',
    'cursor',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/landerssini/devsignid',
    npm: 'https://www.npmjs.com/package/@devsignid/vite',
    website: 'https://github.com/landerssini/devsignid#readme',
  },
  source: {
    github: 'landerssini/devsignid',
    npm: '@devsignid/vite',
  },
})
