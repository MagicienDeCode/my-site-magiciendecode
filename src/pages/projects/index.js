import * as React from 'react'
import './projects.less'
import {
  Breadcrumb,
  Row,
  Col,
  Timeline,
  Badge,
  Avatar,
  Divider,
  Affix,
  FloatButton,
} from 'antd'
import { Link } from 'gatsby'

const Index = () => {
  return (
    <div>
      <Breadcrumb
        separator=">"
        className="breads"
        items={[
          {
            title: <Link to="/">Home</Link>,
          },
          {
            title: 'Projects',
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
                        <Avatar src={`../github.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#github" className="decoration-none">
                        <span className="pages-line-text">GITHUB</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../ml.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#machine-learning" className="decoration-none">
                        <span className="pages-line-text">
                          MACHINE LEARNING
                        </span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../algo.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#algorithm" className="decoration-none">
                        <span className="pages-line-text">ALGORITHM</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../other.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#others" className="decoration-none">
                        <span className="pages-line-text">OTHERS</span>
                      </Link>
                    ),
                  },
                ]}
              />
            </Affix>
          </Col>
          <Col className="pages-right" span={20}>
            <div>
              <h2 id="github" className="pages-right-first">
                GITHUB
              </h2>
              <Row>
                <Col flex={4}>
                  <p>All my projects are on GitHub. Click the link below:</p>
                  <a target="_blanc" href="https://github.com/MagicienDeCode">
                    <h3>Talent is enduring patience</h3>
                  </a>
                </Col>
                <Col flex={1} className="basic-info-left-col display-none">
                  <Link to="/" className="decoration-none">
                    <Badge>
                      <Avatar
                        src={`../xiang3.jpg`}
                        className="pages-xiang-avatar"
                      />
                    </Badge>
                  </Link>
                </Col>
              </Row>
            </div>

            <div>
              <h2 id="machine-learning">MACHINE LEARNING</h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="machine-learning"
                    className="company-icon"
                    src={`../ml.png`}
                  />
                  <a
                    target="_blanc"
                    href="https://github.com/MagicienDeCode/machine_learning"
                  >
                    <span className="text-link-no-color">Machine Learning</span>
                  </a>
                </div>
              </Divider>
              <br />
              <div className="text-size">
                <p>
                  <span className="key-word">Key Words: </span>Machine Learning,
                  Linear Regression, Logistic Regression, Decision Tree, Random
                  Forest, Gradient Boosting Trees, Support Vector Machine, MLP,
                  RNN, K-Means Clustering, Hierarchical Clustering, PCA, t-SNE,
                  Naive Bayes, Adaboost, XGBoost
                </p>
              </div>
              <br />
            </div>
            <br />
            <h2 id="algorithm">ALGORITHM</h2>
            <Divider orientation="left">
              <div className="exp-head">
                <img
                  alt="python"
                  className="company-icon"
                  src={`../python.png`}
                />
                <a
                  target="_blanc"
                  href="https://github.com/MagicienDeCode/py3_interview"
                >
                  <span className="text-link-no-color"> LeetCode Python3 </span>
                </a>
              </div>
            </Divider>
            <br />
            <div className="text-size">
              <p>
                <span className="key-word">Key Words: </span>Algorithm,
                LeetCode, Python3, Java, Binary Search, Depth First Search,
                Breadth First Search, Stack, Deque, Heap (Priority Queue),
                Linked List, Dynamic Programming, Data Structure
              </p>
            </div>
            <br />
            <Divider orientation="left">
              <div className="exp-head">
                <img alt="java" className="company-icon" src={`../sql.png`} />
                <a
                  target="_blanc"
                  href="https://github.com/MagicienDeCode/SQL-ALL-IN-ONE"
                >
                  <span className="text-link-no-color"> SQL All in One </span>
                </a>
              </div>
            </Divider>
            <br />

            <div className="text-size">
              <p>
                <span className="key-word">Key Words: </span>SQL, Relational
                database, Courses
              </p>
            </div>
            <br />
            <h2 id="others">Site webs</h2>
            <Divider orientation="left">
              <div className="exp-head">
                <img
                  alt="mdc"
                  className="company-icon"
                  src={`../gatsbyjs-logo.png`}
                />
                <a
                  target="_blanc"
                  href="https://github.com/MagicienDeCode/my-site-magiciendecode"
                >
                  <span className="text-link-no-color">
                    Personal Site (latest)
                  </span>
                </a>
              </div>
            </Divider>
            <br />

            <div className="text-size">
              <p>
                <span className="key-word">Key Words: </span>Gatsby JS,
                JavaScript
              </p>
            </div>
            {/*
            <br />
            <Divider orientation="left">
              <div className="exp-head">
                <img
                  alt="mdc.fr"
                  className="company-icon"
                  src={`../gatsbyjs-logo.png`}
                />
                <a
                  target="_blanc"
                  href="https://github.com/MagicienDeCode/magiciendecode.fr"
                >
                  <span className="text-link">Personal Site (deprecated)</span>
                </a>
              </div>
            </Divider>
            <br />
            <div className="text-size">
              <p>
                <span className="key-word">Key Words: </span>Gatsby JS,
                TypeScript
              </p>
            </div>
              */}
            <br />
          </Col>
          <FloatButton.BackTop />
        </Row>
      </div>
    </div>
  )
}
export default Index
