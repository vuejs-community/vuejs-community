import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-plain-css-modules',
  description: 'Readable, hash-free CSS module class names (Component_class) for Vite, with a built-in guard against two modules sharing a name',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'vite',
    'vite-plugin',
    'css-modules',
    'class-names',
  ],
  links: {
    github: 'https://github.com/cevek/vite-plugin-plain-css-modules',
    npm: 'https://www.npmjs.com/package/vite-plugin-plain-css-modules',
    website: 'https://github.com/cevek/vite-plugin-plain-css-modules#readme',
  },
  source: {
    github: 'cevek/vite-plugin-plain-css-modules',
    npm: 'vite-plugin-plain-css-modules',
  },
})
