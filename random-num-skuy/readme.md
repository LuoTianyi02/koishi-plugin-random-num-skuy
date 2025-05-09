# koishi-plugin-random-num-skuy

[![npm](https://img.shields.io/npm/v/koishi-plugin-random-num-skuy?style=flat-square)](https://www.npmjs.com/package/koishi-plugin-random-num-skuy)

一个练习自用Koishi聊天机器人插件，用于生成用户每日的综合运势，包括财运、桃花运、事业运评分，附带成语总结、星级评分、宜忌建议与锦囊语。by B站-SKUY咲

## 功能介绍

- 生成每日三项运势分值（财运、桃花运、事业运）
- 自动计算总运势并评定星级（★☆☆☆☆ ~ ★★★★★）
- 高分项可获得“桃花满面”等附加运势标签
- 每日宜做/忌做事项推荐
- 每日锦囊建议

## 使用方式

发送指令：'今日运势'
bot将返回如下格式的内容：
"
    财运：83
    桃花运：92
    事业运：78
    今日运势：★★★★☆ 运势正旺
    加成运势：桃花满面、财源滚滚

    宜：表白、学习新技能
    忌：冲动消费、熬夜

    锦囊语：保持微笑，运气也会眷顾你。
"
