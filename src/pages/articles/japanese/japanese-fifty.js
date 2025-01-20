import './japanese-fifty.less'

import { Table, Tabs } from 'antd'
import { graphql } from 'gatsby'
import React from 'react'
import CommonArticleHeader from '../../../components/header/common-article-header'

const TabPane = Tabs.TabPane

class DataTypeItem {
  constructor(
    key,
    field1,
    field2,
    field3,
    field4,
    field5,
    field6,
    field7,
    field8,
    field9,
    field10
  ) {
    this.key = key
    this.field1 = field1
    this.field2 = field2
    this.field3 = field3
    this.field4 = field4
    this.field5 = field5
    this.field6 = field6
    this.field7 = field7
    this.field8 = field8
    this.field9 = field9
    this.field10 = field10
  }
}

export default function JapaneseFifty({ data }) {
  const columns = [
    { dataIndex: 'field1' },
    { dataIndex: 'field2' },
    { dataIndex: 'field3' },
    { dataIndex: 'field4' },
    { dataIndex: 'field5' },
    { dataIndex: 'field6' },
    { dataIndex: 'field7' },
    { dataIndex: 'field8' },
    { dataIndex: 'field9' },
    { dataIndex: 'field10' },
  ]

  const hiragana = []
  const katakana = []

  if (hiragana.length === 0) {
    data.allFiftyCsv.edges.forEach((row, index) => {
      const { node } = row
      hiragana.push(new DataTypeItem(index, ...Object.values(node)))
    })
  }

  if (katakana.length === 0) {
    data.allFifty2Csv.edges.forEach((row, index) => {
      const { node } = row
      katakana.push(new DataTypeItem(index, ...Object.values(node)))
    })
  }

  return (
    <div>
      <CommonArticleHeader />
      <Tabs defaultActiveKey="1">
        <TabPane tab="ひらがな" key="1">
          <Table
            dataSource={hiragana}
            columns={columns}
            pagination={false}
            showHeader={false}
            rowClassName={(_, index) =>
              index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
            }
          />
        </TabPane>
        <TabPane tab="カタカナ" key="2">
          <Table
            dataSource={katakana}
            columns={columns}
            pagination={false}
            showHeader={false}
            rowClassName={(_, index) =>
              index % 2 === 0 ? 'table-row-light' : 'table-row-dark'
            }
          />
        </TabPane>
      </Tabs>
    </div>
  )
}

export const JapaneseFiftyQuery = graphql`
  query {
    allFiftyCsv {
      edges {
        node {
          field1
          field2
          field3
          field4
          field5
          field6
          field7
          field8
          field9
          field10
        }
      }
    }
    allFifty2Csv {
      edges {
        node {
          field1
          field2
          field3
          field4
          field5
          field6
          field7
          field8
          field9
          field10
        }
      }
    }
  }
`
