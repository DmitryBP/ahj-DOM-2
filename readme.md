# Webpack 5 Template

Сборка выполнена на основании [этой статьи ](https://www.robinwieruch.de/webpack-advanced-setup-tutorial/)

## 1. Init project

[Инструкция.](https://www.robinwieruch.de/javascript-project-setup-tutorial/)

```
npm init -y
mkdir src
cd src
touch index.js
```

```
touch .gitignore
```

[.gitignore от Нетологии](https://github.com/netology-code/ahj-code/blob/master/env/.gitignore)

## 2. Webpack 5 - Setup Tutorial

[Инструкция.](https://www.robinwieruch.de/webpack-setup-tutorial/)

```
npm install -D webpack webpack-dev-server webpack-cli
```

```
npm install -D html-webpack-plugin 
```

```
npm install -D clean-webpack-plugin
```

```
touch webpack.config.js
```

`webpack.config.js`

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Hello Webpack bundled JavaScript Project',
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],
};
```

Create `src/index.html`

```js
<!DOCTYPE html>
<html>
  <head>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <div>
      <h1><%= htmlWebpackPlugin.options.title %></h1>

      <div id="app">
    </div>
  </body>
</html>
```
