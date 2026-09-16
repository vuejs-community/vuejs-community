import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: 'vite-mermaid',
  description: 'Compiles and replaces Mermaid in Markdown (or MDX) into optimized SVG at build time. No Headless Browser',
  icon: 'logos:vite-icon',
  category: 'plugin',
  types: [
    'vite-plugin',
  ],
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
  source: {
    github: 'pinely-international/svg-bbox',
    npm: 'vite-mermaid',
  },
  links: {
    github: 'https://github.com/pinely-international/svg-bbox',
    npm: 'https://www.npmjs.com/package/vite-mermaid',
    website: 'https://github.com/pinely-international/svg-bbox#readme',
  },
  stats: {
    stars: 0,
    downloads: {
      monthly: 20,
      weekly: 6,
    },
  },
})
