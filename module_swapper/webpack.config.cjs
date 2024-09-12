const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * 
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * This generates a html
 * page for you when you compile webpack, which will make you start
 * developing and prototyping faster.
 *
 * https://github.com/jantimon/html-webpack-plugin
 *
 */
/*
 * This is the webpack configuration file for the project.
 * It sets up the necessary plugins, loaders, and optimization options.
 */


module.exports = {
  mode: 'production', // Set the mode to production

  // Entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: '[name].[chunkhash].js', // Output file name with chunkhash for caching
    path: path.resolve(__dirname, 'dist') // Output directory path
  },

  // Plugins configuration
  plugins: [
    new webpack.ProgressPlugin(), // Show progress during compilation
    new HtmlWebpackPlugin(), // Generate HTML file for the application
    new webpack.NormalModuleReplacementPlugin(
      /src\/say-hello\.js$/, // Replace the say-hello.js module
      path.resolve(__dirname, 'src', 'say-hello-browser.js') // Use say-hello-browser.js instead
    )
  ],

  // Module configuration
  module: {
    rules: [
      {
        test: /.(js|jsx)$/, // Apply the following rules to JavaScript and JSX files
        include: [path.resolve(__dirname, 'src')], // Only include files in the src directory
        loader: 'babel-loader', // Use babel-loader for transpiling

        options: {
          plugins: ['syntax-dynamic-import'], // Enable syntax-dynamic-import plugin

          presets: [
            [
              '@babel/preset-env',
              {
                modules: false // Disable module transformation
              }
            ]
          ]
        }
      }
    ]
  },

  // Optimization configuration
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          priority: -10, // Set priority for splitting vendor modules
          test: /[\\/]node_modules[\\/]/ // Split modules from node_modules directory
        }
      },

      chunks: 'async', // Split async chunks
      minChunks: 1, // Minimum number of chunks that must share a module before splitting
      minSize: 30000, // Minimum size of a chunk before splitting
      name: true // Use original name for the split chunks
    },
    minimize: true, // Enable minimization
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          mangle: false, // Disable mangling of variable and function names
          output: {
            beautify: true // Beautify the output for easier debugging
          },
          compress: {
            dead_code: true, // Remove dead code
            if_return: true // Optimize if statements with return statements
          }
        }
      })
    ]
  },

  // Development server configuration
  devServer: {
    open: true // Automatically open the application in the browser
  }
};
