import * as React from 'react'
import BackWard from '../markdown/backward'
import { Breadcrumb, FloatButton } from 'antd'
import { Link } from 'gatsby'

const CommonArticleHeader = () => {
  return (
    <div>
      <FloatButton.BackTop />
      <BackWard path={'/articles'} />
      <Breadcrumb
        separator=">"
        className="pages-breads"
        items={[
          {
            title: (
              <Link to="/" className="decoration-none">
                Home
              </Link>
            ),
          },
          {
            title: 'Articles',
          },
        ]}
      />
    </div>
  )
}
export default CommonArticleHeader
