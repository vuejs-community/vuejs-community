import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@slidewright/vite',
  description: 'Vite plugin that serves and builds a Markdown deck as a presentation.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'deck',
    'markdown',
    'presentation',
    'slides',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/trafargarlaw/slidewright',
    npm: 'https://www.npmjs.com/package/@slidewright/vite',
    website: 'https://github.com/trafargarlaw/slidewright/tree/master/packages/vite#readme',
  },
  source: {
    github: 'trafargarlaw/slidewright',
    npm: '@slidewright/vite',
  },
})
