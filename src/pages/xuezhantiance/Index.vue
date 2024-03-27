<template>
    <div class="m-index">
        <div class="m-layout">
            <div class="m-top">
                <img class="m-top-retouch" :src="`${imgPath}/top-bg-retouch.png`" />
                <div class="m-top-other-img m-index">
                    <img class="m-top-author" :src="`${imgPath}/top-author.png`" />
                    <div class="m-top-main p-animation" v-animate="'fadeInDown'">
                        <img class="m-top-title" :src="`${imgPath}/top-title.png`" />
                        <img class="m-top-title-tip" :src="`${imgPath}/top-title-tip.png`" />
                        <img class="m-top-jump__icon" :src="`${imgPath}/top-jump-icon.png`" />
                    </div>
                </div>
            </div>
            <!-- 血战天策 -->
            <div class="m-one">
                <img class="m-plate-img p-animation" v-animate="'fadeInDown'" :src="`${imgPath}/p1/title.png`" />
                <div class="m-plate-text p-animation" v-animate="'fadeIn'">
                    <p>史诗级“血战天策”战役将在战乱后的天策府打响，</p>
                    <p>乱世中英勇侠士们与狼牙军的巅峰对决即将上演!</p>
                    <p>护城河已被鲜血染红，</p>
                    <p>再现乱世大唐众侠与安禄山为首的狼牙军之间的终极对决!</p>
                </div>
                <div class="m-boss-list">
                    <div class="m-item">
                        <img
                            class="m-item-boss__icon p-animations"
                            v-animate="'fadeInLeft'"
                            :src="`${imgPath}/p1/b-xsy.png`"
                        />
                        <div class="p-animation" v-animate="'fadeInRight'">
                            <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                            <span class="m-item-boss__name">席庶云</span>
                            <span></span>
                            <span class="m-item-boss__brief">在守住城门一段时间后，席庶云就会出现</span>
                        </div>
                        <div class="m-item-boss__tip p-animation" v-animate="'fadeInLeft'">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>合作 时机</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item m-item__left">
                        <img
                            class="m-item-boss__icon p-animations"
                            v-animate="'fadeInRight'"
                            :src="`${imgPath}/p1/g-gstcf.png`"
                        />
                        <div class="p-animation" v-animate="'fadeInLeft'">
                            <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                            <span class="m-item-boss__name"></span>
                            <span class="m-item-boss__level">关卡：固守天策府</span>
                            <span class="m-item-boss__brief">阻止狼牙士兵的进攻，为攻城部队赢取时间</span>
                        </div>
                        <div class="m-item-boss__tip p-animation" v-animate="'fadeInRight'">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>合作 时机</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item">
                        <img
                            class="m-item-boss__icon p-animations"
                            v-animate="'fadeInLeft'"
                            :src="`${imgPath}/p1/b-cyl.png`"
                        />
                        <div class="p-animation" v-animate="'fadeInRight'">
                            <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                            <span class="m-item-boss__name">曹炎烈</span>
                            <span></span>
                            <span class="m-item-boss__brief">
                                狼牙军中的“山狼”，天策府曹雪阳将军之兄， 是狼牙中为数不多的几个汉人。
                                安禄山将狼牙与三镇之间所有的联系事务都交给了他。
                            </span>
                        </div>
                        <div class="m-item-boss__tip p-animation" v-animate="'fadeInLeft'">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>操作 移动</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item m-item__left">
                        <img
                            class="m-item-boss__icon p-animations"
                            v-animate="'fadeInRight'"
                            :src="`${imgPath}/p1/g-shqymc.png`"
                        />
                        <div class="p-animation" v-animate="'fadeInLeft'">
                            <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                            <span class="m-item-boss__name"></span>
                            <span class="m-item-boss__level">关卡：守护青骓牧场</span>
                            <span class="m-item-boss__brief">
                                天策府、青骓牧场西方的天策属地已尽数被狼牙占领，
                                战事危机。侠士受委托前往前线击败狼牙军， 以解战事之急。
                            </span>
                        </div>
                        <div class="m-item-boss__tip p-animation" v-animate="'fadeInRight'">
                            <div class="m-item-boss__tip__item">
                                <span>机制要点</span>
                            </div>
                            <div class="m-item-boss__tip__item m-item-boss__tip__item__white">
                                <span>操作 移动</span>
                            </div>
                        </div>
                    </div>
                    <div class="m-item">
                        <img
                            class="m-item-boss__icon p-animations"
                            v-animate="'fadeInLeft'"
                            :src="`${imgPath}/p1/b-asncl.png`"
                        />
                        <div class="p-animation" v-animate="'fadeInRight'">
                            <img class="m-item-bg" :src="`${imgPath}/p1/BOSS-bg.png`" />
                            <span class="m-item-boss__name">阿史那从礼</span>
                            <span></span>
                            <span class="m-item-boss__brief">
                                四十岁，突厥人，父亲是曾经的突厥王阿史那玉，有一个孪生兄弟阿史那承庆。当年他们兄弟被突厥老将军哥舒恒所救，但是突厥王庭已被唐军攻破，父亲也成了阶下囚，两兄弟无家可归，只好领着残余军队流浪在漠北。为了复国，他们投靠了安禄山，安禄山非常赏识他们，任命为狼牙的“八大金刚”之首。
                            </span>
                        </div>
                        <div class="m-item-boss__tip p-animation" v-animate="'fadeInLeft'">
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
                <img class="m-plate-img p-animation" v-animate="'fadeInDown'" :src="`${imgPath}/p2/title.png`" />
                <div class="m-plate-text p-animation" v-animate="'fadeIn'">
                    <p>新镇派系统全面适配！武学体系灵活构建！</p>
                </div>
                <div class="m-factions-box p-animation" v-animate="'fadeIn'">
                    <div class="m-factions-bg"></div>
                    <template v-if="factionStatus == 'old'">
                        <img
                            class="m-factions-change__icon p-animation"
                            v-animate="'fadeIn'"
                            @click="changeFactions"
                            :src="`${imgPath}/p2/c-o-factions.svg`"
                            v-if="factionStatus"
                        />
                        <img
                            v-if="factionStatus"
                            class="m-factions-detail p-animation"
                            v-animate="'fadeIn'"
                            :src="`${imgPath}/p2/new-factions.png`"
                        />
                    </template>
                    <template v-else-if="factionStatus == 'new'">
                        <img
                            class="m-factions-change__icon p-animation"
                            v-animate="'fadeIn'"
                            @click="changeFactions"
                            :src="`${imgPath}/p2/c-n-factions.svg`"
                        />

                        <img
                            class="m-factions-detail p-animation"
                            v-animate="'fadeIn'"
                            :src="`${imgPath}/p2/old-factions.png`"
                        />
                    </template>
                    <img
                        class="m-factions-kv p-animation"
                        v-animate="'fadeIn'"
                        :src="`${imgPath}/p2/factions-kv.png`"
                    />
                    <div class="m-factions-tip__text">
                        <span>*以[拥雪]为例</span>
                    </div>
                </div>
                <img class="m-factions-retouch" :src="`${imgPath}/top-bg-retouch.png`" />
            </div>
            <!-- 非酋福音 -->
            <div class="m-three">
                <img class="m-plate-img p-animation" v-animate="'fadeInDown'" :src="`${imgPath}/p3/title.png`" />
                <div class="m-plate-text p-animation" v-animate="'fadeIn'">
                    <p>低保装备仍不满意？集碎片来自选！</p>
                </div>
                <div class="m-award-box">
                    <img
                        class="m-award-title p-animation"
                        v-animate="'fadeInUp'"
                        :src="`${imgPath}/p3/plate-tip.png`"
                    />

                    <div class="m-award-info p-animation" v-animate="'fadeIn'">
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
                            <img class="m-item-icon" :src="`${imgPath}/p3/icon-2.png`" />
                            <div class="m-item-detail">
                                <img class="m-item-detail__bg" :src="`${imgPath}/p3/text-bg.svg`" />
                                <div class="m-item-detail__text">
                                    <span>碎片可自选兑换特效精简装备及最高品级的不带特效的精简装备</span>
                                </div>
                            </div>
                        </div>
                        <div class="m-award-info__connect">
                            <img :src="`${imgPath}/p3/connect-icon.svg`" />
                        </div>
                        <div class="m-award-info__item">
                            <img class="m-item-icon" :src="`${imgPath}/p3/icon-3.png`" />
                            <div class="m-item-detail">
                                <img class="m-item-detail__bg" :src="`${imgPath}/p3/text-bg.svg`" />
                                <div class="m-item-detail__text">
                                    <span>兑换商店会随赛季更新，兑换商店有五行石填充奖励用于处理多余碎片</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 萌新成长 -->
            <div class="m-four">
                <img class="m-plate-img p-animation" v-animate="'fadeInDown'" :src="`${imgPath}/p4/title.png`" />
                <div class="m-plate-text p-animation" v-animate="'fadeIn'">
                    <p>初入江湖的侠士，你们的福气真来了！</p>
                </div>
                <img
                    class="m-stage-title m-stage-title__foster p-animation"
                    v-animate="'fadeInUp'"
                    :src="`${imgPath}/p4/yc-title.png`"
                />
                <div class="m-content-box">
                    <div class="m-foster-top">
                        <div class="m-foster-item p-animation" v-animate="'fadeInLeft'">
                            <h1 class="m-foster-title">粽子免费领！</h1>
                            <p class="m-foster-text">
                                1、所有未满级的萌新侠士每天可在花萼楼界面领取3~5个随机数量的升级粽子助力升级，可领取7天；
                            </p>
                            <p class="m-foster-text">
                                2、粽子不再有每日使用个数限制，直升丸子的使用等级要求下降为5级。
                            </p>
                            <img class="m-foster-icon" :src="`${imgPath}/p4/cy-icon.png`" />
                        </div>
                        <div class="m-foster-item p-animation" v-animate="'fadeInRight'">
                            <h1 class="m-foster-title">萌新专属频道！</h1>
                            <p class="m-foster-text">
                                初入江湖的萌新会自动进入萌新频道，频道内有专属导师手把手提供帮助。
                            </p>
                            <img class="m-foster-icon" :src="`${imgPath}/p4/cj-icon.png`" />
                        </div>
                    </div>
                    <div class="m-foster-bottom">
                        <div class="m-foster-item p-animation" v-animate="'fadeInLeft'">
                            <h1 class="m-foster-title">新手历程优化！</h1>
                            <p class="m-foster-text">1、降低了新手技能的内力消耗；</p>
                            <p class="m-foster-text">2、提高了稻香村任务的经验值，出村即为15级，可直接进入门派拜师；</p>
                            <p class="m-foster-text">3、全地图经验增益效果提升，助力侠士更快满级。</p>
                            <img class="m-foster-icon" :src="`${imgPath}/p4/tc-icon.png`" />
                        </div>
                        <div class="m-foster-item p-animation" v-animate="'fadeInRight'">
                            <h1 class="m-foster-title">精炼6折开启！</h1>
                            <p class="m-foster-text">1、活动期间新建角色首次精炼消耗为原来的60%；</p>
                            <p class="m-foster-text">
                                2、新建角色满级后可获得持续30天的20层增益，携带该增益且激活月卡时完成大战、阵营日常可获得额外五行石奖励，助力初入江湖的侠士轻松精5插5达到团本门槛。
                            </p>
                            <img class="m-foster-icon" :src="`${imgPath}/p4/sl-icon.png`" />
                        </div>
                    </div>
                </div>
                <img
                    class="m-stage-title m-stage-title__master p-animation"
                    v-animate="'fadeInUp'"
                    :src="`${imgPath}/p4/st-title.png`"
                />
                <div class="m-content-box p-animation" v-animate="'fadeInUpBig'">
                    <div class="m-foster-item m-master-box">
                        <h1 class="m-foster-title">活动期间</h1>
                        <p class="m-foster-text">1.当侠士的徒弟达到指定装分，师徒双方都可以获得活动代币。</p>
                        <p class="m-foster-text">2.可通过代币商店将活动代币兑换为五行石、挂件等奖励。</p>
                        <p class="m-foster-text">3.新秘境更新2个月后，师父可将部分往期门派套装装备直接交易给徒弟。</p>
                        <img class="m-foster-icon" :src="`${imgPath}/p4/act-tip.png`" />
                    </div>
                </div>
            </div>
            <!-- 养成系奇遇  -->
            <div class="m-five">
                <img class="m-plate-img p-animation" v-animate="'fadeInDown'" :src="`${imgPath}/p5/title.png`" />
                <div class="m-plate-text p-animation" v-animate="'fadeIn'">
                    <p>该绝世奇遇预计于初夏正式上线，实际以游戏上线内容为准</p>
                </div>
                <div class="m-content-box">
                    <div class="m-adventure-item p-animation" v-animate="'fadeInLeft'">
                        <img class="m-adventure-item__icon" :src="`${imgPath}/p5/main-icon-child.png`" />
                        <div class="m-adventure-item-tip-box">
                            <img class="m-adventure-item-tip__bg" :src="`${imgPath}/p5/tip-text-bg.png`" />
                            <p class="m-adventure-item-tip__text">
                                闲游江湖，为气任侠。一次偶然的出手相助，竟从觅宝会获赠了一把其貌不扬的铲子，柄上篆刻禅语，暗藏佛法妙理。铲子来源何处？曾为何人所有？随着探究的深入，其背后似乎另有一番奇缘……
                            </p>
                        </div>
                    </div>
                    <div class="m-adventure-item p-animation" v-animate="'fadeInRight'">
                        <img class="m-adventure-item__icon" :src="`${imgPath}/p5/main-icon-youth.png`" />
                        <div class="m-adventure-item-tip-box">
                            <img class="m-adventure-item-tip__bg" :src="`${imgPath}/p5/tip-text-bg.png`" />
                            <p class="m-adventure-item-tip__text">
                                江湖传闻，乱枫深处，神秘鬼影趁夜色惊扰村庄；一纸悬赏，闹市之中，何方大侠怀胆气为民揭榜？余丝未了，天一余祸牵扯甚广；是劫是缘，静待诸君一探究竟！
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 行侠豪礼 -->
            <div class="m-six">
                <img class="m-plate-img p-animation" v-animate="'fadeInDown'" :src="`${imgPath}/p6/title.png`" />
                <div class="m-plate-text p-animation" v-animate="'fadeIn'">
                    <p>七级五行石、精美成衣、奇趣坐骑、趣味跟宠</p>
                </div>
                <div class="m-content-box">
                    <img class="m-gift-title p-animation" v-animate="'fadeInUp'" :src="`${imgPath}/p6/zk-icon.png`" />
                    <p class="m-gift-login__text p-animation" v-animate="'fadeIn'">
                        3月21日版本更新后，<br />
                        全民（含新创建角色）赠送6.8折优惠券，活动长期有效。
                    </p>
                    <img class="m-gift-discount" :src="`${imgPath}/p6/discount.png`" />
                    <p class="m-gift-discount__text p-animation" v-animate="'fadeIn'">
                        ※ 折扣券支持商城永久可购买的成衣、发型、武器及外装拓印收集，以及部分挂件、跟宠、坐骑、小玩意儿。
                    </p>
                    <img class="m-gift-title p-animation" v-animate="'fadeInUp'" :src="`${imgPath}/p6/jx-icon.png`" />
                    <div class="m-gift-display">
                        <img
                            class="m-gift-display__bg p-animation"
                            v-animate="'fadeInUp'"
                            :src="`${imgPath}/p6/xx-bg.png`"
                        />
                        <img
                            class="m-gift-display__left p-animation"
                            v-animate="'fadeInLeft'"
                            :src="`${imgPath}/p6/xx-left.png`"
                        />
                        <img
                            class="m-gift-display__right p-animation"
                            v-animate="'fadeInRight'"
                            :src="`${imgPath}/p6/xx-right.png`"
                        />
                    </div>
                    <img class="m-gift-title p-animation" v-animate="'fadeInUp'" :src="`${imgPath}/p6/qd-icon.png`" />
                    <p class="m-gift-more__text p-animation" v-animate="'fadeIn'">
                        团队秘境“血战天策·决战”<br />
                        小队秘境“直城门”<br />
                        休闲向策略对战玩法<br />
                        挂件自定义<br />
                        各界面置顶功能<br />
                        声望界面改版<br />
                        随身商店<br />
                        ……<br />
                    </p>
                    <img class="m-gift-author p-animation" v-animate="'fadeIn'" :src="`${imgPath}/top-author.png`" />
                    <img class="m-gift-bottom__bg" :src="`${imgPath}/p6/page-bottom.png`" />
                </div>
            </div>
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
            factionStatus: "old",
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
        changeFactions() {
            let newVal = "";
            if (this.factionStatus == "old") {
                newVal = "new";
            } else {
                newVal = "old";
            }
            this.factionStatus = "";
            setTimeout(() => {
                this.factionStatus = newVal;
            }, 5);
        },
    },
    mounted: function () {
        this.init();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/xuezhantiance/index.less";
</style>
