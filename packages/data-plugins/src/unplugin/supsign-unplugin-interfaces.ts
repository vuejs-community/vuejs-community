import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@supsign/unplugin-interfaces',
  description: 'Generiert globale Interface-Deklarationen (`interfaces.d.ts`) und einen `index.ts` aus allen `export interface`-Definitionen in einem Verzeichnis.',
  version: '1.1.2',
  category: 'plugin',
  tags: [
    'rollup',
    'transform',
    'unplugin',
    'vite',
    'webpack',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/supsign/unplugin-interfaces',
    npm: 'https://www.npmjs.com/package/@supsign/unplugin-interfaces',
  },
  stats: {
    downloads: {
      monthly: 189,
      weekly: 23,
    },
  },
})
