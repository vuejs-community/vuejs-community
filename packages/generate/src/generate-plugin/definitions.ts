// Plugin 定义：包名前缀、归属目录、类型与图标。
// 所有字段必填，不使用可选属性。

import type { PluginDefinition } from './contracts'

export const pluginDefinitions: readonly PluginDefinition[] = [
  {
    directory: 'vite',
    packageNamePrefix: 'vite-plugin',
    type: 'vite-plugin',
    icon: 'logos:vitejs',
  },
  {
    directory: 'rollup',
    packageNamePrefix: 'rollup-plugin',
    type: 'rollup-plugin',
    icon: 'logos:rollupjs',
  },
  {
    directory: 'rolldown',
    packageNamePrefix: 'rolldown-plugin',
    type: 'rolldown-plugin',
    icon: 'logos:rolldown',
  },
  {
    directory: 'unplugin',
    packageNamePrefix: 'unplugin',
    type: 'unplugin',
    icon: 'lucide:plug',
  },
  {
    directory: 'rollup',
    packageNamePrefix: '@rollup/plugin-',
    type: 'rollup-plugin',
    icon: 'logos:rollupjs',
  },
]
