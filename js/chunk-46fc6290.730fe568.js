(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46fc6290"],{"0d76":function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("99af");var a=i("41cb");function s(t){return Object(a["a"])({mute:!0}).get("/api/cms/topic",{params:{type:t,status:1}})}},"0e43":function(t,e,i){},"363d":function(t,e,i){"use strict";i.r(e);i("99af");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"m-index"},[e("div",{staticClass:"m-top"},[e("img",{staticClass:"u-kv p-animations fadeInDown",attrs:{src:"".concat(t.imgPath,"/kv.jpg")}})]),e("div",{staticClass:"m-excessive"},[e("img",{staticClass:"u-img",attrs:{src:"".concat(t.imgPath,"/excessive1-l.png")}}),e("img",{staticClass:"u-img",attrs:{src:"".concat(t.imgPath,"/excessive1-r.png")}}),e("div",{staticClass:"u-img-line"},[e("img",{attrs:{src:"".concat(t.imgPath,"/excessive-line.png")}})])]),e("div",{staticClass:"m-two"},[t._l(4,(function(i){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.active===i,expression:"active === item"}],key:i,staticClass:"image-group",class:t.changeClass},[e("div",{staticClass:"prev"},[e("img",{staticClass:"p-animations",attrs:{src:"".concat(t.imgPath,"/").concat(t.prevIndex,".jpg")}})]),e("div",{staticClass:"cur"},[e("img",{staticClass:"p-animations",attrs:{src:"".concat(t.imgPath,"/").concat(t.active,".jpg")}})]),e("div",{staticClass:"next"},[e("img",{staticClass:"p-animations",attrs:{src:"".concat(t.imgPath,"/").concat(t.nextIndex,".jpg")}})])])})),e("div",{staticClass:"u-switch"},t._l(4,(function(i){return e("div",{key:i,staticClass:"u-round",class:{solid:t.active===i},on:{click:function(e){return t.changeActive(i)}}})})),0)],2),e("div",{staticClass:"m-excessive2"},[e("img",{staticClass:"u-img",attrs:{src:"".concat(t.imgPath,"/excessive2.png")}})]),e("div",{staticClass:"m-three"},[e("div",{staticClass:"u-main-box"},[e("div",{staticClass:"u-video",domProps:{innerHTML:t._s(t.video)}})]),e("div",{staticClass:"u-five-box"},[t._l(t.boxData,(function(i,a){return e("div",{key:a,staticClass:"u-item-box",class:t.boxActive===a?"u-item-box-active":"",on:{click:function(e){return t.chooseImage(a)}}},[e("img",{staticClass:"u-img",attrs:{src:"".concat(t.imgPath,"/").concat(i.imageName)}})])})),e("div",{staticClass:"u-item-box",on:{click:t.getMoreVideos}},[e("img",{staticClass:"u-img",attrs:{src:"".concat(t.imgPath,"/five-6.png")}})])],2)]),e("div",{staticClass:"m-excessive3"},[e("img",{staticClass:"u-img",attrs:{src:"".concat(t.imgPath,"/excessive3.png")}})]),e("div",{staticClass:"m-four"},[e("img",{attrs:{src:"".concat(t.imgPath,"/qrcode_index_box.png"),alt:""}})])])},s=[],n=(i("d3b7"),i("159b"),i("14d9"),i("0d76")),c=i("65c2"),r="wujie",o={name:"Index",components:{},data:function(){return{imgPath:c["__imgPath"]+"topic/"+r,active:1,timer:null,boxActive:0,prevIndex:4,nextIndex:2,changeFlag:"",boxData:[{imageName:"five-1.png",videoUrl:"<iframe src = '//player.bilibili.com/player.html?bvid=BV1vn4y1d7NX' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"},{imageName:"five-2.png",videoUrl:"<iframe src = '//player.bilibili.com/player.html?bvid=BV1NS411N74E' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"},{imageName:"five-3.png",videoUrl:"<iframe src = '//player.bilibili.com/player.html?bvid=BV1bx4y1J71h' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"},{imageName:"five-4.png",videoUrl:"<iframe src = '//player.bilibili.com/player.html?bvid=BV1Nw4m1v77C' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"},{imageName:"five-5.png",videoUrl:"<iframe src = '//player.bilibili.com/player.html?bvid=BV1xS411K7MP' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'> </iframe>"}],video:""}},directives:{animate:{inserted:function(t,e){e.addClass=function(){var i=t.getBoundingClientRect(),a=i.top,s=document.documentElement.clientHeight||document.body.clientHeight;a<s&&(-1==t.className.indexOf(e.value)&&(t.className=e.value+" "+t.className),e.addClass&&window.removeEventListener("scroll",e.addClass))},window.addEventListener("scroll",e.addClass,!0),e.addClass()},unbind:function(t,e){e.addClass&&window.removeEventListener("scroll",e.addClass)}}},computed:{data:function(){var t={};return this.raw.forEach((function(e){t[e.subtype]||(t[e.subtype]=[]),t[e.subtype].push(e)})),t},changeClass:function(){switch(this.changeFlag){case"up":return"change-image-up";case"down":return"change-image-down";default:return""}}},watch:{},methods:{init:function(){var t=this;Object(n["a"])(r).then((function(e){t.raw=e.data.data,t.video=t.boxData[0].videoUrl}))},hanldMask:function(t){var e=-t.clientX/150,i=-t.clientY/150;this.$refs.mark&&(this.$refs.mark.style.backgroundPositionX=e+"px",this.$refs.mark.style.backgroundPositionY=i+"px")},changeActive:function(t){var e=this;""===this.changeFlag&&this.active!==t&&(clearInterval(this.timer),this.active>t?(this.prevIndex=t,this.changeFlag="down"):(this.nextIndex=t,this.changeFlag="up"),setTimeout((function(){e.changeFlag="",e.active=t,e.setActiveImage(),e.timer=setInterval((function(){e.changeFlag="up",setTimeout((function(){e.changeFlag="",4===e.active?e.active=1:e.active++,e.setActiveImage()}),1e3)}),5e3)}),1e3))},chooseImage:function(t){this.boxActive=t,this.video=this.boxData[t].videoUrl},getMoreVideos:function(){window.open("https://space.bilibili.com/2066064028")},setActiveImage:function(){1===this.active?this.prevIndex=4:this.prevIndex=this.active-1,4===this.active?this.nextIndex=1:this.nextIndex=this.active+1}},mounted:function(){var t=this;this.init(),window.addEventListener("mousemove",this.hanldMask),this.timer=setInterval((function(){t.changeFlag="up",setTimeout((function(){t.changeFlag="",4===t.active?t.active=1:t.active++,t.setActiveImage()}),1e3)}),5e3)},beforeDestroy:function(){clearInterval(this.timer)}},l=o,m=(i("bb83"),i("2877")),d=Object(m["a"])(l,a,s,!1,null,null,null);e["default"]=d.exports},bb83:function(t,e,i){"use strict";i("0e43")}}]);
//# sourceMappingURL=chunk-46fc6290.730fe568.js.map