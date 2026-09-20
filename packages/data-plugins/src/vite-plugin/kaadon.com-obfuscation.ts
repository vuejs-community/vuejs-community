import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '@kaadon.com/obfuscation',
  description: 'Frontend code-protection plugin for Vite / Webpack 5 / Rollup (built on unplugin): dual-layer JS + Wasm obfuscation and domain lock, optional X25519 end-to-end encryption, with prebuilt wasm bundled for zero-config use — no Rust toolchain required.',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  links: {
    npm: 'https://www.npmjs.com/package/@kaadon.com/obfuscation',
    website: 'https://git.boolcdn.net/kaadon/kaadon-obfuscation/tree/master/packages/plugin#readme',
  },
  source: {
    npm: '@kaadon.com/obfuscation',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 296,
      weekly: 7,
    },
  },
})
