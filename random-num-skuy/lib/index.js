var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Config: () => Config,
  apply: () => apply,
  name: () => name
});
module.exports = __toCommonJS(src_exports);
var import_koishi = require("koishi");
var name = "random-num-skuy";
var Config = import_koishi.Schema.object({});
function apply(ctx) {
  ctx.command("今日运势", "查看你今天的综合运势").action(() => {
    const moneyLuck = random(30, 100);
    const loveLuck = random(30, 100);
    const careerLuck = random(30, 100);
    const total = moneyLuck + loveLuck + careerLuck;
    const { summary, stars } = getFortuneSummary(total);
    const tags = getHighlightTags(moneyLuck, loveLuck, careerLuck);
    const { yi, ji } = getYiJi();
    const advice = getJinnang();
    return `财运：${moneyLuck}
桃花运：${loveLuck}
事业运：${careerLuck}
今日运势：${stars} ${summary}
${tags}

宜：${yi}
忌：${ji}

锦囊语：${advice}`;
  });
}
__name(apply, "apply");
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
__name(random, "random");
function getFortuneSummary(total) {
  if (total >= 300) {
    return { summary: "福星高照", stars: "★★★★★" };
  } else if (total >= 250) {
    return { summary: "运势正旺", stars: "★★★★☆" };
  } else if (total >= 200) {
    return { summary: "尚可一试", stars: "★★★☆☆" };
  } else if (total >= 150) {
    return { summary: "谨慎前行", stars: "★★☆☆☆" };
  } else {
    return { summary: "诸事不顺", stars: "★☆☆☆☆" };
  }
}
__name(getFortuneSummary, "getFortuneSummary");
function getHighlightTags(money, love, career) {
  const tags = [];
  if (money >= 85) tags.push("财源滚滚");
  if (love >= 85) tags.push("桃花满面");
  if (career >= 85) tags.push("平步青云");
  return "加成运势：" + tags.join("、");
}
__name(getHighlightTags, "getHighlightTags");
function getYiJi() {
  const yiList = ["表白", "理财", "出门旅游", "学习新技能", "社交", "搬家", "签合同", "冥想"];
  const jiList = ["冲动消费", "与人争执", "熬夜", "赌博", "饮酒过度", "忘带钥匙", "说大话"];
  const yi = pickRandomItems(yiList, 2).join("、");
  const ji = pickRandomItems(jiList, 2).join("、");
  return { yi, ji };
}
__name(getYiJi, "getYiJi");
function getJinnang() {
  const phrases = [
    "谨慎行事，方能无忧。",
    "今日努力，明日辉煌。",
    "退一步，海阔天空。",
    "人缘佳者，事半功倍。",
    "福祸无门，惟人自召。",
    "天道酬勤，莫负光阴。",
    "聚沙成塔，稳中求胜。",
    "保持微笑，运气也会眷顾你。"
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}
__name(getJinnang, "getJinnang");
function pickRandomItems(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
__name(pickRandomItems, "pickRandomItems");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Config,
  apply,
  name
});
