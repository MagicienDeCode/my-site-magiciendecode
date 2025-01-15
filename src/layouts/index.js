import * as React from 'react'
import './index.less'
import './global.less'
import { Helmet } from 'react-helmet'
import STAR from '../images/star.png'

const App = ({ children }) => {
  return (
    <div>
      <Helmet
        title="MagicienDeCode"
        meta={[
          { name: 'description', content: 'magiciendecode' },
          {
            name: 'keywords',
            content: 'magiciendecode, gatsby, antd, javascript, less',
          },
        ]}
      >
        <link rel="icon" href={STAR} />
      </Helmet>
      <div>
        <div>{children}</div>
      </div>
    </div>
  )
}
export default App
