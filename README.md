# webpack-boilerplate

A simple webpack boilerplate for single page projects. It contains support for
development and production environments and it's easily extensible.

## Installation

Simply run `npm install` to install all of the project's dependencies.

## Usage

Webpack boilerplate contains the setup that no one wants to do. It uses plugins
and loaders to enable `scss` files, `js` files, `html` files and images as well.
Also 'webpack-dev-server' is setup for ease of development. To start a production
environment run `npm start` and a browser window will pop up. There's already
some default template, but you can easily edit the files in the `src` folder to
get the desired result. If you want to compile the `dist` folder for production,
run `npm build`.

## Development vs Production

If you run the boilerplate in development mode, 'webpack-dev-server' will pop up
and take care of reloading the browser and fetching any files you need
automatically. If you just need the files for deployment after you finish
development, you can run `npm build` and your `dist` folder will be ready.

## Security

Some dependencies of plugins or loaders may have known vulnerabilities. Run
`npm audit` to check for vulnerabilities and correct them. If a vulnerable
loader/plugin has a known vulnerability and hasn't been patched, you can try to
find alternate ones to do the job in a secure way.

## Extending and contributing

If you have a basic understanding of webpack you can easily add any plugins and/or
loaders you may need. If you need help, head over to https://webpack.js.org/ for
more information. In case you think this project can be improved, open a issue
or a pull request and I'll give feedback ASAP.
