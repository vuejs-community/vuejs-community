import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: '@kaadon.com/obfuscation',
  description: 'Frontend code-protection plugin for Vite / Webpack 5 / Rollup (built on unplugin): dual-layer JS + Wasm obfuscation and domain lock, optional X25519 end-to-end encryption, with prebuilt wasm bundled for zero-config use — no Rust toolchain required.',
  version: '0.0.2',
  category: 'plugin',
  tags: [
    'vite-plugin',
    'webpack-plugin',
    'rollup-plugin',
    'wasm',
    'wasm-pack',
    'obfuscator',
    'anti-debug',
    'domain-lock',
    'unplugin',
    'x25519',
    'end-to-end-encryption',
    'code-protection',
  ],
  types: [
    'unplugin',
  ],
  links: {
    github: 'https://github.com/',
    npm: 'https://www.npmjs.com/package/@kaadon.com/obfuscation',
  },
  stats: {
    downloads: {
      monthly: 272,
      weekly: 272,
    },
  },
})
