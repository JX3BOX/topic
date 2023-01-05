<template>
    <div class="m-index">
        <!-- 第一屏：人物&标题 -->
        <div class="m-first m-screen">
            <div class="people"></div>
            <div class="title pa"></div>
            <div class="fish-1 pa"></div>
        </div>
        <!-- 第二屏：视频&鱼 -->
        <div class="m-two m-screen">
            <div class="u-title pa">序</div>
            <div class="video pa"></div>
            <div class="lantern pa"></div>
            <div class="fish-2 pa"></div>
        </div>
        <!-- 第三屏：门派 -->
        <div class="m-three m-screen">
            <div class="u-title pa">
                <span class="label">PART <b>01</b></span>
                <span class="value">侠</span>
                <span class="value value-hover">侠之章</span>
                <span class="desc">本部分主要介绍游戏内部的全部门派，以及对应门派的攻略和数据资源。</span>
            </div>
            <div class="m-content pa">
                <div class="mark" :class="`mark-${active}`"></div>
                <div :class="`people-${active} pa`"></div>
                <div :class="`text-${active} pa`">
                    <img :src="`${__imgRoot}school/${active}-text.png`" class="img" />
                    <div class="txt">
                        {{ mp[active] }}
                    </div>
                </div>
                <a href="https://www.jx3box.com/macro/#/" target="_blank" class="macro pa"></a>
            </div>
            <div class="m-name pa">
                <span
                    class="u-name"
                    v-for="(item, key) in mp"
                    :key="key"
                    :class="{ active: key == active, [`u-${key}`]: true }"
                    @click="change(key)"
                ></span>
            </div>
        </div>
        <!-- 第四屏： pve玩法 -->
        <div class="m-four m-screen">
            <div class="u-title pa">
                <span class="label">PART <b>02</b></span>
                <span class="value">面</span>
                <span class="value value-hover">面之章</span>
                <span class="desc">
                    本部分主要介绍游戏内主流PVE玩法，方便各位新玩家了解并找到自己喜欢的内容以及相对应的攻略或数据资源。
                </span>
            </div>
            <div class="m-content">
                <div class="m-item">
                    <div class="fb" :style="play.fb.style">
                        <div class="mark" :style="play.fb.mark">
                            <div class="text" :style="play.fb.textStyle">
                                <span class="label">{{ play.fb.label }}</span>
                                <span class="title">{{ play.fb.title }}</span>
                                <span class="desc">{{ play.fb.desc }}</span>
                                <span class="info" style="margintop: 39px">{{ play.fb.info }}</span>
                                <a href="http://" target="_blank" class="boss alink"></a>
                                <a href="http://" target="_blank" class="alink"></a>
                            </div>
                        </div>
                    </div>
                    <div class="baizhan" :style="play.baizhan.style">
                        <div class="mark" :style="play.baizhan.mark">
                            <div class="text" :style="play.baizhan.textStyle">
                                <span class="label">{{ play.baizhan.label }}</span>
                                <span class="title">{{ play.baizhan.title }}</span>
                                <span class="desc">{{ play.baizhan.desc }}</span>
                                <span class="info" style="margintop: 17px">{{ play.baizhan.info }}</span>
                                <a href="http://" target="_blank" class="alink" style="bottom: 10px"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="m-item">
                    <div class="week" :style="play.week.style">
                        <div class="mark" :style="play.week.mark">
                            <div class="text" :style="play.week.textStyle">
                                <span class="label">{{ play.week.label }}</span>
                                <span class="title">{{ play.week.title }}</span>
                                <span class="desc">{{ play.week.desc }}</span>
                                <span class="info" style="margintop: 20px">{{ play.week.info }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-box">
                        <div class="left">
                            <div class="lang" :style="play.lang.style">
                                <div class="mark" :style="play.lang.mark">
                                    <div class="text">
                                        <span class="label">{{ play.lang.label }}</span>
                                        <span class="title">{{ play.lang.title }}</span>
                                        <span class="info">{{ play.lang.info }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="shilian" :style="play.shilian.style">
                                <div class="mark" :style="play.shilian.mark">
                                    <div class="text">
                                        <span class="label">{{ play.shilian.label }}</span>
                                        <span class="title">{{ play.shilian.title }}</span>
                                        <span class="info">{{ play.shilian.info }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="more" :style="play.more.style">
                            <div class="mark" :style="play.more.mark"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第五屏：pvp玩法 -->
        <div class="m-five m-screen">
            <div class="u-title pa">
                <span class="label">PART <b>03</b></span>
                <span class="value">武</span>
                <span class="value value-hover">武之章</span>
                <span class="desc">
                    本部分主要介绍游戏内主流PVP玩法，方便各位新玩家了解并找到自己喜欢的内容以及相对应的攻略或数据资源。
                </span>
            </div>
            <div class="m-content">
                <div class="carousel">
                    <div class="content" v-for="(item, i) in pvp" :key="i">
                        <template v-if="index == i">
                            <span class="label">{{ item.label }}</span>
                            <span class="title">{{ item.title }}</span>
                            <span class="desc">{{ item.desc }}</span>
                            <span class="info">{{ item.info }}</span>
                        </template>
                    </div>
                    <span class="arr left pa"></span>
                    <span class="arr right pa"></span>
                    <div class="m-dot pa">
                        <span class="dot" v-for="item in pvpArr" :key="item" :class="{ active: index == item }"> </span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 第六屏：其他玩法 -->
        <div class="m-six m-screen">
            <div class="u-title pa">
                <span class="label">PART <b>04</b></span>
                <span class="value">缘</span>
                <span class="value value-hover">缘之章</span>
                <span class="desc">
                    奇遇，成就，还是伙伴侠客，又或是每个NPC背后的故事？本部分主要介绍游戏内主流PVX玩法。
                </span>
            </div>
            <div class="m-content">
                <div class="carousel">
                    <div class="content" v-for="(item, i) in pvp" :key="i">
                        <template v-if="index == i">
                            <span class="label">{{ item.label }}</span>
                            <span class="title">{{ item.title }}</span>
                            <span class="desc">{{ item.desc }}</span>
                            <span class="info">{{ item.info }}</span>
                        </template>
                    </div>
                    <span class="arr left pa"></span>
                    <span class="arr right pa"></span>
                    <div class="m-dot pa">
                        <span class="dot" v-for="item in pvpArr" :key="item" :class="{ active: index == item }"> </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const KEY = "welcome";
import { getTopic } from "@/service/topic";
import { mp, play, pvp } from "@/assets/data/welcome.json";
export default {
    name: "Index",
    inject: ["__imgRoot"],
    components: {},
    data: function () {
        return {
            active: "wh",
            mp,
            play,
            pvp,
            index: "mjdh",
        };
    },
    directives: {
        animate: {
            inserted: function (el, binding) {
                binding.addClass = () => {
                    const { top } = el.getBoundingClientRect();
                    const h = document.documentElement.clientHeight || document.body.clientHeight;
                    if (top < h) {
                        if (el.className.indexOf(binding.value) == -1) {
                            // 初次还未绑定过，则新增类名(注意：下面单引号中间是一个空格！！！)
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
            unbind: function (el, binding) {
                if (binding.addClass) {
                    window.removeEventListener("scroll", binding.addClass);
                }
            },
        },
    },
    computed: {
        pvpArr() {
            return Object.keys(this.pvp);
        },
    },
    watch: {},
    methods: {
        change(name) {
            this.active = name;
        },
    },
    mounted: function () {},
};
</script>

<style lang="less">
@import "../../assets/css/welcome/index.less";
</style>
