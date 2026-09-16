import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-plugin-styletyper',
  description: 'Vite plugin that writes a per-class TypeScript declaration (.d.ts + .d.ts.map) next to every *.module.{scss,css,sass} on save and build. Native-speed toolchain (Dart Sass via sass-embedded + Lightning CSS). Powered by styletyper.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'cryptofelon/styletyper',
    npm: 'vite-plugin-styletyper',
  },
  links: {
    github: 'https://github.com/cryptofelon/styletyper',
    npm: 'https://www.npmjs.com/package/vite-plugin-styletyper',
    website: 'https://github.com/cryptofelon/styletyper/tree/main/packages/vite-plugin-styletyper#readme',
  },
  stats: {
    stars: 1,
    downloads: {
      monthly: 92,
      weekly: 19,
    },
  },
})
