import * as React from 'react'
import './index.less'
import './global.less'
import { Helmet } from 'react-helmet'
import STAR from '../images/star.png'
import { Layout } from 'antd'
import MyFooter from '../components/footer/footer'

const { Header, Content, Footer } = Layout

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
      <Layout>
        <Header className="layout-header">
          <div>MyHeader</div>
        </Header>
        <Content className="layout-content">
          <div>{children}</div>
        </Content>
        <Footer className="layout-footer">
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  )
}
export default App
