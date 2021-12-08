/*
 * @Author: zhilutianji
 * @Date: 2021-12-08 18:53:52
 * @LastEditors: zhilutianji
 * @LastEditTime: 2021-12-08 19:38:21
 * @Description: file content
 * @FilePath: \ajax\vue.config.js
 */
module.exports = {
    pages: {
        index:{
            //入口
            entry:'src/main.js'
        }
    },
    //关闭语法检查
    lintOnSave:false,
    //开启代理（方式一）
    /**
     * devServer:{
        proxy:'http://localhost:5000'
        }
     */
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:5000',
                pathRewrite:{'^/api':''},
                //ws:true,  用于支持websocket
                changeOrigin:true
                //请求来自于5000，代理会骗人了.jpg
            }
        }
    }
}