import './backward.less'
import { Affix, Button } from 'antd'
import { Link } from 'gatsby'
import React from 'react'
import { BackwardFilled } from '@ant-design/icons'

export default function BackWard() {
  return (
    <div>
      <Affix offsetTop={77} className="backward-affix">
        <Link to="/articles">
          <Button type="link">
            <BackwardFilled className="backward-affix-icon" />
          </Button>
        </Link>
      </Affix>
    </div>
  )
}
