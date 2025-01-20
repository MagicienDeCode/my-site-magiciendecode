import './page-link.less'

import { Timeline } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

export default function PageLink({ titles }) {
  return (
    <div>
      <Timeline mode={'left'}>
        {titles
          .sort((a, b) => (a.creationDate < b.creationDate ? 1 : -1))
          .map((title, index) => (
            <Timeline.Item key={index} label={title.creationDate}>
              <Link to={title.page}>{title.title}</Link>
            </Timeline.Item>
          ))}
      </Timeline>
    </div>
  )
}
