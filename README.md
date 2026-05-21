<div align="center">

# Iris Worlds

**Iris ("The Blue Phantom") — EDU Universe Character Site**

[English](#english) · [日本語](#日本語)

</div>

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)]()

🌐 **Live**: [irisworlds.netlify.app](https://irisworlds.netlify.app)

---

## 日本語

### 概要

Iris Worlds は EDU（Eternal Dominion Universe）のキャラクター **Iris**（"The Blue Phantom"）を中心としたサイト。Trinity Alliance を率いる Iris のストーリー、14 ヵ国からなる世界観、12 人のメインキャラクターを紹介する。バニラ HTML/CSS/JS によるリッチなキャラクターサイトと、Next.js による Wiki/Timeline ページのデュアルレイヤー構成。

### Features

| Feature | 説明 |
|---------|------|
| **キャラクターページ** | 12 人のメインキャストのプロフィール + 6 人のキーフィギュア |
| **ストーリー** | 3 エピソード: "The Blue Phantom", "Alliance & Chaos", "The Betrayal" |
| **世界観アーカイブ** | 14 ヵ国（Vermillion, Blue Rose, Mieltenga 等）の詳細な国力データ、経済、リーダー、歴史、文化、地理 |
| **ギャラリー** | キャラクターポートレートギャラリー |
| **Wiki / Timeline** | EDU 共有 Wiki/Timeline（他サイトと同じアーキテクチャ） |
| **多言語対応** | 日本語 / 英語 bilingual |

### Nations

Vermillion, Blue Rose, Mieltenga, SS Range, Iron Syndicate, SUDOM, Crosevia, Augusta Empire, Falcion, Schtalks Federation, Fatima Federation, Pigeon Island, Out of Crescent, Faruja Corporation — 各国の国力統計、経済データ、リーダープロフィール、タブ付き lore を収録。

### Quick Start

```bash
git clone https://github.com/gentaron/irisworlds.git && cd irisworlds
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run start        # production server
```

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) · React 19 + Vanilla HTML/CSS/JS |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Cinzel, Noto Serif JP, Outfit |
| Deploy | Netlify |

### Project Structure

```
irisworlds/
├── src/
│   ├── app/              # Next.js App Router pages (wiki, timeline)
│   ├── domains/
│   │   ├── wiki/         # Wiki data, search engine
│   │   └── civilizations/ # Civilization data
│   ├── platform/         # Shared UI components
│   ├── lib/              # Utilities, language config
│   └── types/            # TypeScript type definitions
├── website/              # Vanilla HTML/CSS/JS character site
│   ├── index.html        # Main page (hero, episodes, world map, gallery)
│   ├── character.html    # Individual character detail
│   ├── story.html        # Full story chronicles
│   └── world.html        # World archives with sidebar navigation
└── netlify.toml          # Netlify deploy config (publishes website/)
```

---

## English

### Overview

Iris Worlds is a dual-layer site for the character **Iris** ("The Blue Phantom"), leader of the Trinity Alliance in the Eternal Dominion Universe. Layer 1 is a rich vanilla HTML/CSS/JS character site featuring 3 story episodes ("The Blue Phantom", "Alliance & Chaos", "The Betrayal"), 14 detailed nation profiles with national power stats/economic data/leader profiles/culture/geography, and 12 main cast character pages. Layer 2 is a Next.js wiki/timeline sharing the same architecture as other EDU sites.

### Key Pages

- `website/index.html` — Main hero, story episodes, world map, characters, gallery
- `website/character.html` — Individual character detail
- `website/story.html` — Full story chronicles
- `website/world.html` — World archives with sidebar navigation
- `/wiki` — EDU encyclopedia browser (Next.js)
- `/timeline` — Universe timeline (Next.js)

---

## Related Repositories

| Repo | Description |
|------|-------------|
| [gentaron/edu](https://github.com/gentaron/edu) | Main EDU application |
| [gentaron/edutext](https://github.com/gentaron/edutext) | Story text files (JP/EN) |
| [gentaron/image](https://github.com/gentaron/image) | Character artwork |
| [gentaron/eurekaspace](https://github.com/gentaron/eurekaspace) | EDU encyclopedia site |
| [gentaron/laylaland](https://github.com/gentaron/laylaland) | Layla character site |

## License

[MIT](LICENSE)
