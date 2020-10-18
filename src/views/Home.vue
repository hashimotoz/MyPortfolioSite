<template>
<div class="home_wrapper">
  <div class="home_contents">
    <h1 class="home_logo">橋本美咲<br>のポート<br>フォリオ</h1>
    <p>Welcome to my portfolio.</p> 
  </div>
</div>
</template>

<script>
</script>

<style scoped lang="scss">
*{
    margin: 0;
}

.home_wrapper{
    color: #333;  
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    .home_contents{
        display: inline-block;
    } 
    .home_logo{
        color: #fff;
        font-size: 100px;
        display: inline-block;
        background-color: #820117;
        padding: 50px;
    }
    p{
        text-align: center;
        font-size: 50px;
        color: #fff;
        padding: 35px 0px 0px 0px;
        /* text-shadow: 0.3px 0.3px #333; */
    }
}

/* スマホのスタイル */
@media screen and (max-width: 559px){

    .home_wrapper{
        .home_logo{
            font-size: 50px;
            padding: 30px;
        }
    p{
        font-size: 30px;
        padding: 20px 0px 0px 0px;
        }
    }
}
</style>