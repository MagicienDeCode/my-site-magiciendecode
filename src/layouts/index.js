import * as React from 'react'
import './index.less'
import './global.less'
import { Helmet } from 'react-helmet'
import STAR from '../images/star.png'
import { Layout } from 'antd'
import MyFooter from '../components/footer/footer'
import MyHeader from '../components/header/header'
import { Flex } from 'antd'

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
          <Flex align="center" justify="center">
            <Flex align="center" className="flex-content">
              <MyHeader />
            </Flex>
          </Flex>
        </Header>
        <Content className="layout-content">
          <Flex align="center" justify="center">
            <Flex align="center" className="flex-content main-content">
              {children}
            </Flex>
          </Flex>
        </Content>
        <Footer className="layout-footer">
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  )
}
export default App
