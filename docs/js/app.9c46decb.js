(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/MyPortfolioSite/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0a55":function(t,e,a){},"405c":function(t,e,a){"use strict";var n=a("92df"),i=a.n(n);i.a},"56b0":function(t,e,a){"use strict";var n=a("a171"),i=a("7695"),r=(a("74a5"),a("2877")),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"6cf6b05a",null);e["default"]=s.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("SharedHeader"),a("router-view"),a("SharedFooter")],1)},r=[],s=(a("f5df1"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-wrapper"},[a("div",{staticClass:"header-nav"},[a("ul",[a("router-link",{attrs:{tag:"li",id:"home-nav",to:"/",exact:""}},[a("a",[t._v("HOME")])]),a("router-link",{attrs:{tag:"li",id:"about-nav",to:"/page2"}},[a("a",[t._v("ABOUT")])]),a("router-link",{attrs:{tag:"li",id:"works-nav",to:"/page3"}},[a("a",[t._v("WORKS")])]),a("router-link",{attrs:{tag:"li",id:"contact-nav",to:"/page4"}},[a("a",[t._v("CONTACT")])])],1)])])}),o=[],c=(a("cdab"),a("2877")),l={},u=Object(c["a"])(l,s,o,!1,null,"8c43d834",null),d=u.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-wrapper"},[a("p",[t._v("© 2020 MidsakiHashimoto")])])}],p=(a("405c"),{}),_=Object(c["a"])(p,f,v,!1,null,"9586088e",null),m=_.exports,b={name:"app",components:{SharedHeader:d,SharedFooter:m}},h=b,g=(a("5c0b"),Object(c["a"])(h,i,r,!1,null,null,null)),C=g.exports,w=a("8c4f"),y=a("6511"),j=a("56b0"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"works"},[t._m(0),a("div",{staticClass:"works_items",attrs:{id:"works"}},t._l(t.works,(function(e){return a("div",{key:e,staticClass:"works_item"},[a("div",{staticClass:"item_body"},[a("div",{staticClass:"item_top"},[a("img",{attrs:{src:e.image_src}})]),a("div",{staticClass:"item_bottom"},[a("div",{staticClass:"item_title"},[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.description))]),a("p",[t._v("使用言語："+t._s(e.words))]),a("p",[t._v("制作期間："+t._s(e.duration))]),a("a",{attrs:{href:e.url,target:"_blank"}},[t._v("みてみる")])])])])})),0)])},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"works_title"},[a("h1",[t._v("制作物")]),a("p",[t._v("めちゃんこがんばって作りました。穏やかな心で御覧ください。")])])}],S={name:"works",data:function(){return{works:[{image_src:a("ce6c"),title:"橋本美咲のポートフォリオ",description:"フレームワークの勉強もかねてVue.jsを使用し、SPAサイトを作りました。サイトのデザインは某印の無い良品をイメージして作成しています。",words:"javascripts vue.js",duration:"１ヶ月",url:"http://localhost:8081/"},{image_src:a("8802"),title:"あなたの頑張りを記録するアプリ",description:"ドットインストールで学んだストップウォッチをベースに、時間と内容を記録できるアプリを作ってみました。",words:"javascripts jQuery",duration:"１ヶ月",url:"https://hashimotoz.github.io/LetsRecordStudyTime/"},{image_src:a("e6d0"),title:"ただいま制作中",description:"---",words:"---",duration:"---",url:"#"}]}}},x=S,E=(a("a8fa"),Object(c["a"])(x,k,O,!1,null,"2a22defe",null)),$=E.exports,P=a("bcbd");n["a"].use(w["a"]);var T=[{path:"/",name:"home",component:y["default"]},{path:"/page2",name:"page2",component:j["default"]},{path:"/page3",name:"page3",component:$},{path:"/page4",name:"page4",component:P["default"]}],M=new w["a"]({mode:"history",base:"/MyPortfolioSite/",routes:T}),A=M,H=a("2f62");n["a"].use(H["a"]);var F=new H["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=a("ecee"),J=a("b702"),N=a("ad3d");L["c"].add(J["a"]),n["a"].component("font-awesome-icon",N["a"]),n["a"].config.productionTip=!1,new n["a"]({router:A,store:F,render:function(t){return t(C)}}).$mount("#app")},"593d":function(t,e,a){"use strict";var n=a("7818"),i=a.n(n);e["default"]=i.a},"5c0b":function(t,e,a){"use strict";var n=a("9c0c"),i=a.n(n);i.a},6511:function(t,e,a){"use strict";var n=a("7882"),i=a("593d"),r=(a("b136"),a("2877")),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"bc294c0e",null);e["default"]=s.exports},"6ed9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("h1",[t._v("橋本へ連絡しちゃう")]),a("a",{attrs:{href:"mailto:m.hashimoto.oshigoto.gmail.com"}},[a("font-awesome-icon",{attrs:{icon:["far","envelope"]}})],1)])},i=[]},"74a5":function(t,e,a){"use strict";var n=a("75d6"),i=a.n(n);i.a},"75d6":function(t,e,a){},7695:function(t,e,a){"use strict";var n=a("ee5a"),i=a.n(n);e["default"]=i.a},7818:function(t,e){},7882:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home_wrapper"},[a("div",{staticClass:"home_contents"},[a("h1",{staticClass:"home_logo"},[t._v("橋本美咲"),a("br"),t._v("のポート"),a("br"),t._v("フォリオ")]),a("p",[t._v("Welcome to my portfolio.")])])])}]},8802:function(t,e,a){t.exports=a.p+"img/work1.01c2d624.png"},"922f":function(t,e,a){},"92df":function(t,e,a){},"93e7":function(t,e,a){"use strict";var n=a("dc3c"),i=a.n(n);e["default"]=i.a},"9c0c":function(t,e,a){},a171:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return i}));var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about_wrapper"},[a("div",{staticClass:"about_title"},[a("h1",[t._v("はじめまして。"),a("br"),t._v("橋本美咲と申します。")])]),a("div",{staticClass:"about_contents"},[a("div",{staticClass:"about_profile"},[a("div",{staticClass:"title"},[t._v("〜自己紹介〜")]),a("p",[t._v("名前：橋本美咲")]),a("p",[t._v("年齢：２４")]),a("p",[t._v("人生の目標：とりあえずやってみる。")])]),a("div",{staticClass:"about_skills"},[a("div",{staticClass:"title"},[t._v("〜技術〜")]),a("p",[t._v("言語：HTML、CSS、javascript")]),a("p",[t._v("フレームワーク：Vue.js")])]),a("div",{staticClass:"about_history"},[a("p",{staticClass:"title"},[t._v("〜経歴〜")]),a("ul",{staticClass:"timeline"},[a("li",[a("p",{staticClass:"timeline-date"},[t._v("大学1年生")]),a("div",{staticClass:"timeline-content"},[a("h3",[t._v("他大学のインターンシッププロジェクトへ参加")]),a("p",[t._v("海外進出をする企業の課題抽出し、その解決に取組む。企業の人との週1で実施していた会議と観客50人強を前にしたプレゼンに苦しんだ９ヶ月間。")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("大学2年生")]),a("div",{staticClass:"timeline-content"},[a("h3",[t._v("大学の課題解決型プロジェクトへ参加")]),a("p",[t._v("課題は、某求人サイトの登録者数を増やすTシャツデザインと利用シーンの考案。東京の大学生とのプレゼン対決をし、東京勢のレベルの高さに圧倒される。")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("大学3年生")]),a("div",{staticClass:"timeline-content"},[a("h3",[t._v("AFS福岡学生支部代表として")]),a("p",[t._v("１年生の頃からAFS(異文化学習の機会を提供する世界的な教育団体)というボランティア団体へ所属。その福岡学生部代表として、支部の運営や国際交流キャンプの企画・運営を行う。これまでは消極的だった他支部との交流を盛んに行い、落込み気味の学生支部を活発化させた。夏には、留学生と福岡の小・中・高校生100人が参加する国際交流キャンプを開催。参加者へ異文化へ触れる機会を創出した。")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("大学4年生")]),a("div",{staticClass:"timeline-content"},[a("h3",[t._v("茶道部部長として")]),a("p",[t._v("3年生の頃に茶道部へ入部し、4年生で部長を努める。入部当初はブラックサークル気味なところがあり、部長になる頃には部員が大幅に減少し僅か３名に。部のブラックはホワイトにし、部長業務をこなしつつ、学生課との交渉や後輩指導に力をいれることで、茶道部を存続させた。冬には、３名という少人数で、例年より広いお茶室でのお茶会を成功させる。")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("社会人1年生")]),a("div",{staticClass:"timeline-content"},[a("h3",[t._v("東京進出")]),a("p",[t._v("技術を身に付けたいと思いIT企業を志望し、現在勤めている会社へ入社するため上京。入社後、2ヶ月でCCNAを取得する。３ヶ月目に現場へ配属され、バイリンガルエンジニアとしてサーバーの運用保守を担当する。確認と復習を徹底して実施しており、SLA超過の無い安定したオペレーションを実現する。最近は新人教育にも任されており、新人の理解度に合わせて教育を進めることを心掛けている。")])])]),a("li",[a("p",{staticClass:"timeline-date"},[t._v("社会人2年生")]),a("div",{staticClass:"timeline-content"},[a("h3",[t._v("転職活動中...")]),a("p",[t._v("「用意された手順通りに、言われた通りに、動く」という今の仕事に焦りを感じ、4月頃からプログラミングの勉強を始め今に至る。")])])])])])])])}]},a8fa:function(t,e,a){"use strict";var n=a("b009"),i=a.n(n);i.a},b009:function(t,e,a){},b136:function(t,e,a){"use strict";var n=a("922f"),i=a.n(n);i.a},bcbd:function(t,e,a){"use strict";var n=a("6ed9"),i=a("93e7"),r=(a("d484"),a("2877")),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"37f84ff0",null);e["default"]=s.exports},be9a:function(t,e,a){},cdab:function(t,e,a){"use strict";var n=a("be9a"),i=a.n(n);i.a},ce6c:function(t,e,a){t.exports=a.p+"img/work0.e5edf8ca.png"},d484:function(t,e,a){"use strict";var n=a("0a55"),i=a.n(n);i.a},dc3c:function(t,e){},e6d0:function(t,e,a){t.exports=a.p+"img/coming-soon.1520bae9.png"},ee5a:function(t,e){}});
//# sourceMappingURL=app.9c46decb.js.map