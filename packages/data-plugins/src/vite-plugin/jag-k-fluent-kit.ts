import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@jag-k/fluent-kit',
  description: 'Tooling of @jag-k/fluent: the l10n CLI (extract the code\'s texts into FTL, type t.byId, check translations), its config, and plugins for Vite, Rollup, Rolldown, webpack, Rspack, esbuild and Bun.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'bun-plugin',
    'cli',
    'esbuild-plugin',
    'extract',
    'fluent',
    'ftl',
    'i18n',
    'l10n',
    'localization',
    'rollup-plugin',
    'unplugin',
    'vite-plugin',
    'webpack-plugin',
  ],
  links: {
    github: 'https://github.com/jag-k/fluent',
    npm: 'https://www.npmjs.com/package/@jag-k/fluent-kit',
    website: 'https://github.com/jag-k/fluent/tree/main/packages/fluent-kit#readme',
  },
  source: {
    github: 'jag-k/fluent',
    npm: '@jag-k/fluent-kit',
  },
})
