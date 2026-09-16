import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'lingui-for-astro',
  description: 'Macro-first Lingui integration for Astro.',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'astro',
    'esbuild',
    'i18n',
    'lingui',
    'rolldown',
    'rollup',
    'rspack',
    'unplugin',
    'vite',
    'webpack',
  ],
  source: {
    github: 'SegaraRai/lingui-for',
    npm: 'lingui-for-astro',
  },
  links: {
    github: 'https://github.com/SegaraRai/lingui-for',
    npm: 'https://www.npmjs.com/package/lingui-for-astro',
    website: 'https://lingui-for.roundtrip.dev/frameworks/astro/getting-started',
  },
  stats: {
    stars: 6,
    downloads: {
      monthly: 1028,
      weekly: 379,
    },
  },
})
