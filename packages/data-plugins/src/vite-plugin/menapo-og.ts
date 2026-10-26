import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@menapo/og',
  description: 'Open Graph images from typed templates: og(props => html`…`) gives a page { url, width, height, alt }; the Vite plugin renders them with takumi at build time, cached by content, with vicss styles and installed Fontsource fonts',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'og-image',
    'open-graph',
    'takumi',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/menapo/kit',
    npm: 'https://www.npmjs.com/package/@menapo/og',
    website: 'https://github.com/menapo/kit/blob/main/packages/og/README.md',
  },
  source: {
    github: 'menapo/kit',
    npm: '@menapo/og',
  },
})
