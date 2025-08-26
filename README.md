# Sentence Collection

这是一个基于 Nuxt 4 的简单句子收集项目，具有现代化的前端架构和清晰的组件化设计。项目旨在提供一个可扩展的基础，用于展示和管理句子数据。

## 主要功能

- 展示句子卡片 (SentenceCard)
- 统计句子数量 (SentenceCount)
- 切换句子类型 (SentenceType)
- 支持刷新和切换操作 (RefreshAndSwitch)
- 响应式布局和主题配置 (AppConfigStore)

## 技术栈

- Nuxt 4
- TypeScript
- Vue 3
- Tailwind CSS（用于样式）
- Pinia（用于状态管理）
- Eslint（代码规范）

## 目录结构

```
app/
├── assets/               # 静态资源
├── components/             # Vue 组件
├── store/                  # 应用状态管理
├── type/                  # 类型定义
├── utils/                 # 工具类和 API 请求
├── app.vue                # 根组件
├── nuxt.config.ts         # Nuxt 配置文件
├── package.json           # 项目依赖和脚本
├── pnpm-lock.yaml         # 依赖锁定文件
└── tsconfig.json          # TypeScript 配置
```

## 安装

请确保你已安装 pnpm，然后运行以下命令安装依赖：

```bash
pnpm install
```

## 开发环境

启动本地开发服务器：

```bash
pnpm dev
```

访问 `http://localhost:3000` 查看运行中的应用。

## 构建生产版本

构建优化后的生产环境包：

```bash
pnpm build
```

## 预览生产环境

构建后，可以本地预览生产环境：

```bash
pnpm preview
```

## 贡献

欢迎贡献代码和提出建议！请遵循以下步骤：

1. Fork 项目
2. 创建新分支 (`git checkout -b feature/xxx`)
3. 提交更改 (`git commit -m 'Add some feature'`)
4. Push 到分支 (`git push origin feature/xxx`)
5. 创建 Pull Request

## 许可证

本项目采用 GNU General Public License v3.0 许可证。详见 [LICENSE](LICENSE) 文件。
