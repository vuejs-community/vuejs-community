import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'rollup-plugin-import-cdn',
  description: 'Rollup, Vite and Rolldown plugin that bundles bare and URL imports from esm.sh, jsDelivr or Skypack, with tree-shaking, pinning, SRI and an offline cache',
  icon: 'logos:rollupjs',
  category: 'plugin',
  types: [
    'rollup-plugin',
  ],
  tags: [
    'rollup',
    'rollup-plugin',
    'vite',
    'vite-plugin',
    'rolldown',
    'rolldown-plugin',
    'plugin',
    'cdn',
    'esm',
    'esm.sh',
    'esm-sh',
    'jsdelivr',
    'skypack',
    'import',
    'url-imports',
    'sri',
    'tree-shaking',
  ],
  links: {
    github: 'https://github.com/sferarc/rollup-plugin-import-cdn',
    npm: 'https://www.npmjs.com/package/rollup-plugin-import-cdn',
    website: 'https://github.com/sferarc/rollup-plugin-import-cdn#readme',
  },
  source: {
    github: 'sferarc/rollup-plugin-import-cdn',
    npm: 'rollup-plugin-import-cdn',
  },
})
