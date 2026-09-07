# 贡献指南

感谢你愿意为 Vuejs Community 做出贡献！本文档介绍环境要求、快速上手流程、项目结构以及数据维护与提交规范，帮助你快速参与进来。

## 目录

- [环境要求](#环境要求)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [开源组件数据维护](#开源组件数据维护)
- [defineProjectMeta 字段说明](#defineprojectmeta-字段说明)
- [提交 PR 规范（Conventional Commits）](#提交-pr-规范conventional-commits)
- [写在最后](#写在最后)

## 环境要求

在开始之前，请确保你的本地环境满足以下硬性要求：

| 工具 | 版本要求 | 说明 |
| --- | --- | --- |
| Node.js | **>= 22** | 建议 use LTS 版本，CI 环境使用 `lts/*` |
| pnpm | **> v11.x** | 项目通过 `packageManager` 字段锁定版本，推荐使用 `corepack enable` 启用 |
| Git | 较新版本即可 | 提交钩子依赖 `simple-git-hooks` |

## 快速开始

按照以下三步即可在本地跑起文档站点：

```bash
# 1. 克隆项目（如果是你自己的 Fork，请替换成你的仓库地址）
git clone https://github.com/vuejs-community/vuejs-community.git

# 2. 进入项目目录并安装依赖
cd vuejs-community
pnpm install

# 3. 运行调试文档站点（默认 http://localhost:3000）
pnpm run docs:dev
```

> [!TIP]
> `pnpm install` 会自动执行 `nuxt prepare` 并注册 Git 提交钩子（pre-commit 执行 `eslint --fix`，commit-msg 校验提交信息格式），无需额外配置。

## 项目结构

```
.
├── app/                     # Nuxt 应用（页面、组件、布局、静态资源等）
│   ├── components/ui/       # shadcn-vue 生成的 UI 组件
│   └── assets/icon/         # 本地自定义图标（@nuxt/icon 自定义集合）
├── server/                  # Nitro 服务端
│   ├── api/                 # API 路由
│   └── assets/              # 生成后的 index.db 存放位置
├── packages/
│   ├── data-ui/             # UI 组件库数据 ✅ 可维护
│   ├── data-component/      # 组件库数据 ✅ 可维护
│   ├── data-hooks/          # Composables 数据 ✅ 可维护
│   ├── data-admin/          # 后台模板 / Admin 数据 ✅ 可维护
│   ├── data-uniapp/         # UniApp 生态数据 ✅ 可维护
│   ├── data-nuxt/           # Nuxt 模块数据 🤖 由脚本自动同步，勿手动修改
│   ├── data-plugins/        # 构建插件数据 🤖 由脚本自动同步，勿手动修改
│   ├── schema/              # @vuejs-community/schema 数据类型定义
│   ├── shared/              # @vuejs-community/shared 工具函数
│   └── tsconfig/            # 共享 TypeScript 配置
├── scripts/                 # 仓库级数据同步脚本
├── shared/                  # 顶层共享类型
└── turbo.json               # Turborepo 任务配置
```

## 开源组件数据维护

社区开源组件数据的维护**仅支持以下目录**，每个项目一个 `.ts` 文件：

| 目录 | 内容 |
| --- | --- |
| `packages/data-ui/` | UI 组件库 |
| `packages/data-component/` | 组件库 / 组件集合 |
| `packages/data-hooks/` | Composables / Hooks 库 |
| `packages/data-admin/` | Admin 后台模板 |
| `packages/data-uniapp/` | UniApp 生态项目 |

> [!IMPORTANT]
> **`packages/data-nuxt/` 和 `packages/data-plugins/` 不接受手动修改数据。**
>
> 这两个目录的数据由仓库脚本定期自动执行同步生成，手动改动会被覆盖。如果发现其中的数据有问题、需要调整同步逻辑，请只修改对应子项目中的 `scripts/` 脚本，通过 PR 的方式改进同步逻辑本身。

新增或修改数据后，请运行以下命令重建索引数据库，让站点读取到最新数据：

```bash
pnpm generate:db
```

## defineProjectMeta 字段说明

所有数据条目均使用 `@vuejs-community/schema` 提供的 `defineProjectMeta` 定义，带有完整的类型提示。以下是一个带注释的完整示例：

```ts
import { defineProjectMeta } from '@vuejs-community/schema'

export default defineProjectMeta({
  // 项目名称，必须与真实包名 / 仓库名一致
  name: 'ant-design-vue',

  // 一句话描述项目是做什么的
  description: 'Ant Design 的 Vue 企业级组件库实现',

  // 图标：本地图标名（app/assets/icon 下的 svg，不含 .svg 后缀）
  // 或 iconify 图标名（如 'logos:vue'），无图标时传空字符串
  icon: 'icon:ant-design-vue',

  // 项目分类：'ui' | 'hooks' | 'component' | 'admin' | 'uniapp' 等
  category: 'ui',

  // 项目类型列表，如 'ui-library'、'composable-library' 等
  types: ['ui-library'],

  // 可选：标签，用于站点内筛选和搜索
  tags: ['ui', 'ant-design'],

  // 数据源，用于脚本拉取 Stars / 下载量等统计数据
  // github 使用 'owner/repo' 格式，npm 直接填包名
  source: {
    github: 'vueComponent/ant-design-vue',
    npm: 'ant-design-vue',
  },

  // 可选：对外展示的链接
  links: {
    github: 'https://github.com/vueComponent/ant-design-vue',
    npm: 'https://www.npmjs.com/package/ant-design-vue',
    website: 'https://antdv.com',
  },

  // 统计数据（Stars、下载量）由定时任务自动同步，无需手动维护
  stats: {
    stars: 21641,
    downloads: {
      monthly: 942627,
      weekly: 168488,
    },
  },
})
```

注意事项：

- `name`、`source.github`、`source.npm` 必须与真实的仓库名 / 包名一致，数据同步脚本依赖这些字段拉取信息。
- `stats` 由定时任务自动更新，**不需要手动维护**；也可以在本地运行 `pnpm sync:npm-git-data` 手动刷新。
- 需要新增字段时，请先修改 `packages/schema/` 中的类型定义。

## 提交 PR 规范（Conventional Commits）

提交 PR 时请严格遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范。仓库已启用 `verify-git-commit` 校验提交信息，不符合格式的提交会被拒绝：

```
type(scope): subject
```

- **type**：`feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`build`、`ci`、`chore`、`revert`
- **scope**（可选）：改动所属模块，如 `db`、`data-ui`、`data-nuxt`、`schema`、`shared`、`ui`、`deps`
- **subject**：简短描述，小写开头，结尾不加句号

示例：

```
feat(data-ui): add ant-design-vue entry
fix(db): handle missing tags in index db generation
chore(deps): update nuxt to latest
```

提交流程：

1. 从最新的 `master` 创建功能分支：

   ```bash
   git checkout -b feat/my-feature
   ```

2. 提交前确保以下检查通过：

   ```bash
   pnpm lint
   pnpm typecheck
   ```

3. 向 `master` 提交 PR，在描述中说明改动内容和动机；数据类 PR 请注明影响的条目。

## 写在最后

**不要怕犯错误，勇敢地去做。**

每一个成熟的仓库都是从无数次的试错中成长起来的。提交错了可以改，PR 写得不完善会有热心的维护者帮你 review，没有人会因为你的一次失误而责怪你——这正是开源世界最温柔的地方。

开源世界欢迎大家，Vue.js 社区期待各位的发展壮大。期待在 Contributor 列表中看到你的名字！🚀
