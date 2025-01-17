import * as React from 'react'
import './footer-div.less'
import { Flex } from 'antd'

const FooterDiv = ({ href, src, spanText }) => {
  return (
    <div className="footer-div">
      <a target="_blank" href={href} rel="noopener noreferrer">
        <Flex justify="center" align="center">
          <img
            alt={spanText.toLowerCase()}
            className="footer-div-img"
            src={src}
          />
          <span className="footer-div-span">{spanText}</span>
        </Flex>
      </a>
    </div>
  )
}

export default FooterDiv
