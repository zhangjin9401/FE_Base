#步骤
    🔗https://segmentfault.com/a/1190000016494957
    -1 全局下载webpack:    npm i -g webpack;
    -2 项目初始化:  npm init -y;
    -3 安装vue 和 webpack:  npm i webpack webpack-dev-server webpack-cli --save-dev  &&  npm i vue --save;
    -4 根目录下新建webpack的配置文件webpack.config.js;
        配置 入口、出口路径、打包后文件名和devServer的相关配置项;
    -5 新建index.html作为项目的主体页面，留出入口文件，入口文件的路径为webpack打包后输出的路径;
    -6 新建在src目录用来存放各种组件和静态文件，在src目录下新建入口文件main.js;
    -7 为方便开发调试，打包以及后期的代码编写便捷，我们需要对webpack进行初步配置,自定义npm 命令;
    -8 在webpack.config.js中配置alias 别名,resolve是webpack关于解析的配置项，alias允许你在项目中使用路径别名代替复杂的路径。;
    -9 在index.html中添加挂载点(#app);
    -10 在 main.js中引入vue;
    -11 安装样式文件解析器 :npm i style-loader css-loader  less less-loader vue-style-loader  -–save-dev；
    -12 在webpack.config.js中配置解析器；
    -13 在src目录下新建目录assets/styles存放统一样式，新建index.less，写一段less代码；
    -14 在src/main.js中引入样式 import './assets/styles/index.less'
    ******************************************************************************
    至此已经可以开启一个项目了呢
# 优化
    -1  配置loader——使用babel：babel可以让我们在项目中自由的使用es6语法，他会为我们将es6语法编译成浏览器普遍通用的es5语法
            npm install --save-dev @babel/core @babel/cli @babel/preset-env
            npm install --save @babel/polyfill
    -2  使用单文件组件: npm install vue-loader vue-template-compiler --save-dev;
    -3  在src下新建单文件组件 App.vue;