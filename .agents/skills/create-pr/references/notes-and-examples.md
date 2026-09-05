# PR 写法补充说明与示例

## 类型判断补充说明

不要因为 diff 里包含逻辑代码就直接判成 `fix`。先看"最终在修什么"。

优先判断：

1. **docs / ci / build / chore 优先于 fix**
   - 若主要改的是文档、脚本、workflow、数据生成流程，即使涉及一些逻辑代码，也通常不该写成 `fix`
2. **fix 只用于真实缺陷修复**
   - 站点行为异常、渲染错误、交互不符合预期、数据生成报错、接口返回错误，才优先用 `fix`
3. **feat 只用于对外新增能力**
   - 不是"内部代码变多了"就算 feat，而是站点/使用者真的获得了新能力
4. **数据条目改动用 data-* scope 表达**
   - 新收录 -> `feat(data-plugins)` / `feat(data-nuxt)`
   - 修正条目元信息 -> `fix(data-*)` 或 `chore(data-*)`
   - 仅更新统计数据 -> 通常由每日同步工作流自动完成，不需要单独提 PR

示例：

- 修文档描述错误 -> `docs: ...`
- 新增一个 Nuxt 模块收录 -> `feat(data-nuxt): add radash module`
- 修 index.db 生成时 tags 缺失报错 -> `fix(db): handle undefined project tags`
- 数据类型定义调整 -> `refactor(schema): make tags property optional`
- 修 GitHub Actions 校验 -> `ci: ...`
- 修依赖版本问题 -> `chore(deps): ...`
- 修站点首页组件真实 bug -> `fix(ui): ...`

## Related Issues 写法

有明确 issue 时：

- `close #12345`
- `fix #12345`
- `ref #12345`

没有 issue 时：

- 简单写需求来源
- 若确实没有，写 `None`

不要编造 issue 编号。

## 背景与改动内容写法

背景控制在 2 到 5 行，回答这几件事：

1. 原先哪里有问题（或为什么要新增）
2. 这次怎么改
3. 是否有站点交互、数据展示或生成产物的变化

示例：

```markdown
### 背景

index.db 生成脚本在条目缺少 tags 字段时会直接报错，导致数据库无法重建。

### 改动内容

- 生成前对 tags 做空值兜底，缺失时按空数组处理
- 同步调整 `@vue-community/schema` 中 tags 的类型定义为可选

### 关联 Issue

None

### 验证方式

- `pnpm lint` / `pnpm typecheck` 通过
- 已运行 `pnpm generate:db`，index.db 正常生成且站点数据展示正确
```

数据类 PR 在"改动内容"里注明影响的条目：

```markdown
### 改动内容

- 新收录 Vite 插件：vite-plugin-11th-server、vite-plugin-abbrlink
```

## 验证方式写法

按改动类型选择对应内容：

- 通用：`pnpm lint`、`pnpm typecheck`
- 数据类：`pnpm generate:db`，确认 `server/assets` 下 index.db 已更新
- 数据同步脚本改动：说明模拟运行的结果
- UI 改动：手动验证步骤 + 截图或 GIF
- 服务端接口改动：接口的请求方式与返回示例

## 基线分支判断建议

目标是尽量推断"当前分支实际从哪里切出来"，而不是拍脑袋默认 `master`。

建议顺序：

1. 用户明确指定了 `base branch` -> 直接使用
2. 查看当前分支是否能从 `reflog` 看出 checkout 来源
3. 查看 `git branch -vv` 的 tracking / upstream 作为辅助线索
4. 必要时结合 `merge-base` 比较候选分支
5. 若仍无法确定，再退回仓库默认分支 `master`

建议命令：

```bash
git branch --show-current
git branch -vv
git reflog show --date=local $(git branch --show-current)
git remote show origin
git merge-base HEAD <candidate-branch>
```

注意：

- upstream 不是绝对父分支，只是候选线索
- `reflog` 最接近真实答案，但不一定一直存在
- 不确定时要明确告诉用户"这是推断值"

## 创建 PR 前确认话术建议

在真正执行 `gh pr create` 之前，应该先给用户一个确认版草稿，例如：

```markdown
我先整理了一版待提交的 PR 草稿，请你确认：

- Base branch: `master`
- PR title: `fix(db): handle undefined project tags in index db generation`
- PR body:

  ### 背景
  index.db 生成脚本在条目缺少 tags 字段时会直接报错……

  ### 改动内容
  - ……

  ### 关联 Issue
  None

  ### 验证方式
  ……

- 待确认：是否需要关联已有 issue

如果没问题，我再继续创建 PR；如果你想改 title、base 或正文，我先帮你改。
```

## PR 标题示例

`vuejs-community` 的 PR 标题应固定使用英文，并遵循 Conventional Commits：

- `<type>: <subject>`
- `<type>(<scope>): <subject>`

常用 `type`：`feat`、`fix`、`docs`、`style`、`refactor`、`perf`、`test`、`build`、`ci`、`chore`、`revert`

英文示例：

- `feat(shared): add npm package download and github star utilities`
- `feat(data-nuxt): add comprehensive collection of Nuxt modules`
- `fix(db): handle undefined project tags in index db generation`
- `fix(database): update database path resolution for Vercel deployment`
- `refactor(schema): make tags property optional in type definition`
- `build(data-plugins): update index.db output path to server assets`
- `docs: add contributing guide`
- `ci: add generate-plugin-data workflow`
- `chore(deps): update nuxt and tailwindcss`

不要这样写：

- `修复 index.db 生成报错`（标题必须英文）
- `update`（type 缺失，且是空话）
- `fix issues`（没说清修了什么）
- `some improvements`
