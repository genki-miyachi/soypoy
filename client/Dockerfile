# ベースイメージとしてNode.jsのLTSバージョンを使用
FROM node:20

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をインストール
COPY package.json package-lock.json ./
RUN npm install

# ソースコードをコピー
COPY . .

# ビルドプロセスを実行
RUN npm run build

# ポートを設定
EXPOSE 3000

# アプリケーションを起動
CMD ["npm", "start"]
