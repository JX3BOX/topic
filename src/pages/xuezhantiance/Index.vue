<template>
    <div class="m-index">
        <div class="m-layout">
            <div class="m-top">
                <img class="m-top-retouch" :src="`${imgPath}/top-bg-retouch.png`" />
                <div class="m-top-other-img m-index">
                    <img class="m-top-author" :src="`${imgPath}/top-author.png`" />
                    <div class="m-top-main">
                        <img class="m-top-title" :src="`${imgPath}/top-title.png`" />
                        <img class="m-top-title-tip" :src="`${imgPath}/top-title-tip.png`" />
                        <img class="m-top-jump__icon" :src="`${imgPath}/top-jump-icon.png`" />
                    </div>
                </div>
            </div>
            <!-- 血战天策 -->
            <div class="m-one">
                <img class="m-plate-img" :src="`${imgPath}/p1/title.png`" />
                <div class="m-plate-text">
                    <p>史诗级“血战天策”战役将在战乱后的天策府打响，</p>
                    <p>乱世中英勇侠士们与狼牙军的巅峰对决即将上演!</p>
                    <p>护城河已被鲜血染红，</p>
                    <p>再现乱世大唐众侠与安禄山为首的狼牙军之间的终极对决!</p>
                </div>
                <div class="m-boss-list">
                    <div class="m-item">
                        <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                        <img class="m-item-boss__icon" :src="`${imgPath}/p1/b-xsy.png`" />
                        <span class="m-item-boss__name">席庶云</span>
                        <span></span>
                        <span class="m-item-boss__brief">在守住城门一段时间后，席庶云就会出现</span>
                        <div class="m-item-boss__tip">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>合作 时机</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item m-item__left">
                        <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                        <img class="m-item-boss__icon" :src="`${imgPath}/p1/g-gstcf.png`" />
                        <span class="m-item-boss__name"></span>
                        <span class="m-item-boss__level">关卡：固守天策府</span>
                        <span class="m-item-boss__brief">阻止狼牙士兵的进攻，为攻城部队赢取时间</span>
                        <div class="m-item-boss__tip">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>合作 时机</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item">
                        <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                        <img class="m-item-boss__icon" :src="`${imgPath}/p1/b-cyl.png`" />
                        <span class="m-item-boss__name">曹炎烈</span>
                        <span></span>
                        <span class="m-item-boss__brief">
                            狼牙军中的“山狼”，天策府曹雪阳将军之兄， 是狼牙中为数不多的几个汉人。
                            安禄山将狼牙与三镇之间所有的联系事务都交给了他。
                        </span>
                        <div class="m-item-boss__tip">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>操作 移动</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item m-item__left">
                        <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                        <img class="m-item-boss__icon" :src="`${imgPath}/p1/g-shqymc.png`" />
                        <span class="m-item-boss__name"></span>
                        <span class="m-item-boss__level">关卡：守护青骓牧场</span>
                        <span class="m-item-boss__brief">
                            天策府、青骓牧场西方的天策属地已尽数被狼牙占领， 战事危机。侠士受委托前往前线击败狼牙军，
                            以解战事之急。
                        </span>
                        <div class="m-item-boss__tip">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>操作 移动</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item">
                        <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                        <img class="m-item-boss__icon" :src="`${imgPath}/p1/b-asncl.png`" />
                        <span class="m-item-boss__name">阿史那从礼</span>
                        <span></span>
                        <span class="m-item-boss__brief">
                            四十岁，突厥人，父亲是曾经的突厥王阿史那玉，有一个孪生兄弟阿史那承庆。当年他们兄弟被突厥老将军哥舒恒所救，但是突厥王庭已被唐军攻破，父亲也成了阶下囚，两兄弟无家可归，只好领着残余军队流浪在漠北。为了复国，他们投靠了安禄山，安禄山非常赏识他们，任命为狼牙的“八大金刚”之首。
                        </span>
                        <div class="m-item-boss__tip">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>转火 机动</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 镇派新结构 -->
            <div class="m-two">
                <img class="m-plate-img" :src="`${imgPath}/p2/title.png`" />
                <div class="m-plate-text">
                    <p>新镇派系统全面适配！武学体系灵活构建！</p>
                </div>
                <div class="m-factions-box">
                    <div class="m-factions-bg"></div>
                    <img class="m-factions-change__icon" :src="`${imgPath}/p2/c-o-factions.svg`" />
                    <img class="m-factions-detail" :src="`${imgPath}/p2/new-factions.png`" />
                    <img class="m-factions-kv" :src="`${imgPath}/p2/factions-kv.png`" />
                    <div class="m-factions-tip__text">
                        <span>*以[拥雪]为例</span>
                    </div>
                </div>
                <img class="m-factions-retouch" :src="`${imgPath}/top-bg-retouch.png`" />
            </div>
            <!-- 非酋福音 -->
            <div class="m-three">
                <img class="m-plate-img" :src="`${imgPath}/p3/title.png`" />
                <div class="m-plate-text">
                    <p>低保装备仍不满意？集碎片来自选！</p>
                </div>
                <div class="m-award-box">
                    <img class="m-award-title" :src="`${imgPath}/p3/plate-tip.png`" />

                    <div class="m-award-info">
                        <div class="m-award-info__item">
                            <img class="m-item-icon" :src="`${imgPath}/p3/icon-1.png`" />
                            <div class="m-item-detail">
                                <img class="m-item-detail__bg" :src="`${imgPath}/p3/text-bg.svg`" />
                                <div class="m-item-detail__text">
                                    <span>侠士可以在兑换商店将归墟秘境获得的绑定精简装备通过指定道具拆解为碎片</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-award-info__connect">
                            <img :src="`${imgPath}/p3/connect-icon.svg`" />
                        </div>
                        <div class="m-award-info__item">
                            <img class="m-item-icon" :src="`${imgPath}/p3/icon-1.png`" />
                            <div class="m-item-detail">
                                <img class="m-item-detail__bg" :src="`${imgPath}/p3/text-bg.svg`" />
                                <div class="m-item-detail__text">
                                    <span>侠士可以在兑换商店将归墟秘境获得的绑定精简装备通过指定道具拆解为碎片</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-award-info__connect">
                            <img :src="`${imgPath}/p3/connect-icon.svg`" />
                        </div>
                        <div class="m-award-info__item">
                            <img class="m-item-icon" :src="`${imgPath}/p3/icon-1.png`" />
                            <div class="m-item-detail">
                                <img class="m-item-detail__bg" :src="`${imgPath}/p3/text-bg.svg`" />
                                <div class="m-item-detail__text">
                                    <span>侠士可以在兑换商店将归墟秘境获得的绑定精简装备通过指定道具拆解为碎片</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 萌新成长 -->
            <div class="m-four">
                <img class="m-plate-img" :src="`${imgPath}/p4/title.png`" />
                <div class="m-plate-text">
                    <p>初入江湖的侠士，你们的福气真来了！</p>
                </div>
                <img class="m-stage-title m-stage-title__foster" :src="`${imgPath}/p4/yc-title.png`" />
                <div class="m-content-box">
                    <div class="m-foster-top">
                        <div class="m-foster-item">
                            <h1 class="m-foster-title">粽子免费领！</h1>
                            <p class="m-foster-text">
                                1、所有未满级的萌新侠士每天可在花萼楼界面领取3~5个随机数量的升级粽子助力升级，可领取7天；
                            </p>
                            <p class="m-foster-text">
                                2、粽子不再有每日使用个数限制，直升丸子的使用等级要求下降为5级。
                            </p>
                            <img class="m-foster-icon" :src="`${imgPath}/p4/cy-icon.png`" />
                        </div>
                        <div class="m-foster-item">
                            <h1 class="m-foster-title">萌新专属频道！</h1>
                            <p class="m-foster-text">
                                初入江湖的萌新会自动进入萌新频道，频道内有专属导师手把手提供帮助。
                            </p>
                            <img class="m-foster-icon" :src="`${imgPath}/p4/cj-icon.png`" />
                        </div>
                    </div>
                    <div class="m-foster-bottom">
                        <div class="m-foster-item">
                            <h1 class="m-foster-title">新手历程优化！</h1>
                            <p class="m-foster-text">1、降低了新手技能的内力消耗；</p>
                            <p class="m-foster-text">2、提高了稻香村任务的经验值，出村即为15级，可直接进入门派拜师；</p>
                            <p class="m-foster-text">3、全地图经验增益效果提升，助力侠士更快满级。</p>
                            <img class="m-foster-icon" :src="`${imgPath}/p4/tc-icon.png`" />
                        </div>
                        <div class="m-foster-item">
                            <h1 class="m-foster-title">精炼6折开启！</h1>
                            <p class="m-foster-text">1、活动期间新建角色首次精炼消耗为原来的60%；</p>
                            <p class="m-foster-text">
                                2、新建角色满级后可获得持续30天的20层增益，携带该增益且激活月卡时完成大战、阵营日常可获得额外五行石奖励，助力初入江湖的侠士轻松精5插5达到团本门槛。
                            </p>
                            <img class="m-foster-icon" :src="`${imgPath}/p4/sl-icon.png`" />
                        </div>
                    </div>
                </div>
                <img class="m-stage-title m-stage-title__master" :src="`${imgPath}/p4/st-title.png`" />
                <div class="m-content-box">
                    <div class="m-foster-item m-master-box">
                        <h1 class="m-foster-title">活动期间</h1>
                        <p class="m-foster-text">1.当侠士的徒弟达到指定装分，师徒双方都可以获得活动代币。</p>
                        <p class="m-foster-text">2.可通过代币商店将活动代币兑换为五行石、挂件等奖励。</p>
                        <p class="m-foster-text">3.新秘境更新2个月后，师父可将部分往期门派套装装备直接交易给徒弟。</p>
                        <img class="m-foster-icon" :src="`${imgPath}/p4/act-tip.png`" />
                    </div>
                </div>
            </div>
            <!-- 师徒系统更新 -->
            <div class="m-five"></div>
            <!-- 随心置顶 -->
            <div class="m-six"></div>
            <!-- 系统更便捷 -->
            <div class="m-seven"></div>
        </div>
    </div>
</template>

<script>
const KEY = "xuezhantiance";
import { getTopic } from "@/service/topic";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "Index",
    components: {},
    data: function () {
        return {
            imgPath: __imgPath + "topic/" + KEY,
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
        data: function () {
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
    watch: {},
    methods: {
        init: function () {
            getTopic(KEY).then((res) => {
                this.raw = res.data.data;
                // this.video = this.data.index_video[0]["link"];
                // this.pve = this.data.index_pve;
            });
        },
        hanldMask(event) {
            let x = -event.clientX / 150;
            let y = -event.clientY / 150;
            if (this.$refs.mark) {
                this.$refs.mark.style.backgroundPositionX = x + "px";
                this.$refs.mark.style.backgroundPositionY = y + "px";
            }
        },
    },
    mounted: function () {
        this.init();
        window.addEventListener("mousemove", this.hanldMask);
    },
};
</script>

<style lang="less">
@import "~@/assets/css/xuezhantiance/index.less";
</style>
