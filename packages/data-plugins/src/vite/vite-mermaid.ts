import { defineProjectMeta } from '@vue-community/schema'

export default defineProjectMeta({
  name: 'vite-mermaid',
  description: 'Compiles and replaces Mermaid in Markdown (or MDX) into optimized SVG at build time. No Headless Browser',
  version: '0.0.0',
  category: 'plugin',
  tags: [
    'vite',
    'vite-plugin',
    'mermaid',
    'mermaidjs',
    'markdown',
    'md',
    'mdx',
    'diagram',
    'diagrams',
    'svg',
    'svg-generator',
    'static',
    'compile',
    'compiler',
    'precompile',
    'build-time',
    'transform',
    'transformer',
    'remark',
    'rehype',
    'documentation',
    'docs',
    'static-site',
    'static-assets',
  ],
  types: [
    'vite-plugin',
  ],
  links: {
    github: 'https://github.com/pinely-international/svg-bbox',
    npm: 'https://www.npmjs.com/package/vite-mermaid',
  },
  stats: {
    downloads: {
      monthly: 20,
      weekly: 1,
    },
  },
})
