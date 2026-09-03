import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'compress-shader-literals',
  description: '✂️ Strip comments & whitespace from GLSL/WGSL shader literals in your JS/TS at build time — any bundler, no toolchain, no runtime cost.',
  version: '1.3.10',
  category: 'plugin',
  tags: [
    'shader',
    'glsl',
    'wgsl',
    'minify',
    'minification',
    'compress',
    'compression',
    'bundle-size',
    'optimization',
    'code-size',
    'typescript',
    'webgl',
    'webgpu',
    'three',
    'threejs',
    'ogl',
    'react-three-fiber',
    'shader-park',
    'curtainsjs',
    'shadertoy',
    'vite-plugin',
    'rollup-plugin',
    'webpack-plugin',
    'esbuild-plugin',
    'unplugin',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/jayf0x/compress-shader-literals',
    npm: 'https://www.npmjs.com/package/compress-shader-literals',
  },
  stats: {
    downloads: {
      monthly: 175,
      weekly: 7,
    },
  },
})
