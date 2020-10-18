<template>
<div class="footer-wrapper">
   <p >&copy; 2020 MidsakiHashimoto</p>
</div>
</template>

<style lang="scss" scoped>
 .footer-wrapper{ 
    background-color: #F7F7F7;
    margin-top: auto;
  }

  p{
    display: inline-block;
    text-align: center;
    min-height: 3rem;
    line-height: 3rem; 
    margin: 0 auto;
    color:#333; 
    font-size: 16px;
  }

/* スマホのスタイル */
  @media screen and (max-width: 559px){
    p{
      font-size: 14px;
    }
    }

  
</style>