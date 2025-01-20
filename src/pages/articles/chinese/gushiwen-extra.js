import './gushiwen.less'

import { Collapse } from 'antd'
import React from 'react'

import CommonArticleHeader from '../../../components/header/common-article-header'

const { Panel } = Collapse

export default function Example() {
  return (
    <div>
      <CommonArticleHeader />
      <div className="gushiwen-main">
        <h1>中国古诗文 * 其他</h1>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="题龙阳县青草湖" key="1" extra={'元*唐温如'}>
            <p>西风吹老洞庭波，一夜湘君白发多。</p>
            <p>醉后不知天在水，满船清梦压星河。</p>
          </Panel>
          <Panel header="赴戍登程口占示家人二首" key="2" extra={'清*林则徐'}>
            <p>力微任重久神疲，再竭衰庸定不支。</p>
            <p>苟利国家生死以，岂因祸福避趋之！</p>
            <p>谪居正是君恩厚，养拙刚于戍卒宜。</p>
            <p>戏与山妻谈故事，试吟断送老头皮。</p>
          </Panel>
          <Panel header="七绝·改诗赠父亲" key="3" extra={''}>
            <p>孩儿立志出乡关，学不成名誓不还。</p>
            <p>埋骨何须桑梓地，人生无处不青山。</p>
          </Panel>
          <Panel header="自嘲" key="3" extra={'鲁迅'}>
            <p>运交华盖欲何求，未敢翻身已碰头。</p>
            <p>破帽遮颜过闹市，漏船载酒泛中流。</p>
            <p>横眉冷对千夫指，俯首甘为孺子牛。</p>
            <p>躲进小楼成一统，管他冬夏与春秋。</p>
          </Panel>
          <Panel header="咏红梅花得“红”字" key="4" extra={'曹雪芹'}>
            <p>桃未芳菲杏未红，冲寒先喜笑东风。</p>
            <p>魂飞庾岭春难辨，霞隔罗浮梦未通。</p>
            <p>绿萼添妆融宝炬，缟仙扶醉跨残虹。</p>
            <p>看来岂是寻常色，浓淡由他冰雪中。</p>
            <p>gao3 xian1 fu2 zui4 kua4 can2 hong2</p>
          </Panel>
          <Panel header="咏菊" key="5" extra={''}>
            <p>无赖诗魔昏晓侵，绕篱欹石自沉音。qi1</p>
            <p>毫端蕴秀临霜写，口齿噙香对月吟。</p>
            <p>满纸自怜题素怨，片言谁解诉秋心？</p>
            <p>一从陶令评章后，千古高风说到今。</p>
          </Panel>
          <Panel header="木兰花·拟古决绝词柬友" key="6" extra={'纳兰性德*清'}>
            <p>人生若只如初见，何事秋风悲画扇。</p>
            <p>等闲变却故人心，却道故人心易变。</p>
            <p>骊山语罢清宵半，泪雨霖铃终不怨。li2 lin2 ling2</p>
            <p>何如薄幸锦衣郎，比翼连枝当日愿。</p>
          </Panel>
          <Panel header="x" key="7" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="8" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="9" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="10" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="11" extra={''}>
            <p></p>
            <p></p>
          </Panel>
          <Panel header="x" key="12" extra={''}>
            <p></p>
            <p></p>
          </Panel>
        </Collapse>
      </div>
    </div>
  )
}
