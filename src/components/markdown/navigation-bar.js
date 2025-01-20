import './navigation-bar.less'
import { Breadcrumb } from 'antd'
import { Link } from 'gatsby'
import React from 'react'

export default function NavigationBar({ paths }) {
  return (
    <div className="navigation-bar-main">
      <Breadcrumb
        separator=">"
        className="projects-breads"
        items={[
          {
            title: (
              <Link to="/" className="decoration-none">
                Home
              </Link>
            ),
          },
          {
            title: (
              <Link to="/articles" className="decoration-none">
                Articles
              </Link>
            ),
          },
        ]}
      />
    </div>
  )
}
