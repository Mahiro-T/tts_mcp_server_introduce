# TTS MCP Server 紹介動画

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

## プロジェクトの概要

TTS MCP Serverの紹介動画プロジェクトです。Remotionを使用して作成されており、音声にはQwen3-TTSモデルを採用しています。

## 動画の内容

- **シーン構成**: 5つのシーン（導入、インストール方法、使用方法、特徴紹介、エンディング）
- **総再生時間**: 約54秒
- **解像度**: 1080p (1920x1080)
- **フレームレート**: 30fps

## 使用技術

- **Remotion**: 4.0.417
- **React**: 19.2.3
- **TailwindCSS**: 4.0.0
- **Qwen3-TTS**: 音声生成

## プロジェクト構造

```
tts_mcp_server_introduce/
├── src/              # ソースコード
│   ├── scenes/       # 各シーンの実装
│   │   ├── Scene1Intro.tsx
│   │   ├── Scene2Install.tsx
│   │   ├── Scene3Workflow.tsx
│   │   ├── Scene4Features.tsx
│   │   └── Scene5Ending.tsx
│   ├── Composition.tsx
│   ├── Root.tsx
│   └── index.ts
├── public/           # 音声ファイル
│   ├── narration1.wav
│   ├── narration2.wav
│   ├── narration3.wav
│   ├── narration4.wav
│   └── narration5.wav
└── README.md
```

## シーン詳細

| シーン | フレーム範囲 | 時間（秒） | 内容 | 音声ファイル |
|--------|-------------|-----------|------|-------------|
| Scene 1 | 0 - 571 | 0 - 19.04 | 導入 | narration1.wav |
| Scene 2 | 571 - 856 | 19.04 - 28.56 | インストール方法 | narration2.wav |
| Scene 3 | 856 - 1124 | 28.56 - 37.52 | 使用方法とワークフロー | narration3.wav |
| Scene 4 | 1124 - 1390 | 37.52 - 46.40 | 特徴・機能紹介 | narration4.wav |
| Scene 5 | 1390 - 1613 | 46.40 - 53.84 | エンディング | narration5.wav |

## 音声情報

- **ボイス**: 小野杏 (ono_anna)
- **音声ファイル**:
  - `public/narration1.wav` - 導入ナレーション
  - `public/narration2.wav` - インストール方法ナレーション
  - `public/narration3.wav` - 使用方法ナレーション
  - `public/narration4.wav` - 特徴紹介ナレーション
  - `public/narration5.wav` - エンディングナレーション

## 開発・ビルド方法

### Install Dependencies

```console
bun install
```

### Start Preview

```console
bun run dev
```

### Build

```console
bun run build
```

### Render Video

```console
bunx remotion render TTSIntro out/video.mp4
```

### Upgrade Remotion

```console
bunx remotion upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
