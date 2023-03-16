# Пример приложения для контракта

# UPD from Simon:

To run development:
- Make sure that you using node version ^14.16
- Make sure that your publicPath in vue.config.js is:
```
  publicPath: "./"
```
This public path is used only for deployment purposes
```
  // publicPath: process.env.NODE_ENV === "production" ? "/test-pwa-application" : "./",
```
After that, use:
```
npm i
```
or
```
yarn install
```

to test pwa work locally:


```
npm install -g serve
npm run build
serve -s dist
```



## Зависимости

* [Node.js](https://nodejs.org)
* [Yarn](https://yarnpkg.com)

## Настройка проекта
```
yarn install
```

### Запус для разработки
```
yarn run serve
```

### Сборка проекта для продакшен
```
yarn run build
```

### Дополнительная настройки

See [Configuration Reference](https://cli.vuejs.org/config/).
# test-spa-application

# CHANGELOG
- FIBERS bumped to v.5 to work with last node.
- PWA package added
