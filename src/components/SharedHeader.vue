<template>
<div class="header-wrapper">
    <div class="header-nav">
      <ul>
        <router-link tag=li id="home-nav" to="/" exact><a>HOME</a></router-link>
        <router-link tag=li id="about-nav" to="/page2"><a>ABOUT</a></router-link>
        <router-link tag=li id="works-nav" to="/page3"><a>WORKS</a></router-link>
        <router-link tag=li id="contact-nav" to="/page4"><a>CONTACT</a></router-link>
      </ul>
    </div>
</div>
</template>

<style lang="scss" scoped>
  .header-wrapper{
    background-color: #F7F7F7;  
    color:#333; 
    font-size: 18px;
    line-height: 4rem;
    min-height: 4rem;
    margin-bottom: auto;
  }

  .header-nav{
    display: inline-block;
    width: 70%;
  }

  ul{
    list-style: none;
    display: flex;

   li:first-child {
     margin-right: auto;
     font-weight: 700;
    }
   li:not(:first-child) {
     padding-left: 30px;
    }

     a{
      text-decoration: none;
      color: #333;
    }
    :hover{
      cursor: pointer;
      color: #820117;
    } 
  }

/* スマホのスタイル */
@media screen and (max-width: 559px){
    .header-wrapper{
    font-size: 14px;
    line-height: 4rem;
    min-height: 4rem;

    ul{
      display: flex;
      justify-content: center;
      align-items: center;
    
    li:first-child {
     margin-right: 0;
    }
  

    }
  }

}

</style>