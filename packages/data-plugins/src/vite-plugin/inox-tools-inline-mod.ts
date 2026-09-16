import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@inox-tools/inline-mod',
  description: 'Define a virtual module inline with any reference to buildtime values',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
  ],
  source: {
    github: 'Fryuni/inox-tools',
    npm: '@inox-tools/inline-mod',
  },
  links: {
    github: 'https://github.com/Fryuni/inox-tools',
    npm: 'https://www.npmjs.com/package/@inox-tools/inline-mod',
    website: 'https://github.com/Fryuni/inox-tools#readme',
  },
  stats: {
    stars: 142,
    downloads: {
      monthly: 3785,
      weekly: 336,
    },
  },
})
