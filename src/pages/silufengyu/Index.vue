<template>
    <div class="container">
        <!-- 主横幅 -->
        <section class="banner">
            <img class="banner__logo" :src="buildImgUrl('bg/banner__title.png')" alt="丝路风语" />
        </section>
        <!-- 剧情推进模块 -->
        <section class="story-progress">
            <!-- 包裹图片和叠加文本 -->
            <div class="story-progress__content">
                <!-- 在图片上叠加的文本 -->
                <div class="story-progress__text">
                    <h2 class="u-title">剧情推进</h2>
                    <p class="u-desc">
                        振武军探得史朝义已派特使潜入回鹘，另一边吐蕃频扰河西，甚至已取得丝绸之路南道的主导权。九天深感西域的动向将直接影响大唐与周边民族的格局，可如今的大唐岌岌可危，西域形势更是扑朔迷离。
                    </p>
                </div>
            </div>
        </section>
        <!--pr1  资料片速览 -->
        <section class="rsc-overview">
            <div class="rsc-overview__content m-section">
                <block-title :order="1"></block-title>

                <ul class="expansion-overview__list">
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u1.png')" alt="新地图" class="expansion-overview__image" />
                    </li>
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u2.png')" alt="新门派" class="expansion-overview__image" />
                    </li>
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u3.png')" alt="新副本" class="expansion-overview__image" />
                    </li>
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u4.png')" alt="颜值优化" class="expansion-overview__image" />
                    </li>
                    <li class="expansion-overview__item">
                        <img :src="buildImgUrl('001/pr1u5.png')" alt="引擎升级" class="expansion-overview__image" />
                    </li>
                </ul>
            </div>
        </section>

        <section class="new-map">
            <div class="new-map__content m-section">
                <!-- 标题模块 -->
                <block-title :order="2" class="block-title2"></block-title>

                <!-- 背景图 -->
                <img :src="buildImgUrl('002/pr2-frame1.jpg')" alt="背景图" class="new-map__bg2" />

                <!-- 轮播的主图和文本 -->
                <img :src="currentImage" alt="主图" class="new-map__mainpic" />
                <img :src="buildImgUrl('002/text-bg.png')" alt="文本背景" class="new-map__textbg" />

                <!-- 动态文本 -->
                <div class="new-map__text">
                    <h2 class="u-title">{{ currentTitle }}</h2>
                    <p class="u-desc">{{ currentDescription }}</p>
                </div>
            </div>
        </section>

        <section class="new-sec">
            <div class="new-sec_content m-section">
                <block-title :order="3" class="block-title3"></block-title>
                <img :src="buildImgUrl('003/new-sec__mainpic.png')" alt="主图" class="new-sec__mainpic" />
                <div class="new-sec__text">
                    <h3 class="u-title">段式</h3>
                    <p class="u-desc">苍山雪覆衡门外 洱月观花倦尘嚣 世第含章远逐鹿 周天风劲予逍遥</p>
                    <div class="new-sec__textP">
                        <p class="u-desc1">
                            段氏自春秋时期兴起，跟随历史的步伐南迁，在滇中一带扩张自己的家族势力。为求自保，段氏号召族中弟子习武，在融天岭修建了气势恢宏的大理宫、天龙寺与神剑宫，逐步成为西南豪门。
                        </p>
                        <p class="u-desc2">
                            天宝年间，作为南诏第一武林世家的段氏，被迫卷入南诏王与大唐的纷争中，而南诏皇宫一役却让段氏一族的命运有了新的转机。随着南诏皇宫阁罗凤打压中原武林的计划失败，段氏与南诏皇室间的矛盾显露，但这反而使得段氏家族内部的信念开始统一。
                        </p>
                        <p class="u-desc3">
                            南诏会武后，段氏家主段慎思，以退为进，宣布退任家主之位，并选擢新任家主，试图用此举将段氏彻底从南诏、吐蕃和大唐之间的斗争中摘除。而原本位于融天岭的大理宫，也迁居至洱海，正式更名为大理山庄。
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="duanshi">
            <div class="duanshi_content m-section">
                <block-title :order="4" class="block-title4"></block-title>
                <img :src="buildImgUrl('004/duanshi-frame.jpg')" alt="主图" class="duanshi__mainpic" />

                <!-- 菜单导航栏 -->
                <div class="nav">
                    <div
                        v-for="(tab, index) in tabs"
                        :key="index"
                        class="tab"
                        :class="{ active: activeTab === index }"
                        @click="activeTab = index"
                    >
                        {{ tab }}
                    </div>
                </div>

                <!-- 内容展示区 -->
                <div class="content">
                    <!-- 根据当前激活的 Tab 渲染内容 -->
                    <div v-if="activeTab === 0" class="hero-section">
                        <!-- 武学部分，使用设计师提供的完整图片 -->
                        <img :src="imgurl + 'combined-skill-image.png'" alt="武学展示图" class="full-skill-image" />
                    </div>

                    <!-- 其他 Tab 对应的内容展示（例如校服、场景等）可以在这里实现 -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BlockTitle from "./components/title.vue";

