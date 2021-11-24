<template>
    <div class='cube'>
        <div class="top"></div>
        <div>
            <span style="--i:0;" ></span>
            <span style="--i:1;" ></span>
            <span style="--i:2;" ></span>
            <span style="--i:3;" ></span>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style>
*
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.cube{
    position: relative;
    width: 10vmin;
    height: 10vmin;
    transform-style: preserve-3d;
    transform: rotateX(-30deg);
    animation: animate 4s linear infinite;
}
@keyframes animate 
{
    0%
    {
        transform: rotateX(-30deg) rotateY(0deg);

    }
    100%{
        transform: rotateX(-30deg) rotateY(360deg);
    }
}
.cube div{
    position:absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}
.cube div span{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#151515,#00ec00);
    transform: rotateY(calc(90deg * var(--i))) translateZ(5vmin);
}
.top{
    position: absolute;
    top:0;
    left: 0;
    width: 10%;
    height: 10%;
    background: #222;
    transform: rotateX(90deg) translateZ(5vmin);

}
.top::before{
    content: '';
    position: absolute;
    top:0;
    left: 0;
    width: 10vmin;
    height: 10vmin;
    background: #0f0;
    transform: translateZ(-15vmin);
    filter: blur(20px);
    box-shadow: 0 0 120px rgba(0, 255, 0,0.2),
    0 0 200px rgba(0, 255, 0,0.4),
    0 0 300px rgb(0, 255, 0,0.6),
    0 0 400px rgba(0, 255, 0,0.8),
    0 0 500px rgba(0, 255, 0,1);
}
</style>