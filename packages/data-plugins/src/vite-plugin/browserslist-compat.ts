import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'browserslist-compat',
  description: 'Build targets from a package\'s browserslist and engines for tsdown, rolldown, Vite and esbuild, and a plugin that checks the output really runs on them',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'browserslist',
    'compat',
    'engines',
    'es-check',
    'esbuild',
    'oxc',
    'rolldown',
    'rolldown-plugin',
    'target',
    'tsdown',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/hollandjake/browserslist-compat',
    npm: 'https://www.npmjs.com/package/browserslist-compat',
    website: 'https://github.com/hollandjake/browserslist-compat#readme',
  },
  source: {
    github: 'hollandjake/browserslist-compat',
    npm: 'browserslist-compat',
  },
})
