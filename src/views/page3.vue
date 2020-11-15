<template>
<div class="works">
    <div class="works_title">
      <h1>制作物</h1>
      <div class="for_pc">
        <p>めちゃんこがんばって作りました。穏やかな心で御覧ください。</p>
      </div>
      <div class="for_sp">
        <p>
          めちゃんこがんばって作りました。
        </p>
        <p>
          穏やかな心で御覧ください。
        </p>
      </div>
    </div>
    
    <div id ="works" class = "works_items">
      <div v-for= "work in works" v-bind:key="work" class="works_item">
          <div class="item_body">
              <div class="item_top">
                <img v-bind:src="work.image_src">
              </div>
              <div class="item_bottom">
                <div class="item_title">{{ work.title }}</div>
                <p>{{ work.description }}</p>
                <p>使用言語：{{ work.words }}</p>
                <p>制作期間：{{ work.duration }}</p>
                <a v-bind:href="work.url" target="_blank">みてみる</a>
              </div>
         </div> 
     </div>
    </div>

</div>
</template>

<script>
export default {
  name: 'works',
  data () {
    return {
      works:[
        {
        image_src: require("/Users/hashimotomisaki/Documents/プログラミング/ポートフォリオ/セット_main/MyPortfolioSite/src/assets/work0.png") ,
        title: "橋本美咲のポートフォリオ",
        description: "Vue.jsを使用し、SPAサイトを作りました。サイトのデザインは某印の無い良品をイメージして作成しています。",
        words:"HTML  CSS  Vue.js",
        duration:"１ヶ月",
        url:"http://localhost:8081/"
        },
        {
        image_src: require("/Users/hashimotomisaki/Documents/プログラミング/ポートフォリオ/セット_main/MyPortfolioSite/src/assets/work1.png") ,
        title:"あなたの頑張りを記録するアプリ",
        description:"ドットインストールで学んだストップウォッチをベースに、時間と内容を記録できるアプリを作ってみました。",
        words:"HTML  CSS  JavaScript  jQuery",
        duration:"１ヶ月",
        url:"https://hashimotoz.github.io/LetsRecordStudyTime/"
        },
        {
        image_src: require("/Users/hashimotomisaki/Documents/プログラミング/ポートフォリオ/セット_main/MyPortfolioSite/src/assets/coming-soon.png") ,
        title: "ただいま制作中",
        description: "---",
        words:"---",
        duration:"---",
        url:"#"
        }
      ]
    }
    }
}
</script>

<style scoped lang ="scss">
.works_title{
  padding: 50px 0;
  
  h1{
    font-size: 40px;
  }

  .for_sp{
    display: none;
  }
}

.works_items{
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 0 auto;
}

.works_item{
  padding: 15px;
  background-color: #fff;
  border-radius: 3%;
  width: 30%;
  transition: 0.5s;
  /* &:hover {
    transform: scale(1.2);
  } */
}

.item_top{
  img{
    border: solid  #820117 0.5px;
    width: 100%;
    height: 300px;
  }
}

.item_bottom{
  line-height: 1.4;
  .item_title {
    padding: 8px 0px;
    font-size: 20px;
    font-weight: 700;
    color: #820117;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
  a{
    display: inline-block;
    padding: 11px;
    text-decoration: none;
    &:hover{
      background-color:#820117;
      color: #fff;
      border-radius: 12%;
      font-weight: bold ;
    }
  }
}

/* タブレットのスタイル */
@media screen and (max-width: 959px){
.works_items{
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.works_item{
  padding: 15px;
  margin-bottom: 20px;
  width: 100%;
  transition: initial;
  &:hover {
    transform: initial;
  }
}
.item_top{
  img{
    border: solid  #820117 0.5px;
    width: 100%;
    height: 400px;
  }
}
.item_bottom{
  p {
    overflow-wrap: break-word;
  }
}
}

/* スマホのスタイル */
@media screen and (max-width: 559px){
.works_title{
  h1{
    font-size: 25px;
  }

  .for_pc{
    display: none;
  }
.for_sp{
    display: block;
  }

}

.works_items{
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.works_item{
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
  transition: initial;
  &:hover {
    transform: initial;
  }
}

.item_top{
  img{
    border: solid  #820117 0.5px;
    width: 100%;
    height: 200px;
  }
}

.item_bottom{
  .item_title {
    font-size: 14px;
  }
  p {
    font-size: 12px;
    overflow-wrap: break-word;
  }
}
}

</style>