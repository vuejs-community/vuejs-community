export interface NpmSearchObject {
  package: {
    name: string
    version: string
    description?: string
    keywords?: string[]
    date: string
    links: {
      npm: string
      homepage?: string
      repository?: string
    }
    publisher: {
      username: string
      email?: string
    }
  }
  score: {
    final: number
    detail: {
      quality: number
      popularity: number
      maintenance: number
    }
  }
  downloads: {
    monthly: number
    weekly: number
  }
}

export interface NpmSearchResponse {
  objects: NpmSearchObject[]
  total: number
  time: string
}

export type PluginType = 'vite-plugin' | 'rollup-plugin' | 'rolldown-plugin' | 'unplugin'

export interface PluginSearch {
  by: 'keyword' | 'scope'
  query: string
}

export interface PluginDefinition {
  icon: string
  namePrefixes: string[]
  searches: PluginSearch[]
  type: PluginType
}

export const PLUGIN_DEFINITIONS = [
  {
    type: 'vite-plugin',
    namePrefixes: ['vite-plugin'],
    icon: 'logos:vite-icon',
    searches: [{ by: 'keyword', query: 'vite-plugin' }],
  },
  {
    type: 'rollup-plugin',
    namePrefixes: ['rollup-plugin', '@rollup/plugin-'],
    icon: 'logos:rollupjs',
    searches: [
      { by: 'keyword', query: 'rollup-plugin' },
      { by: 'scope', query: '@rollup/plugin-' },
    ],
  },
  {
    type: 'rolldown-plugin',
    namePrefixes: ['rolldown-plugin'],
    icon: 'logos:rolldown-icon',
    searches: [{ by: 'keyword', query: 'rolldown-plugin' }],
  },
  {
    type: 'unplugin',
    namePrefixes: ['unplugin'],
    icon: 'icon:dark-unplugin',
    searches: [{ by: 'keyword', query: 'unplugin' }],
  },
] as const satisfies readonly PluginDefinition[]
