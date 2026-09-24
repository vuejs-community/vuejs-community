import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-react-vitrine',
  description: 'Inline previews for React components: annotate an export with @preview and see it in a live gallery served by your Vite dev server.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite-plugin',
    'vite',
    'react',
    'preview',
    'component-preview',
    'gallery',
    'vscode',
  ],
  links: {
    github: 'https://github.com/yuntaengtaeng/vitrine',
    npm: 'https://www.npmjs.com/package/vite-plugin-react-vitrine',
    website: 'https://github.com/yuntaengtaeng/vitrine/tree/main/packages/vite-plugin#readme',
  },
  source: {
    github: 'yuntaengtaeng/vitrine',
    npm: 'vite-plugin-react-vitrine',
  },
})
