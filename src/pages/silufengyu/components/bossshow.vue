<template>
    <div class="boss-show">
      <!-- BOSS 图片区域 -->
      <div class="boss-show__container">
        <ul class="boss-show__list">
          <li
            v-for="(boss, index) in bosses"
            :key="index"
            class="boss-show__item"
            :class="{ active: activeBoss === index }"
            @click="selectBoss(index)"
          >
            <!-- 动态拼接图片路径 -->
            <img
              :src="buildImgUrl(activeBoss === index ? boss.litImage : boss.unlitImage)"
              :alt="boss.name"
              class="boss-show__image"
            />
          </li>
        </ul>
      </div>

      <!-- BOSS 描述区域 -->
      <div v-if="activeBoss !== null" class="boss-show__description">
        <!-- Textbox 背景图 -->
        <div
          class="boss-show__textbox"
          :style="{ 'background-image': `url(${buildImgUrl('005/textbox.jpg')})` }"
        >
          <!-- 编号标题，如 "1号首领" -->
          <h3 class="boss-show__number">{{ activeBoss + 1 }}号首领</h3>

          <!-- BOSS 名称 -->
          <h2 class="boss-show__title">{{ bosses[activeBoss].title }}</h2>

          <!-- BOSS 描述 -->
          <p class="boss-show__text">{{ bosses[activeBoss].description }}</p>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: "BossShow",
    inject: ["__imgRoot"], // 从父组件注入图片根路径

    data() {
      return {
        activeBoss: 0, // 默认第一个 BOSS 被选中
        bosses: [
          {
            name: "boss1",
            title: "雪谷谷主 · 骆耀阳",
            description: "闻名西域的雪谷谷主骆耀阳善使刀法，以信物‘三刀六洞’威慑帮众。",
            litImage: "005/boss/boss1-lit.jpg",
            unlitImage: "005/boss/boss1-unlit.jpg",
          },
          {
            name: "boss2",
            title: "戮夜游 · 影主 · 韦柔丝",
            description: "自东海归来，韦柔丝便频繁带领戮夜游众人游走于西域各处，徐徐开展自己的布局。",
            litImage: "005/boss/boss2-lit.jpg",
            unlitImage: "005/boss/boss2-unlit.jpg",
          },
          {
          name: "boss3",
          title: "冰川宫宫主 · 宋泉",
          description: "宋泉自幼拜入冰川宫门下，于剑术上颇有造诣，《天山剑法》在她手上声名远播。",
          litImage: "005/boss/boss3-lit.jpg",   // 点亮状态图片
          unlitImage: "005/boss/boss3-unlit.jpg" // 未点亮状态图片
        },
        {
          name: "boss4",
          title: "铁煞拳 · 伍靖远",
          description: "伍靖远是大漠令人闻风丧胆的悍匪‘怒砂铁旅’四将之一，拥有足以开碑裂石的铁拳。",
          litImage: "005/boss/boss4-lit.jpg",   // 点亮状态图片
          unlitImage: "005/boss/boss4-unlit.jpg" // 未点亮状态图片
        },
        {
          name: "boss5",
          title: "古拉姆 · 苏什",
          description: "‘古拉姆’一词源出波斯语，昭示苏什不为人知的过去。而今，他只是沙州驼行内一名识途的养驼人。",
          litImage: "005/boss/boss5-lit.jpg",   // 点亮状态图片
          unlitImage: "005/boss/boss5-unlit.jpg" // 未点亮状态图片
        },
        {
          name: "boss6",
          title: "先知 · 芭德",
          description: "芭德是粟特散商们口中敬奉的‘先知’，她晦涩难懂的话语，能将迷路的商队引向正途，或是带来商机与财富。",
          litImage: "005/boss/boss6-lit.jpg",   // 点亮状态图片
          unlitImage: "005/boss/boss6-unlit.jpg" // 未点亮状态图片
         } // 其他 BOSS 数据...」』
        ]
      };
    },

    methods: {
      buildImgUrl(image) {
        return `${this.__imgRoot}${image}`; // 动态构建图片完整路径
      },

      selectBoss(index) {
        this.activeBoss = index; // 切换当前选中的 BOSS
      },
    },
  };
  </script>

<style lang="less" scoped>
  .boss-show {
    text-align: center;
  }

  .boss-show__container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .boss-show__list {
    display: flex;
  }

  .boss-show__item {
    margin: 0 10px;
    cursor: pointer;
  }

  .boss-show__image {
    width: 150px;
    height: auto;
    transition: transform 0.3s ease;
  }

  .boss-show__item.active .boss-show__image {
    transform: scale(1.1); /* 放大选中的 BOSS */
  }

  .boss-show__description {
    margin-top: 20px;
  }

  /* 背景图样式 */
  .boss-show__textbox {
    .size(480px,130px);
    background-position: center;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    position: relative;
    margin: 20px auto;
    max-width: 600px;
    background-color: transparent;
  }

  /* 编号标题样式 */
  .boss-show__number {
    font-size: 14px;
    font-weight: 700;
    line-height: 18.48px;
    text-align: center;
    margin-bottom: 10px;
    color: #7a1f1766;
  }

  /* BOSS 名称样式 */
  .boss-show__title {
    font-size: 24px;
    font-weight: 700;
    line-height: 31.68px;
    text-align: center;
    margin-bottom: 10px;
    color: #7a1f17;
  }

  /* 描述文本样式 */
  .boss-show__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 21.12px;
    text-align: center;
    color: #7a1f17;
  }
  </style>
