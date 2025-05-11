import { Context, Schema } from 'koishi'

export const name = 'random-num-skuy'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  ctx.command('今日运势', '查看你今天的综合运势')
    .action(() => {
      const moneyLuck = random(30, 100)
      const loveLuck = random(30, 100)
      const careerLuck = random(30, 100)
      const total = moneyLuck + loveLuck + careerLuck

      const { summary, stars } = getFortuneSummary(total)
      const tags = getHighlightTags(moneyLuck, loveLuck, careerLuck)
      const { yi, ji } = getYiJi()
      const advice = getJinnang()

      return `财运：${moneyLuck}\n桃花运：${loveLuck}\n事业运：${careerLuck}\n今日运势：${stars} ${summary}\n${tags}\n\n宜：${yi}\n忌：${ji}\n\n锦囊语：${advice}`
    })
}

function random(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getFortuneSummary(total: number): { summary: string, stars: string } {
  if (total >= 300) {
    return { summary: '福星高照', stars: '★★★★★' }
  } else if (total >= 250) {
    return { summary: '运势正旺', stars: '★★★★☆' }
  } else if (total >= 200) {
    return { summary: '前景可期', stars: '★★★☆☆' }
  } else if (total >= 150) {
    return { summary: '稳中求进', stars: '★★☆☆☆' }
  } else {
    return { summary: '诸事不顺', stars: '★☆☆☆☆' }
  }
}

function getHighlightTags(money: number, love: number, career: number): string {
  const tags: string[] = []

  if (money >= 85) tags.push('财源滚滚')
  if (love >= 85) tags.push('桃花满面')
  if (career >= 85) tags.push('平步青云')

  return '加成运势：' + tags.join('、')
}

function getYiJi() {
  const yiList = [
    '表白', '理财', '出门旅游', '学习新技能', '社交', '搬家', '签合同', '冥想',
    '开市', '交易', '买车', '提车', '买房', '买商铺', '立券', '祭祀', '祈福',
    '开光', '伐木', '进人口', '安床', '拆卸', '修造', '装修', '动土', '栽种', '破土'
  ];
  const jiList = [
    '冲动消费', '与人争执', '熬夜', '赌博', '饮酒过度', '忘带钥匙', '说大话',
    '入宅', '移徙', '理发', '出火', '嫁娶', '出行', '开业', '安葬', '动土', '破土',
    '修造', '开光', '祭祀', '祈福', '斋醮', '酬神', '赴任', '签约', '拆迁', '入土'
  ];

  const yi = pickRandomItems(yiList, 2).join('、')
  const ji = pickRandomItems(jiList, 2).join('、')
  return { yi, ji }
}

function getJinnang(): string {
  const phrases = [
    '权御天下，谁主沉浮，我自独步江湖。——《权御天下》',
    '天行健，君子以自强不息，逐梦前行。——《天行健》',
    '你是信的开头 诗的内容 童话的结尾。——《勾指起誓》',
    '愿灿烂烟火在夜空中永远为你绽放，愿世间美好在我们歌声里永远传唱。——《献给我仅有的粉丝》',
    '你可曾知道吗？你可曾在意吗？想和你说的话，纸和笔装不下。——《普通DISCO》',
    '秋天是倒转春天，是逆流而上的鲜妍，或许还会更勇敢。 ——《霜雪千年》',
    '请点燃我心的灼之花，让灰烬肆意飘洒，微弱的光能否映亮你的脸颊。 ——《灼之花》',
    '每个孤身一人的日子，都由我来承受吧，道别的话哽在喉头无法去回答。 ——《深夜诗人》',
    '跟着我放声歌唱向着明天的方向，希望之光那就由我来为你点亮！ ——《追光使者》',
    '你将看见无边的海，虽只有一叶孤舟，被现实的波浪推着随波逐流。——《一花依世界》',
    '轻曼的洪流里，银杏枝踏碎明灭时间，我生命的诗，被冷薄的唇猝而读乱。——《银杏》',
    '夜色降临路口街灯熄灭，星光在闪烁梦境浮现。 ——《夜航星》',
    '因为没吃药，感觉自己萌萌哒。《今天没吃药》',
  ]
  return phrases[Math.floor(Math.random() * phrases.length)]
}

function pickRandomItems(arr: string[], count: number): string[] {
  const shuffled = arr.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
