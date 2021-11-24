<template>
    <!--底部导航栏-->
    <div id="bottemDiv">
        <div  style="height: 30vh; width: 35vw;margin-left: 15vw;">
        <ul style="list-style: none;font-size: 2vmin;padding: 0;" >
            <li style="margin-bottom: 2vh;">
                <span style="font-size: 5vmin;font-family: Georgia, 'Times New Roman', Times, serif;" >
                   <a href="https://starlibrary.online" class="footer" >StarLibrary</a> 
                </span> 
            </li>
            <li class="li_footer">
                <span>
                   © 2020-2021 <a href="https://starlibrary.online" class="footer" >starlibrary.com </a>版权所有
                </span> 
            </li>
            <li class="li_footer">
                <span>
                    本网站仅供学习使用
                </span> 
            </li>
            <li class="li_footer">
                <span>
                    ICP证：<a href="http://beian.miit.gov.cn" class="footer" >津ICP备20000024号</a> 
                </span>  
            </li>
            <li class="li_footer">
                <img src="img/备案图标.png" alt="" height="15px"  >
                <span>
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=5176.12825654.7y9jhqsfz.111.54212c4aBH6Hwq" class="footer">苏公网安备 32021402001231号</a> 
                </span> 
            </li>
        </ul>
        </div>
        <div  style="height: 30vh; width: 35vw;margin-right: 15vw; display: flex; justify-content: flex-end;">
        <div style=" margin: 0 auto;margin-top: 5vh;font-size: 2vmin;">
            <dl>
                <dt id="first" >
                    本周开馆音乐：
                </dt>
                <dd>
                    Xenogenesis
                </dd>
            </dl>
            <dl>
                <dt id="last"> 
                    本周闭馆音乐：
                </dt>
                <dd>
                    Dreamer
                </dd>
            </dl>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Bottem',
    data(){
        return {
        }
    }
}
</script>

<style>
    #bottemDiv{
        width: 100vw;
        height: 40vh;
        background-color:#181818;
        display: flex; 
        align-items: center;
        justify-content: space-between;
        color: white;
        min-height: 190px;
        min-width: 1024px;
    }
    .li_footer{
        margin-top: 1vh;
        font-size: 2vmin;
    }
    /*
        footer：无下划线、白色、访问后不变、成为焦点时不变
    */
    .footer{
        color:#ffffff;
        text-decoration: none;
    }
</style>