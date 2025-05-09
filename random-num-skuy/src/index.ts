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
    return { summary: '尚可一试', stars: '★★★☆☆' }
  } else if (total >= 150) {
    return { summary: '谨慎前行', stars: '★★☆☆☆' }
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
  const yiList = ['表白', '理财', '出门旅游', '学习新技能', '社交', '搬家', '签合同', '冥想']
  const jiList = ['冲动消费', '与人争执', '熬夜', '赌博', '饮酒过度', '忘带钥匙', '说大话']

  const yi = pickRandomItems(yiList, 2).join('、')
  const ji = pickRandomItems(jiList, 2).join('、')
  return { yi, ji }
}

function getJinnang(): string {
  const phrases = [
    '谨慎行事，方能无忧。',
    '今日努力，明日辉煌。',
    '退一步，海阔天空。',
    '人缘佳者，事半功倍。',
    '福祸无门，惟人自召。',
    '天道酬勤，莫负光阴。',
    '聚沙成塔，稳中求胜。',
    '保持微笑，运气也会眷顾你。'
  ]
  return phrases[Math.floor(Math.random() * phrases.length)]
}

function pickRandomItems(arr: string[], count: number): string[] {
  const shuffled = arr.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
