const path = require("path");
module.exports = ({config}) => {

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader", // 将 JS 字符串生成为 style 节点
      "css-loader", // 将 CSS 转化成 CommonJS 模块
      "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
    ],
    include: path.resolve(__dirname, "../")
  });
  config.module.rules.push(  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'],
  })
  config.resolve.extensions.push('.ts', '.tsx', 'scss');
  return config;
};