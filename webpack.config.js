// webpack 必须采用common.js写法
let path=require('path');//专门处理路径用的，以当前路径解析出一个相对路径
let HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:'./src/js/main.js',
    // entry:{
    //     main:'./src/js/main.js',
    //     main1:'./src/js/main1.js'
    // },
    //打包的入口文件，webpack会自动查找相关的依赖进行打包
    output:{
        filename: "bundle.js",//打包后的名字
        // filename: "[name].js",//打包后的名字
        path:path.resolve('./dist'), //必须是一个绝对路径，自带方法
        // path:__dirname+'/dist'//不建议
    },

    //模块解析规则
    // - js匹配所有的js  用babel-loader转义 排除掉node_modules
    module:{
        rules: [
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},//use时从右往前写
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            // 转化base64，只在8192字节以下转化，其它情况下输出图片
            {test:/\.(jpg|png|gif|jpeg)$/,use:['url-loader?limit=8192']},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:['url-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({//自动插入到dist目录中
            template:'./src/html/index.html',
            filename:'index.html'
        })
    ]
};