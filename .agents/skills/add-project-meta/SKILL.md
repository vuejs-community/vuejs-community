---
name: add-project-meta
description: 为 vuejs-community 目录站创建项目数据条目（project meta 文件）。仅适用于在 packages/data-ui、packages/data-component、packages/data-hooks、packages/data-plugins、packages/data-nuxt 这 5 个包的 src 目录下创建文件，使用 @vuejs-community/schema 的 defineProjectMeta。当用户要求收录、新增、添加 UI 库、组件库、hooks/composable 库、Nuxt 模块或 vite/rollup/rolldown/unplugin 插件到数据包时使用——例如"收录 X"、"新增一个项目"、"为 X 创建 meta 文件"、"add X to the catalog"，即使用户没有提到 defineProjectMeta 也要使用本技能。
---

# 新增项目数据条目

## 适用范围

本技能仅在以下 5 个包的 `src/` 下创建数据文件时有效，其他位置不使用：

| 数据包 | `category` 固定取值 |
| --- | --- |
| `packages/data-ui/src` | `'ui'` |
| `packages/data-component/src` | `'component'` |
| `packages/data-hooks/src` | `'hooks'` |
| `packages/data-nuxt/src` | `'nuxt'` |
| `packages/data-plugins/src` | `'plugin'` |

## 核心规则

1. 参考 `@vuejs-community/schema` 包下的 `defineProjectMeta` 函数，使用 `export default defineProjectMeta({...})` 导出条目。
2. `defineProjectMeta` 传递的参数完全遵照 `CommunityProject` 类型定义（`packages/schema/src/types.ts`），不得添加类型之外的字段。
3. 文件名称必须与 `name` 一致（kebab-case）；`data-plugins` 的文件需放入 `src/vite|rollup|rolldown|unplugin/` 对应类型的子目录。
4. 注意：`data-nuxt/src` 下的文件由 `pnpm run generate:nuxt:modules` 从官方 nuxt/modules 列表自动生成，不要手动修改已有文件，仅官方列表中不存在的模块才手动创建。

## 文件模板

模板中的中文均为字段说明，创建时替换为真实值；无数据的可选字段（`tags`、`filter`、`website` 等）可省略，但 `stats` 必须完整写入（见下一节）。

```ts
import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  name: '项目名称',
  description: '项目描述',
  category: '项目当前归属的数据类型，参考 ProjectCategory 类型定义',

  types: ['项目可以分配为哪些类型，参考 ProjectType 类型定义'],

  tags: ['项目可以分配哪些标签'],

  filter: ['项目如果过滤需要进行哪些关键词'],

  links: {
    github: '项目在 GitHub 的完整地址',
    npm: '项目在 npmjs 的完整地址',
    website: '项目的官方地址',
  },

  source: {
    github: '项目包在 GitHub 的名称，格式为：owner/repo',
    npm: '项目包在 npmjs 上的名称',
  },

  stats: {
    stars: 项目在 GitHub 上的 star 数,
    downloads: {
      monthly: 项目在 npmjs 上的月下载量,
      weekly: 项目在 npmjs 上的周下载量,
    },
  },
})
```

## stats 数据要求

使用本技能创建文件时，`stats` 下的数据必须全部明确写出——不得省略、不得填 0、不得编造——创建时从以下接口实时获取：

- `stars`：请求 `https://api.github.com/repos/{owner}/{repo}`，取响应中的 `stargazers_count`；若接口限流或无法访问，改用 `https://ungh.cc/repos/{owner}/{repo}`，取响应中的 `repo.stars`。
- `downloads.monthly`：请求 `https://api.npmjs.org/downloads/point/last-month/{包名}`，取响应中的 `downloads`。
- `downloads.weekly`：请求 `https://api.npmjs.org/downloads/point/last-week/{包名}`，取响应中的 `downloads`。

## 完成后校验

创建文件后运行 `pnpm eslint --fix <文件路径>` 修正并校验格式。
