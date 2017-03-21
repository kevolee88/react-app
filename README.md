# react-app

This is a basic setup for a react app using babel and webpack

## Getting Started

cd into your app dir and create a package.json file. Install the required dependencies. Setup a source dir for your app. Mine looks like this...

```
root/
  |_ src/

      |_ app/

          |_ index.js

      |_ index.html

  |_ package.json

  \_ webpack.config.js

```

## Prerequisites

If you have not already install Node , webpack, and webpack-dev-server globally. Then install the below dependencies.

```
"dependencies": {
  "react": "",
  "react-dom": ""
},
"devDependencies": {
  "babel-core": "",
  "babel-loader": "",
  "babel-preset-es2015": "",
  "babel-preset-react": "",
  "babel-preset-stage-2": "",
  "path": "",
  "webpack": "",
  "webpack-dev-server": ""
}
```

## Installing

After all of the required dependencies are installed create your webpack.config.js file. It should look like the below.

```
var path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_DIR + '/app/index.js',
  output: {
    filename: 'bundle.js',
    path: DIST_DIR + '/app',
    publicPath: '/app/'
  },
  module: {
    loaders: [{
      test:    /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader:  'babel-loader',
      query:   {
        presets: ['es2015', 'react'],
      }
    }]
  }
}
```

## Running the tests

Next set up your scripts in your package.json file. Then run ```npm start```

```
"scripts": {
  "start": "npm run build",
  "build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline",
  "build:prod": "webpack -p && cp src/index.html dist/index.html"
}
```

## Built With

* [React](https://facebook.github.io/react/) - The web framework used
* [Webpack](https://webpack.github.io/) - Module Bundler
* [Babel](http://babeljs.io/) - Javascript Compiler
* [Node](http://babeljs.io/) - Dependency Management

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Kevin Rogers**
