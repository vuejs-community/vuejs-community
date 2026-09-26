import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'unplugin-deno',
  description: 'Deno\'s module resolution (jsr:, npm:, https:, deno.json import maps and workspaces, deno.lock) for Vite, Rolldown, Rollup, esbuild, webpack, Rspack and Rsbuild',
  icon: 'icon:dark-unplugin',
  category: 'plugin',
  types: [
    'unplugin',
  ],
  tags: [
    'bun',
    'deno',
    'deno-lock',
    'esbuild',
    'esbuild-plugin',
    'import-map',
    'jsr',
    'rolldown',
    'rolldown-plugin',
    'rollup',
    'rollup-plugin',
    'rsbuild',
    'rsbuild-plugin',
    'rspack',
    'rspack-plugin',
    'unplugin',
    'vite',
    'vite-plugin',
    'webpack',
    'webpack-plugin',
  ],
  links: {
    github: 'https://github.com/brc-dd/unplugin-deno',
    npm: 'https://www.npmjs.com/package/unplugin-deno',
    website: 'https://github.com/brc-dd/unplugin-deno#readme',
  },
  source: {
    github: 'brc-dd/unplugin-deno',
    npm: 'unplugin-deno',
  },
})
