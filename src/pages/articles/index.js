import * as React from 'react'
import './articles.less'
import {
  Breadcrumb,
  Row,
  Col,
  Timeline,
  Badge,
  Avatar,
  Divider,
  FloatButton,
  Affix,
} from 'antd'
import { Link } from 'gatsby'
import PageLink from '../../components/page-link/page-link'
import bookJson from '../../data/book/title.json'
import ChineseJson from '../../data/chinese/title.json'
import englishJson from '../../data/english/title.json'
import japaneseJson from '../../data/japanese/title.json'
import javaJson from '../../data/java/title.json'
import kotlinJson from '../../data/kotlin/title.json'

import englishCultureJson from '../../data/english/culture/title.json'
import englishGrammerJson from '../../data/english/grammer/title.json'
import englishWorkJson from '../../data/english/work/title.json'

const first5 = [
  ChineseJson.children,
  japaneseJson.children,
  englishJson.children,
  kotlinJson.children,
  javaJson.children,
  bookJson.children,
]
  .flat()
  .sort((a, b) => (a.creationDate < b.creationDate ? 1 : -1))
  .slice(0, 5)

const Index = () => {
  return (
    <div>
      <Breadcrumb
        separator=">"
        className="breads"
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
      <div>
        <Row className="pages-row">
          <Col className="pages-left display-none" span={4}>
            <Affix offsetTop={120}>
              <Timeline
                className="pages-timeline"
                items={[
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../book.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#book" className="decoration-none">
                        <span className="pages-line-text">BOOK</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../star.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#code" className="decoration-none">
                        <span className="pages-line-text">CODE</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../zh.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#zh" className="decoration-none">
                        <span className="pages-line-text">CHINESE</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../ja.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#ja" className="decoration-none">
                        <span className="pages-line-text">JAPANESE</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../uk.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#uk" className="decoration-none">
                        <span className="pages-line-text">ENGLISH</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../de.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#de" className="decoration-none">
                        <span className="pages-line-text">GERMAN</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../fr.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#fr" className="decoration-none">
                        <span className="pages-line-text">FRENCH</span>
                      </Link>
                    ),
                  },
                ]}
              />
            </Affix>
          </Col>
          <Col className="pages-right" span={20}>
            <div className="div-empty">
              .........................................................................
              .........................................................................
              .........................................................................
              .........................................................................
              .........................................................................
            </div>
            <div>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="recent"
                    className="company-icon"
                    src={`../recent.png`}
                  />
                  <span className="text-link">RECENT</span>
                </div>
              </Divider>
              <Row>
                <Col span={24}>
                  <PageLink titles={first5} />
                </Col>
              </Row>
            </div>

            <div>
              <h2 id="book"> </h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="book"
                    className="company-icon"
                    src={`../book.png`}
                  />
                  <span className="text-link">BOOK</span>
                </div>
              </Divider>
              <Row>
                <Col span={24}>
                  <PageLink titles={bookJson.children} />
                </Col>
              </Row>
              <br />
              <h2 id="code"> </h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="code"
                    className="company-icon"
                    src={`../algo.png`}
                  />
                  <span className="text-link">CODE</span>
                </div>
              </Divider>
              <Row>
                <Col span={24}>
                  <PageLink titles={kotlinJson.children} />
                  <PageLink titles={javaJson.children} />
                </Col>
              </Row>
              <br />
              <h2 id="zh"> </h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="machine-learning"
                    className="company-icon"
                    src={`../zh.png`}
                  />
                  <span className="text-link">CHINESE</span>
                </div>
              </Divider>
              <Row>
                <Col span={24}>
                  <PageLink titles={ChineseJson.children} />
                </Col>
              </Row>
              <br />
              <h2 id="ja"> </h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="machine-learning"
                    className="company-icon"
                    src={`../ja.png`}
                  />
                  <span className="text-link">JAPANESE</span>
                </div>
              </Divider>
              <Row>
                <Col span={24}>
                  <PageLink titles={japaneseJson.children} />
                </Col>
              </Row>
              <br />
              <h2 id="uk"> </h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="machine-learning"
                    className="company-icon"
                    src={`../uk.png`}
                  />
                  <span className="text-link">ENGLISH</span>
                </div>
              </Divider>
              <Row>
                <Col span={24}>
                  <PageLink titles={englishJson.children} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <PageLink titles={englishCultureJson.children} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <PageLink titles={englishGrammerJson.children} />
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <PageLink titles={englishWorkJson.children} />
                </Col>
              </Row>
              <br />
              <h2 id="de"> </h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="machine-learning"
                    className="company-icon"
                    src={`../de.png`}
                  />
                  <span className="text-link">GERMAN</span>
                </div>
              </Divider>
              <br />
              <h2 id="fr"> </h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="machine-learning"
                    className="company-icon"
                    src={`../fr.png`}
                  />
                  <span className="text-link">FRENCH</span>
                </div>
              </Divider>
              <br />
            </div>
          </Col>
          <FloatButton.BackTop />
        </Row>
      </div>
    </div>
  )
}
export default Index
