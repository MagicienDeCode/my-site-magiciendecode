import * as React from 'react'
import { Avatar, Badge, Row, Col, Carousel } from 'antd'
import { Link } from 'gatsby'

import './home.less'

const Home = () => {
  return (
    <Row>
      <Col className="home-left" span={4}>
        <div className="home-xiang-avatar">
          <Link to="/">
            <Badge>
              <Avatar
                size={'small'}
                src={`xiang4.jpg`}
                className="xiang-avatar"
              />
            </Badge>
          </Link>
        </div>
        <div className="home-left-name">
          <Link to="/">
            <p>LI Xiang - 李 想</p>
          </Link>
        </div>
        <div className="home-left-links display-none">
          <div className="home-left-text">
            <p>
              With Experience and Education in the areas of Computer Science, my
              interest is to continuously improve in the fields of AI/ML and
              System Design
            </p>
          </div>
          <a
            target="_blank"
            href="mailto:xiangli1105@hotmail.com"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img alt="email" className="home-img" src={`email.png`} />
              </Col>
              <Col>
                <span className="text-link"> Email </span>
              </Col>
            </Row>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/xiang-li-3346b512a/"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img alt="linkedin" className="home-img" src={`linkedin.png`} />
              </Col>
              <Col>
                <span className="text-link"> Linkedin </span>
              </Col>
            </Row>
          </a>
          <a
            target="_blank"
            href="https://github.com/MagicienDeCode"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img alt="github" className="home-img" src={`github.png`} />
              </Col>
              <Col>
                <span className="text-link"> Github</span>
              </Col>
            </Row>
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img alt="youtube" className="home-img" src={`youtube.png`} />
              </Col>
              <Col>
                <span className="text-link"> Youtube </span>
              </Col>
            </Row>
          </a>
          <a
            target="_blank"
            href="https://leetcode.com/MagicienDeCode/"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img alt="leetcode" className="home-img" src={`leetcode.png`} />
              </Col>
              <Col>
                <span className="text-link"> Leetcode </span>
              </Col>
            </Row>
          </a>
          <a
            target="_blank"
            href="https://space.bilibili.com/520811931"
            rel="noopener noreferrer"
          >
            <Row className="home-row">
              <Col>
                <img alt="bilibili" className="home-img" src={`bilibili.png`} />
              </Col>
              <Col>
                <span className="text-link"> Bilibili </span>
              </Col>
            </Row>
          </a>
        </div>
      </Col>

      <Col className="home-right" span={20}>
        <h2>About Me</h2>
        <div className="text-size">
          <p>
            I define myself as a passionate and organized person. I am rigorous,
            efficient and I appreciate quality work.
          </p>
        </div>
        <div className="text-size">
          <p>
            I am constantly learning about new technologies, and I undertake new
            personal projects in order to deepen my knowledge as well as to be
            able to propose solutions adapted to the work.
          </p>
        </div>
        <div className="text-size">
          <p>
            I particularly like working in a team but I also know how to be
            independent when necessary.
          </p>
        </div>
        <div className="text-size">
          <p>
            I thrive not only by working, but also by bringing value to the
            company, in which the ability to face challenges, recognize and
            rectify mistakes and be tenacious is essential.
          </p>
        </div>
        <div className="home-right-divider-bgc" />
        <div className="home-left-carousel">
          <Carousel autoplay>
            <div className="text-size">
              <h4>2022 annual appraisal</h4>
              <p>
                Xiang has done an excellent year. Xiang took the lead on
                architecture proposing several scenarios using HLD (High Level
                Design) methodology/System Design, and moving step by step to
                the specifics. All the points are discussed with the team before
                being implemented. Some technical choices were debate and I
                could see that Xiang did not impose its solution and if the
                arguments brought by the other team members was making sense, he
                was able to accept their counter proposal. Technically he is
                able to check the peers contribution and integrate it quickly in
                its reasoning. This ability make him quick to spot issues and
                find solutions/workaround. Again, a very good job in 2022.
              </p>
            </div>
            <div className="text-size">
              <h4>2023 annual appraisal</h4>
              <p>
                Xiang did a very good year. Its contribution helped to build
                product on time. He has a major contribution in Webhook and
                SlimCollect products. We can see that Thanks to him and the team
                we are delivering products which are long due by the company
                (webhook) in a few months. Xiang handled the changes as a team
                leader without creating any tension, by respecting its
                colleagues as equal, and helping them when needed. Please
                continue like this as 2024 will be the opportunity to build a
                bigger picture of the company.
              </p>
            </div>
          </Carousel>
        </div>
      </Col>
    </Row>
  )
}

export default Home
