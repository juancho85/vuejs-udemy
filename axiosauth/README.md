# vue-cli

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# Install babel state 2 for spread operator polyfill
npm install --save-dev babel-preset-stage-2

Add the preset on the .babelrc config array
{
  "presets": [
    ["es2015", { "modules": false }],
    ["stage-2"]
  ]
}

# install router
npm install --save vue-router

# install vuex (centralized state management)
npm install --save vue-router

# install axios (http requests)
npm install --save axios

# install vuelidate (form validation)
npm install --save vuelidate
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
