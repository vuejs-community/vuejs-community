import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-styletyper',
  description: 'Vite plugin that writes a per-class TypeScript declaration (.d.ts + .d.ts.map) next to every *.module.{scss,css,sass} on save and build. Native-speed toolchain (Dart Sass via sass-embedded + Lightning CSS). Powered by styletyper.',
  version: '0.2.2',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'scss',
    'sass',
    'css-modules',
    'typescript',
    'dts',
    'styletyper',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/cryptofelon/styletyper',
    npm: 'https://www.npmjs.com/package/vite-plugin-styletyper',
  },
  stats: {
    downloads: {
      monthly: 72,
      weekly: 26,
    },
  },
})
