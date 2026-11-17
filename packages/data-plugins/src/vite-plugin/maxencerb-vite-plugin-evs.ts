import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@maxencerb/vite-plugin-evs',
  description: 'Vite plugin for @maxencerb/evs: compiles *.evs.ts scripts at build time, so the client bundle ships the bytecode and not the compiler',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
  tags: [
    'ethereum',
    'evm',
    'evs',
    'precompile',
    'viem',
    'vite',
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/maxencerb/evs',
    npm: 'https://www.npmjs.com/package/@maxencerb/vite-plugin-evs',
    website: 'https://evs.maxencerb.com/reference/vite-plugin/',
  },
  source: {
    github: 'maxencerb/evs',
    npm: '@maxencerb/vite-plugin-evs',
  },
})