export default {
  name: "Index",
  components: {
    BlockTitle,
  },
  inject: ["__imgRoot"],
  data() {
    return {
      imgurl: "./tmp/", // 你的图片路径
      currentIndex: 0, // 当前轮播索引
      images: ["002/mainpic1.png", "002/mainpic2.png", "002/mainpic3.png"], // 图片路径数组
      titles: ["河西瀚漠", "西域！", "开放！"], // 对应的标题数组
      descriptions: [
        "视线从中原转向有着沙漠和雪山的西域之地，打造前所未有的西域开放大世界！",
        "携手敦煌博物馆和非遗保护中心的赵虎主任细细雕琢出原汁原味的“丝绸之路”",
        "敦煌石窟、汉长城遗址、沙尘暴、哈密瓜田……独属于丝绸之路的风土人情将一幕幕展开，等你自由探索",
      ], // 描述内容数组
      activeTab: 0, // 当前激活的选项卡
      tabs: ["武学", "校服", "场景", "跟宠", "群像", "武器"], // 菜单选项
      active: 0,
      timer: null,
      videoList: [],
      video: "",
      boxActive: 0,
    };
  },
  computed: {
    currentImage() {
      return this.buildImgUrl(this.images[this.currentIndex]);
    },
    currentTitle() {
      return this.titles[this.currentIndex];
    },
    currentDescription() {
      return this.descriptions[this.currentIndex];
    },
    data() {
      let _data = {};
      this.raw.forEach((item) => {
        if (!_data[item.subtype]) {
          _data[item.subtype] = [];
        }
        _data[item.subtype].push(item);
      });
      return _data;
    },
  },
  mounted() {
    this.startCarousel();
    this.init();
    window.addEventListener("mousemove", this.hanldMask);
  },
  methods: {
    buildImgUrl(path) {
      return `${this.imgurl}${path}`;
    },
    startCarousel() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 15000); // 每15秒切换一次
    },
    init() {
      // 你的初始化逻辑
    },
    hanldMask(event) {
      let x = -event.clientX / 150;
      let y = -event.clientY / 150;
      if (this.$refs.mark) {
        this.$refs.mark.style.backgroundPositionX = x + "px";
        this.$refs.mark.style.backgroundPositionY = y + "px";
      }
    },
    imgChange(index) {
      this.active = index;
    },
    setActiveImg(index) {
      this.$refs.imgCarousel.setActiveItem(index);
    },
    chooseImage(index) {
      this.boxActive = index;
      this.video = this.videoList[index].link;
    },
    getMoreVideos() {
      window.open("https://space.bilibili.com/2066064028");
    },
  },
  directives: {
    animate: {
      inserted(el, binding) {
        binding.addClass = () => {
          const { top } = el.getBoundingClientRect();
          const h = document.documentElement.clientHeight || document.body.clientHeight;
          if (top < h) {
            if (!el.className.includes(binding.value)) {
              el.className = binding.value + " " + el.className;
            }
            if (binding.addClass) {
              window.removeEventListener("scroll", binding.addClass);
            }
          }
        };
        window.addEventListener("scroll", binding.addClass, true);
        binding.addClass();
      },
      unbind(el, binding) {
        if (binding.addClass) {
          window.removeEventListener("scroll", binding.addClass);
        }
      },
    },
  },
};
</script>

<style lang="less">
@import "~@/assets/css/silufengyu/index.less";
</style>
