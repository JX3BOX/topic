(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16cc4567"],{"0d76":function(a,t,i){"use strict";i.d(t,"a",(function(){return n}));i("99af");var e=i("41cb");function n(a){return Object(e["a"])({mute:!0}).get("/api/cms/topic",{params:{type:a,status:1}})}},1058:function(a,t,i){a.exports=i.p+"media/top.c23e849b.mp4"},"5ad4":function(a,t,i){},"61cf":function(a,t,i){"use strict";i.r(t);i("9911");var e=function(){var a=this,t=a._self._c;return t("div",{staticClass:"m-index"},[t("div",{staticClass:"m-top"},[t("video",{staticClass:"m-mp4",attrs:{playsinline:"",autoplay:"",muted:"",loop:"",poster:a.pic.top},domProps:{muted:!0}},[t("source",{attrs:{src:i("1058"),type:"video/mp4"}})]),t("img",{directives:[{name:"animate",rawName:"v-animate",value:"bounceIn",expression:"'bounceIn'"}],staticClass:"logo p-animation",attrs:{src:a.pic.logo}}),t("span",{staticClass:"m-mark"})]),t("div",{staticClass:"m-content"},[t("div",{directives:[{name:"animate",rawName:"v-animate",value:"slideInDown",expression:"'slideInDown'"}],staticClass:"m-introduction p-animations"},[t("img",{staticClass:"img",attrs:{src:a.pic.introduction}})]),t("div",{staticClass:"m-one"},[t("h2",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInDown",expression:"'fadeInDown'"}],staticClass:"p-animation"},[t("img",{attrs:{src:a.title[1]}})]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"m-box p-animations"},[a._l(a.fb,(function(a){return t("a",{key:a.id,class:["u-item","u-item-".concat(a.id)],attrs:{href:a.link,target:"_blank"}},[t("img",{staticClass:"u-img1",attrs:{src:a.img}}),t("img",{staticClass:"u-img2",attrs:{src:a.desc}})])})),t("span",{staticClass:"u-mark"})],2),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"bounceIn",expression:"'bounceIn'"}],staticClass:"m-txt p-animation"},[t("img",{attrs:{src:a.pic.txt}})])]),t("div",{staticClass:"m-two"},[t("h2",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInDown",expression:"'fadeInDown'"}],staticClass:"p-animation"},[t("img",{attrs:{src:a.title[2]}})]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"m-box p-animation"},[t("img",{staticClass:"u-img u-left",attrs:{src:a.pic.left}}),t("img",{staticClass:"u-img u-right",attrs:{src:a.pic.right}}),t("el-carousel",{staticClass:"u-carousel",attrs:{type:"card",trigger:"click",height:"400px",autoplay:!1}},a._l(a.slider,(function(a){return t("el-carousel-item",{key:a.id,staticClass:"u-item"},[t("img",{attrs:{src:a.img}})])})),1)],1)]),t("div",{staticClass:"m-three"},[t("h2",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInDown",expression:"'fadeInDown'"}],staticClass:"p-animation"},[t("img",{attrs:{src:a.title[3]}})]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"m-box p-animation"},[t("div",{staticClass:"m-sect"},a._l(a.data.sect,(function(a,i){return t("a",{key:a.id,class:["u-item","u-item-".concat(i)],attrs:{href:a.link,target:"_blank"}},[t("img",{attrs:{src:a.img}})])})),0)])]),t("div",{staticClass:"m-four"},[t("h2",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInDown",expression:"'fadeInDown'"}],staticClass:"p-animation"},[t("img",{attrs:{src:a.title[4]}})]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"m-box p-animation"},a._l(a.play,(function(a,i){return t("a",{key:a.id,class:["u-item","u-item-".concat(i)],attrs:{href:a.link,target:"_blank"}})})),0)]),t("div",{staticClass:"m-five"},[t("h2",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInDown",expression:"'fadeInDown'"}],staticClass:"p-animation"},[t("img",{attrs:{src:a.title[5]}})]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"m-box p-animation"},a._l(a.info,(function(a,i){return t("a",{key:a.id,class:["u-item","u-item-".concat(i)],attrs:{href:a.link,target:"_blank"}},[t("img",{attrs:{src:a.img}})])})),0)])])])},n=[],s=(i("d3b7"),i("159b"),i("14d9"),i("0d76")),c=i("2ef0"),r="anshizhiluan",o={name:"Index",data:function(){return{raw:[],pic:{},title:{},play:{},fb:[],slider:[],info:[]}},directives:{animate:{inserted:function(a,t){t.addClass=function(){var i=a.getBoundingClientRect(),e=i.top,n=document.documentElement.clientHeight||document.body.clientHeight;e<n&&(-1==a.className.indexOf(t.value)&&(a.className=t.value+" "+a.className),t.addClass&&window.removeEventListener("scroll",t.addClass))},window.addEventListener("scroll",t.addClass,!0),t.addClass()},unbind:function(a,t){t.addClass&&window.removeEventListener("scroll",t.addClass)}}},computed:{data:function(a){var t={};return this.raw.forEach((function(a){t[a.subtype]||(t[a.subtype]=[]),t[a.subtype].push(a)})),t}},methods:{init:function(){var a=this;Object(s["a"])(r).then((function(t){a.raw=t.data.data,a.pic=a.changePic(a.data.pic,"desc"),a.title=a.changePic(a.data.title,"desc"),a.play=Object(c["sortBy"])(a.data.play,(function(a){return a.id})),a.slider=a.data.slider,a.fb=Object(c["sortBy"])(a.data.fb,(function(a){return a.id})),a.info=Object(c["sortBy"])(a.data.info,(function(a){return a.id})),console.log(a.info)}))},changePic:function(a,t){var i=Object(c["keyBy"])(a,t);for(var e in i)i[e]=i[e].img;return i},change:function(a){console.log(a)}},mounted:function(){this.init()}},m=o,d=(i("75d5"),i("2877")),l=Object(d["a"])(m,e,n,!1,null,null,null);t["default"]=l.exports},"75d5":function(a,t,i){"use strict";i("5ad4")}}]);
//# sourceMappingURL=chunk-16cc4567.18e85e65.js.map