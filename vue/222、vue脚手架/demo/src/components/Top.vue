<template>
<div class='a'>
    <div class="top">
        <ul id='nav' >
            <li v-for="(href, index) in navHref" :key="index"><a :href="href.href" class="aWhite">{{href.name}}</a></li>
        </ul>
        <ul id="userInfos">
            <li v-for="(info, index) in userInfos" :key="index"><a :href="info.href" class="aWhite">{{info.name}}</a></li>
        </ul>
    </div>
</div>
    
    
</template>

<script>
export default {
    data(){
        return {
            navHref:[
                {"id":"001","name":"商城首页","href":"https:starlibrary.online"},
                {"id":"002","name":"手机","href":"https:starlibrary.online"},
                {"id":"003","name":"电脑","href":"https:starlibrary.online"}
            ],
            userInfos:[
                {"id":"001","name":"登录","href":"https:starlibrary.online"},
                {"id":"002","name":"注册","href":"https:starlibrary.online"},
                {"id":"003","name":"消息通知","href":"https:starlibrary.online"}
            ]
        }
    }
}
</script>

<style>
    .a{
        width: 100%;
        background-color:yellow;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .top{
        width: 1024px;
        background-color:#181818;
        height: 40px;
        display: flex;
        align-content: flex-start;
    }
    /**
    @media only screen and (min-width: 300px) and (max-width: 1024px) {
    .top{
        background-color:yellow;
    }
    }
    
    */
    
    #nav{
        display: flex;
        justify-self: left;
        align-items: center;
        width: auto;
        height: 100%;
        margin: 0;
        margin-left: 30px;
        list-style: none;
        padding: 0;
    }
    #nav li{
        list-style: none;
        display: inline;
        margin-left: 10px;
    }
    #userInfos{
        display: flex;
        justify-self: right;
        align-items: center;
        width: auto;
        height: 100%;
        margin: 0;
        list-style: none;
        justify-content: flex-end;
        padding: 0;
    }
    #userInfos li{
        list-style: none;
        display: inline;
        margin-right: 10px;
    }
    .aWhite{
        text-decoration: none;
        color:#b0b0b0;
    }
    .aWhite:hover{
        color: #fff;
    }
</style>