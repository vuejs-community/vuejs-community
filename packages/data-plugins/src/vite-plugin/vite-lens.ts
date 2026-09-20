import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-lens',
  description: 'Dev inspector, UI flow recorder & click-to-editor navigator for Vite and modern web apps.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'devtools',
    'inspector',
    'react',
    'vue',
    'svelte',
    'solidjs',
    'debug',
    'element-inspector',
  ],
  links: {
    github: 'https://github.com/mdsohail99/Vite-Lens',
    npm: 'https://www.npmjs.com/package/vite-lens',
    website: 'https://github.com/mdsohail99/Vite-Lens#readme',
  },
  source: {
    github: 'mdsohail99/Vite-Lens',
    npm: 'vite-lens',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 168,
      weekly: 15,
    },
  },
})
