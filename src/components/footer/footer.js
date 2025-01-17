import * as React from 'react'
import './footer.less'
import { Row, Flex } from 'antd'
import FooterDiv from './footer-div'

const MyFooter = () => {
  return (
    <div>
      <Flex justify="center" wrap="wrap">
        <FooterDiv
          href="https://www.linkedin.com/in/xiang-li-3346b512a/"
          src="linkedin-w.png"
          spanText="LINKEDIN"
        />
        <FooterDiv
          href="https://github.com/MagicienDeCode"
          src="github-w.png"
          spanText="GITHUB"
        />
        <FooterDiv
          href="https://www.youtube.com/channel/UCERe5JqcmPtyo3dzX94by1g?sub_confirmation=1"
          src="youtube-w.png"
          spanText="YOUTUBE"
        />
        <FooterDiv
          href="https://space.bilibili.com/520811931"
          src="bilibili-w.png"
          spanText="BILIBILI"
        />
        <FooterDiv
          href="https://www.ixigua.com/home/105169725727/"
          src="xigua-w.png"
          spanText="XIGUA"
        />
        <FooterDiv
          href="https://leetcode.com/MagicienDeCode/"
          src="leetcode-w.png"
          spanText="LEETCODE"
        />
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
