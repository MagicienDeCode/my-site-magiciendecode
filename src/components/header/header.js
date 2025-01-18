import * as React from 'react'
import './header.less'
import { Menu, Row, Col, QRCode, Popover } from 'antd'
import {
  AppstoreAddOutlined,
  FileDoneOutlined,
  FolderOpenOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const MyHeader = () => {
  return (
    <Row wrap={false}>
      <Col flex="200px">
        <img className="header-row-col-img" src="logo2.png" />
      </Col>
      <Col flex="auto">Fill Rest</Col>
    </Row>
  )
}
export default MyHeader
