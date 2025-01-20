import * as React from 'react'
import './float-cv.less'
import { StaticImage } from 'gatsby-plugin-image'
import { QRCode, Popover, FloatButton } from 'antd'

const FloatCV = () => {
  return (
    <div>
      <FloatButton
        description={
          <Popover
            placement="leftBottom"
            overlayInnerStyle={{
              padding: 0,
            }}
            content={
              <QRCode
                value="https://github.com/MagicienDeCode/images/blob/master/cv/xiang_en_2024.pdf"
                bordered={false}
              />
            }
          >
            <div>
              <StaticImage
                alt="cv"
                className="float-cv-img"
                src={'../../images/qrcode.png'}
              />
              <p className="float-cv-p">CV</p>
            </div>
          </Popover>
        }
        className="float-cv display-only-mobile"
      ></FloatButton>
    </div>
  )
}
export default FloatCV
