const ManifestPlugin = require('webpack-manifest-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => {
  const module = {
    entry: './src/index',
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'happypack/loader?id=ts'
            }
          ]
        }
      ]
    }
  };

  const plugins = [
    new HappyPack({
      id: 'ts',
      threads: 4,
      loaders: [
        {
          loader: 'babel-loader',
          options: {
            envName: env.prod ? 'production' : 'development'
          }
        },
        {
          path: 'ts-loader',
          query: { happyPackMode: true }
        }
      ]
    }),
    new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ];

  if (env.dev) {
    module.output = {
      path: `${__dirname}/build`,
      publicPath: '/',
      filename: 'main.js'
    };

    module.devtool = 'source-map';

    module.devServer = {
      inline: true, // Enable watch and live reload
      host: '0.0.0.0',
      port: 5000,
      public: 'http://localhost:5000/',
      disableHostCheck: true,
      historyApiFallback: true,
      stats: 'errors-only'
    };
  }

  if (env.prod) {
    module.devtool = false;

    module.output = {
      path: `${__dirname}/build`,
      publicPath: '/',
      filename: 'main.[chunkhash].js'
    };

    module.optimization = {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    };
  }

  plugins.push(
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    })
  );

  module.plugins = plugins;

  return module;
};
