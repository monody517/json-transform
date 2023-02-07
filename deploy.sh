# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

git init
git checkout main
git add -A
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:monody517/json-transform.git master:gh-pages

cd -
