const { build } = require('esbuild');
const lessPlugin = require('esbuild-plugin-less');

build({
  // 入口文件，可根据实际情况修改
  entryPoints: ['src/index.js'], 
  // 输出文件路径和名称，可根据实际情况修改
  outfile: 'dist/bundle.js', 
  bundle: true,
  // 启用 sourcemap，方便调试
  sourcemap: true, 
  // 添加 less 插件
  plugins: [lessPlugin()], 
  // 其他配置项
  // ... 
}).catch(() => process.exit(1));