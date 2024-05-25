# ベースイメージにNode.jsの最新LTSバージョンを使用
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

# アプリケーションのポートを設定
EXPOSE 4000

# コンテナ起動時に実行されるコマンド
CMD ["npm", "run", "start"]
