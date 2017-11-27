var path = require('path');

var config = {
	resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      // ================================
      // 自定义路径别名
      // ================================
      ASSET: path.resolve("./src/assets"),
			UTILS: path.resolve("./src/utils"),
			REDUCERS: path.resolve("./src/redux/reducers"),
			STORE: path.resolve("./src/redux/store"),
			ACTIONS:path.resolve("./src/redux/actions"),
			ROUTERS:path.resolve("./src/routers"),
			VIEWS:path.resolve("./src/views"),
			COMPONENTS:path.resolve("./src/components"),
    }
  },
}

module.exports = config;
