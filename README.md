# harusapo-hp — ハル行政書士事務所 公式サイト

生活に困った方（生活保護の申請を考えている方）に向けた、「最も分かりやすく、すぐに頃れる駆け込み寺」をコンセプトにした1枚LP主体のサイトです。

- サイト名：ハル行政書士事務所
- ドメイン：https://haru-sapo.com
- ホスティング：Cloudflare Pages（想定）

## ファイル構成

```
/
├─ index.html      メインLP
├─ services.html   してもらえること
├─ company.html    事務所概要・運営者情報
├─ contact.html    お問い合わせ（電話・LINE・メール）
├─ news.html       お知らせ（月１回更新）
├─ privacy.html    プライバシーポリシー
├─ css/style.css
├─ js/main.js
├─ robots.txt
└─ sitemap.xml
```

## カラー（css/style.css の :root で一括変更可）

- accent（CTAオレンジ）#EE6E3A / trust（信頼ブルー）#2C5A82 / green #4E9E76 / LINE #06C755
- フォント：Zen Maru Gothic（見出し）+ Noto Sans JP（本文）

## 【公開前のTODO】

### 1. 未定値の反映（判明次第差し替え）
- [ ] **公式LINEの友だち追加URL**：`contact.html` と `index.html` / `company.html` 内の `href="#"`（LINEボタン）を実 URL に差し替え、「準備中」表記を削除
- [ ] **メールフォームの送信先（Gmail）**：`contact.html` の `<form action="#">` を実エンドポイント（例：Formspree / Googleフォーム等）に差し替え、送信ボタンの `disabled` を外し、「準備中」の注意書きを削除

### 2. 画像の差し替え（現在は破線プレースホルダ）
※ 必要な画像の詳細は Notion の「画像要件リスト」ページを参照。現在は `.img-ph`（破線ボック）で位置とALTを示しています。
- [ ] 写真① メインビジュアル（相談室で嬄り添う・顔なし）— index.html のHero
- [ ] その他の写真（②～⑧）も順次差し替え

### 3. SEO / 基盤
- [ ] favicon（`favicon.ico` または apple-touch-icon）の追加
- [ ] OGP画像（`og:image`）の追加
- [ ] Google Business Profile（MEO）連携・構造化データの住所・電話確認
- [ ] Googleアナリティクス等の計測タグ（必要に応じて）

### 4. note 連携（お知らせ自動掲載）
- [ ] note アカウント開設後、`js/main.js` の `loadNoteFeed("https://note.com/XXXX/rss")` を有効化

### 5. データの裏取り（公開前に事務所へ確認）
- [ ] 交通費・お弁当支給の条件・金額（現状は金額は記載せず「支給あり」のみ）
- [ ] 体験談の掲載可否（現状はプレースホルダ）
- [ ] 受付時間・定休日（現状は「つながらないときはおりかえします」の安全表現）

## デプロイ（Cloudflare Pages）

main ブランチへの push で自動デプロイされる想定です（Cloudflare Pages と 本リポジトリの接続が必要）。ビルドコマンドは不要（静的サイト）、出力ディレクトリはルート。
