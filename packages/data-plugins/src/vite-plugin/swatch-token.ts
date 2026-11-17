import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'swatch-token',
  description: 'Edit your CSS colour tokens live, on the page. A dev-only panel for Vite that finds the custom properties in your stylesheets, previews edits on the real app, and writes them back to the file.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'design-tokens',
    'css-custom-properties',
    'css-variables',
    'colour',
    'color',
    'vite-plugin',
    'dark-mode',
    'wcag',
    'devtools',
  ],
  links: {
    github: 'https://github.com/tyfoster/swatch',
    npm: 'https://www.npmjs.com/package/swatch-token',
    website: 'https://swatchtoken.com',
  },
  source: {
    github: 'tyfoster/swatch',
    npm: 'swatch-token',
  },
})
