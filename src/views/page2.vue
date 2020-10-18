<template>
<div class="about_wrapper">
    <div class="about_title">
        <h1>はじめまして。<br>橋本美咲と申します。</h1>
    </div>
    <div class="about_contents">
        <div class="about_profile">
            <div class="title">〜自己紹介〜</div>
            <p>名前：橋本美咲</p>
            <p>年齢：２４</p>
            <!-- <p>最終学歴：福岡女学院大学</p> -->
            <p>人生の目標：とりあえずやってみる。</p>
        </div>
        <div class="about_skills">
            <div class="title">〜技術〜</div>
            <p>言語：HTML、CSS、javascript</p>
            <p>フレームワーク：Vue.js</p>
        </div>
        <div class="about_history">
            <p class="title">〜経歴〜</p>
            <ul class="timeline">
            <li>
                <p class="timeline-date">大学1年生</p>
                <div class="timeline-content">
                <h3>他大学のインターンシッププロジェクトへ参加</h3>
                <p>海外進出をする企業の課題抽出し、その解決に取組む。企業の人との週1で実施していた会議と観客50人強を前にしたプレゼンに苦しんだ９ヶ月間。</p>
                </div>
            </li>
            <li>
                <p class="timeline-date">大学2年生</p>
                <div class="timeline-content">
                <h3>大学の課題解決型プロジェクトへ参加</h3>
                <p>課題は、某求人サイトの登録者数を増やすTシャツデザインと利用シーンの考案。東京の大学生とのプレゼン対決をし、東京勢のレベルの高さに圧倒される。</p>
                </div>
            </li>
            <li>
                <p class="timeline-date">大学3年生</p>
                <div class="timeline-content">
                <h3>AFS福岡学生支部代表として</h3>
                <p>１年生の頃からAFS(異文化学習の機会を提供する世界的な教育団体)というボランティア団体へ所属。その福岡学生部代表として、支部の運営や国際交流キャンプの企画・運営を行う。これまでは消極的だった他支部との交流を盛んに行い、落込み気味の学生支部を活発化させた。夏には、留学生と福岡の小・中・高校生100人が参加する国際交流キャンプを開催。参加者へ異文化へ触れる機会を創出した。</p>
                </div>
            </li>
            <li>
                <p class="timeline-date">大学4年生</p>
                <div class="timeline-content">
                <h3>茶道部部長として</h3>
                <p>3年生の頃に茶道部へ入部し、4年生で部長を努める。入部当初はブラックサークル気味なところがあり、部長になる頃には部員が大幅に減少し僅か３名に。部のブラックはホワイトにし、部長業務をこなしつつ、学生課との交渉や後輩指導に力をいれることで、茶道部を存続させた。冬には、３名という少人数で、例年より広いお茶室でのお茶会を成功させる。</p>
                </div>
            </li>
            <li>
                <p class="timeline-date">社会人1年生</p>
                <div class="timeline-content">
                <h3>東京進出</h3>
                <p>技術を身に付けたいと思いIT企業を志望し、現在勤めている会社へ入社するため上京。入社後、2ヶ月でCCNAを取得する。３ヶ月目に現場へ配属され、バイリンガルエンジニアとしてサーバーの運用保守を担当する。確認と復習を徹底して実施しており、SLA超過の無い安定したオペレーションを実現する。最近は新人教育にも任されており、新人の理解度に合わせて教育を進めることを心掛けている。</p>
                </div>
            </li>
            <li>
                <p class="timeline-date">社会人2年生</p>
                <div class="timeline-content">
                <h3>転職活動中...</h3>
                <p>「用意された手順通りに、言われた通りに、動く」という今の仕事に焦りを感じ、4月頃からプログラミングの勉強を始め今に至る。</p>
                </div>
            </li>

            </ul>            
        </div>
    </div>
    
</div>
</template>

<script>
</script>

<style scoped lang ="scss">
    .about_wrapper{
        background-color: #fff;
        width: 80%;
        display: inline-block;
        margin: 0 auto;
        margin-top: 40px;
        margin-bottom: 25px;

        .about_title{
            background-color: #fff;
            padding: 50px 30px;
            font-size: 25px;
            text-align: left;
            border-bottom: solid 15px #e7e7e7;
        }
        .about_contents{
            .title{
                background-color: #820117;
                font-size: 19px;
                display: inline-block;
                color: #fff;
                margin-bottom: 14px;
            }

            .about_profile,
            .about_skills,
            .about_history{
                padding: 25px 0;
                border-bottom: solid 15px #e7e7e7;
                line-height: 1.4;
            }

            .about_history{
            .timeline {
                list-style: none;
                margin: 0 auto;
                width: 85%;                
                }
            .timeline > li {
                margin: 0;
                position: relative;
                display: flex;
                } 
            .timeline-date {
                width: 110px;
                padding-top: 20px;
                }
            .timeline-content {
                text-align: left;
                width: 87%;
                border-left: 3px #e7e7e7 solid;
                padding-left: 10px;
                padding-top: 20px;
                line-height: 1.4;
                }
            .timeline-content:before {
                content: '';
                width: 12px;
                height: 12px;
                background: #820117;
                position: absolute;
                left: 106px;
                top: 24px;
                border-radius: 100%;
                }
            }
            }
            }

            /* タブレットのスタイル */
            @media screen and (max-width: 959px){
                .timeline-content:before {
                    display: none;
                }
                .timeline-date{
                    color: #820117;
                }
            }


            /* スマホのスタイル */
            @media screen and (max-width: 559px){
                .about_title{
                    h1{
                    font-size: 24px;
                    padding: 0px 0px;

                    }
                }
                
                .about_history{
                .timeline > li {
                    flex-direction: column;
                } 
                .timeline-date{
                    color: #820117;
                    text-align: left;
                }
                .timeline-content{
                    p{
                    font-size: 16px;
                    padding-top: 5px;
                    }
                }                
                .timeline-content:before{
                    display: none;
                }
                }

            }
         
            

</style>