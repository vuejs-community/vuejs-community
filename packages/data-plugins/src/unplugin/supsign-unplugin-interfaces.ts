import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@supsign/unplugin-interfaces',
  description: 'Generiert globale Interface-Deklarationen (`interfaces.d.ts`) und einen `index.ts` aus allen `export interface`-Definitionen in einem Verzeichnis.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'rollup',
    'transform',
    'unplugin',
    'vite',
    'webpack',
  ],
  links: {
    github: 'https://github.com/supsign/unplugin-interfaces',
    npm: 'https://www.npmjs.com/package/@supsign/unplugin-interfaces',
    website: 'https://github.com/supsign/unplugin-interfaces#readme',
  },
  source: {
    github: 'supsign/unplugin-interfaces',
    npm: '@supsign/unplugin-interfaces',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 194,
      weekly: 24,
    },
  },
})
