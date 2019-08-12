const withSass = require('@zeit/next-sass');

module.exports = withSass({
  postcssLoaderOptions: {},
  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(js|tsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      }
    );
    return config;
  }
});
