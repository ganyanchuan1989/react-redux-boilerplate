module.exports config ={
	resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      // ================================
      // 自定义路径别名
      // ================================
      ASSET: path.join(src, 'assets'),
      UTILS: path.join(src, 'utils'),
    }
  },
}
