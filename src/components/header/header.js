import * as React from 'react'
import './header.less'
import { Menu, Flex, Row, Col, QRCode, Popover, Button } from 'antd'
import {
  AppstoreAddOutlined,
  FileDoneOutlined,
  FolderOpenOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function getItem(label, key, icon, children) {
  return {
    key,
    children,
    label,
  }
}

const items = [
  getItem(
    <Link to="/resume" className="decoration-none">
      <span className="menu-titles ant-menu-title-content">Resume</span>
    </Link>,
    '1',
    <FileDoneOutlined style={{ fontSize: '1.3em' }} />
  ),
  getItem(
    <Link to="/projects" className="decoration-none">
      <span className="menu-titles ant-menu-title-content">Projects</span>
    </Link>,
    '2',
    <AppstoreAddOutlined style={{ fontSize: '1.3em' }} />
  ),
  getItem(
    <Link to="/articles" className="decoration-none">
      <span className="menu-titles ant-menu-title-content">Articles ↓</span>
    </Link>,
    'sub2',
    <FolderOpenOutlined style={{ fontSize: '1.3em' }} />,
    [
      getItem(
        <Link to="/articles/#book" className="decoration-none">
          <span>Book</span>
        </Link>,
        '7'
      ),
      getItem(
        <Link to="/articles/#code" className="decoration-none">
          <span>Code</span>
        </Link>,
        '9'
      ),
      getItem(
        <Link to="/articles/#zh" className="decoration-none">
          <span>Chinese</span>
        </Link>,
        '8'
      ),
      getItem(
        <Link to="/articles/#ja" className="decoration-none">
          <span>Japanese</span>
        </Link>,
        '11'
      ),
      getItem(
        <Link to="/articles/#fr" className="decoration-none">
          <span>French</span>
        </Link>,
        '12'
      ),
      getItem(
        <Link to="/articles/#de" className="decoration-none">
          <span>German</span>
        </Link>,
        '13'
      ),
      getItem(
        <Link to="/articles/#uk" className="decoration-none">
          <span>English</span>
        </Link>,
        '14'
      ),
    ]
  ),
  getItem(
    <Popover
      style={{
        padding: 0,
      }}
      content={
        <QRCode
          value="https://github.com/MagicienDeCode/images/blob/master/cv/xiang_en_2024.pdf"
          bordered={false}
        />
      }
    >
      <StaticImage
        alt="cv"
        className="cv-img"
        src={'../../images/qrcode.png'}
      />
      <span />
    </Popover>,
    'link',
    ''
  ),
]

const items_800 = [
  getItem(
    <Link to="/resume" className="decoration-none none-450">
      <span className="menu-titles ant-menu-title-content">Resume</span>
    </Link>,
    '1',
    <FileDoneOutlined style={{ fontSize: '1.3em' }} />
  ),
  getItem(
    <UnorderedListOutlined style={{ fontSize: '1.5em', color: '#1677ff' }} />,
    'sub2',
    <FolderOpenOutlined style={{ fontSize: '1.3em' }} />,
    [
      getItem(
        <Link to="/projects" className="decoration-none">
          <span className="menu-titles ant-menu-title-content">Projects</span>
        </Link>,
        '2',
        ''
      ),
      getItem(
        <Link to="/articles" className="decoration-none">
          <span className="menu-titles ant-menu-title-content">Articles</span>
        </Link>,
        '3',
        ''
      ),
    ]
  ),
]

const MyHeader = () => {
  return (
    <Row className="header-row" align="middle">
      <Col flex={1}>
        <div className="test">
          <StaticImage
            alt="logo"
            src="../../images/logo_bks.png"
            className="header-flex-img"
          />
        </div>
      </Col>
      <Col flex={4}>
        <Menu
          mode="horizontal"
          selectable={false}
          items={items}
          triggerSubMenuAction={'hover'}
          className="header-menu"
        />
        <Menu
          mode="horizontal"
          className="header-menu-800"
          selectable={false}
          items={items_800}
          triggerSubMenuAction={'hover'}
        />
      </Col>
    </Row>
  )
}
export default MyHeader
