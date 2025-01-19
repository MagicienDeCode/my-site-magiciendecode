import * as React from 'react'
import './footer.less'
import { Row, Flex } from 'antd'
import { StaticImage } from 'gatsby-plugin-image'

const MyFooter = () => {
  return (
    <div>
      <Flex justify="center" wrap="wrap">
        <div className="footer-div">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/xiang-li-3346b512a/"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="logo"
                src="../../images/linkedin-w.png"
                className="footer-div-img"
              />
              <span className="footer-div-span">LINKEDIN</span>
            </Flex>
          </a>
        </div>
        <div className="footer-div">
          <a
            target="_blank"
            href="https://github.com/MagicienDeCode"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="logo"
                src="../../images/github-w.png"
                className="footer-div-img"
              />
              <span className="footer-div-span">GITHUB</span>
            </Flex>
          </a>
        </div>
        <div className="footer-div">
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="logo"
                src="../../images/youtube-w.png"
                className="footer-div-img"
              />
              <span className="footer-div-span">YOUTUBE</span>
            </Flex>
          </a>
        </div>
        <div className="footer-div">
          <a
            target="_blank"
            href="https://space.bilibili.com/520811931"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="logo"
                src="../../images/bilibili-w.png"
                className="footer-div-img"
              />
              <span className="footer-div-span">BILIBILI</span>
            </Flex>
          </a>
        </div>
        <div className="footer-div">
          <a
            target="_blank"
            href="https://leetcode.com/MagicienDeCode/"
            rel="noopener noreferrer"
          >
            <Flex justify="center" align="center">
              <StaticImage
                alt="logo"
                src="../../images/leetcode-w.png"
                className="footer-div-img"
              />
              <span className="footer-div-span">LEETCODE</span>
            </Flex>
          </a>
        </div>
      </Flex>
      <Row justify="center">
        <div className="copyright">
          <p>©{new Date().getFullYear()} Created by LI Xiang</p>
        </div>
      </Row>
    </div>
  )
}
export default MyFooter
