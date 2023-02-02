const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    enforceExtension: false,
    fallback: {
      fs: false,
    },
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js',
      core: path.resolve(__dirname, '..', 'src/core/'),
      components: path.resolve(__dirname, '..', 'src/components/'),
      pages: path.resolve(__dirname, '..', 'src/pages/'),
      controllers: path.resolve(__dirname, '..', 'src/controllers/'),
      utils: path.resolve(__dirname, '..', 'src/utils/'),
      services: path.resolve(__dirname, '..', 'src/services/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: path.resolve(__dirname, '..', 'tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.hbs$/,
        use: [
          'raw-loader',
          path.resolve(__dirname, 'loaders/minify-inline-hbs-loader.js'),
        ],
      },
      {
        test: /\.[s]?css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-import', 'postcss-nested'],
              },
            },
          },
        ],
      },
      {
        test: /\.(?:jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
