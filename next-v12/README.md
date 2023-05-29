# Next.js with PWA

## PWA ライブラリ

- next-pwa

  - https://www.npmjs.com/package/next-pwa

<br>

## 導入手順

### １．プロジェクトの作成

```bash
pnpm create next-app@v12 --typescript
```

or

```bash
yarn create next-app@v12 --typescript
```

or

```bash
npm create next-app@v12 --typescript
```

＊ 今回は`pnpm`で進める

<br />

### ２．PWA ライブラリのインストール

```bash
pnpm i next-pwa
```

or

```bash
yarn add next-pwa
```

or

```bash
npm i next-pwa
```

<br />

### ３．画像を用意し `./public/` 配下に設置

ディレクトリは `./public/` で配下であればどこでも良い。今回は [`./public/icons/`](./public/icons/) 配下に設置した。

今回は以下のサイトに 512x512 の画像をアップロードしてアイコンを作成した。

- https://ao-system.net/favicongenerator

#### 必須

- 192x192
- 512x512

#### 強く推奨

- 48x48
- 96x96
- 128x128
- 180x180

#### 推奨

- 36x36
- 72x72
- 128x128
- 144x144
- 152x152
- 256x256
- 384x384

> 参考： https://www.dozro.com/cyber/icon-sizes-for-progressive-web-apps-and-native-apps

<br />

### ４．`./next.config.js` の作成・編集

- [`./next.config.js`](./next.config.js)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA(nextConfig);
```

<br>

### ４．`./public/manifest.json` の作成

以下のファイルを参照する。

- [`./public/manifest.json`](./public/manifest.json)

`icons` の `src` パスに関しては（３）で設置した画像のパスを指定する。

<br />

### ５．`./pages/_document.tsx` を作成・編集

以下のファイルを参照する。

- [`./pages/_document.tsx`](./pages/_document.tsx)

#### 必須（`<head/>` タグの中身）

最低限、以下の `<link/>` タグがあれば動作する。

```html
<link rel="manifest" href="/manifest.json" />
```

#### 強く推奨（`<head/>` タグの中身）

IOS で PWA を使用する場合は以下の設定が必要。

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<link rel="apple-touch-icon" href="/icon-180x180.png" />
<link rel="apple-touch-icon" href="/icon-192x192.png" />
<link rel="apple-touch-icon" href="/icon-512x512.png" />
```

#### 推奨（`<head/>` タグの中身）

いっぱいあるので調査中。。。

<br />

## 追加で行った変更（任意）

- Prettier の導入
  - `./.vscode/settings.json` の追加
  - `./.prettierrc.json` の追加

<br />

## 開発環境の立ち上げ

```bash
pnpm dev
```

or

```
yarn dev
```

or

```bash
npm run dev
```

<br />

## 参考

- https://qiita.com/NozomuTsuruta/items/8991707ff549b1552e78
