import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'gradier',
  description: 'Edit mesh gradients live on your site during development and save them straight to your codebase.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'gradient',
    'mesh-gradient',
    'devtools',
    'vite-plugin',
    'design',
  ],
  links: {
    github: 'https://github.com/JGodwyn/Gradier',
    npm: 'https://www.npmjs.com/package/gradier',
    website: 'https://github.com/JGodwyn/Gradier#readme',
  },
  source: {
    github: 'JGodwyn/Gradier',
    npm: 'gradier',
  },
})
