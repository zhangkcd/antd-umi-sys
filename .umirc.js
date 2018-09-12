
// ref: https://umijs.org/config/
import { resolve } from "path";

export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      // dva: true,
      dva: {
        immer: true
      },
      dynamicImport: true,//true：按需加载
      title: 'antd-umi-sys',
      dll: false,
      pwa: false,
      hardSource: false,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
          /chart\/Container\.js$/,
          /chart\/ECharts\/.+Component\.js$/,
          /chart\/ECharts\/.+ComPonent\.js$/,
          /chart\/ECharts\/theme\/.+\.js$/,
          /chart\/highCharts\/.+Component\.js$/,
          /chart\/highCharts\/mapdata\/.+\.js$/,
          /chart\/Recharts\/.+Component\.js$/,
          /chart\/Recharts\/Container\.js$/,
        ],
      },
    }],
  ],
  theme: './theme.config.js',
  alias: {
    themes: resolve(__dirname, './src/themes'),
    components: resolve(__dirname, "./src/components"),
    utils: resolve(__dirname, "./src/utils"),
    config: resolve(__dirname, "./src/utils/config"),
    services: resolve(__dirname, "./src/services"),
    models: resolve(__dirname, "./src/models"),
  },
  "proxy": {
    // "/api": {
    //   "target": "http://jsonplaceholder.typicode.com/",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api" : "" }
    // }
  }
}