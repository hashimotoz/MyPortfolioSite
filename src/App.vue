<template>
  <div id="app">
    <SharedHeader/>
    <router-view/>
    <SharedFooter/>
  </div>
</template>

<script>
import 'normalize.css'
import SharedHeader from './components/SharedHeader'
import SharedFooter from './components/SharedFooter'

export default {  
  name: 'app',
  components : {
    SharedHeader,
    SharedFooter
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}
*{
    margin: 0;
    padding: 0px;
}
#app {
  font-family: 游ゴシック, "Yu Gothic", YuGothic,"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Osaka, メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS P Gothic", sans-serif;
  background-color: #e7e7e7;
  color: #333;
  width: 100%;
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
}

</style>
