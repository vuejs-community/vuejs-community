import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@ahmadastic/froam',
  description: 'The visual editor for the site you already have. Point it at any running site or static folder — React, Rails, Django, WordPress, plain HTML — edit visually, and every change compiles to committable files in your repo.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'froam',
    'visual-editor',
    'design-tool',
    'figma-like',
    'no-code',
    'page-editor',
    'vite-plugin',
    'react',
    'wordpress',
    'rails',
    'django',
    'static-site',
    'framework-agnostic',
  ],
  source: {
    github: 'Ahmadastics/froam-studio',
    npm: '@ahmadastic/froam',
  },
  links: {
    github: 'https://github.com/Ahmadastics/froam-studio',
    npm: 'https://www.npmjs.com/package/@ahmadastic/froam',
    website: 'https://github.com/Ahmadastics/froam-studio#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 83,
      weekly: 83,
    },
  },
})
