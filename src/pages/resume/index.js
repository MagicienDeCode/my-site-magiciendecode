import * as React from 'react'
import './resume.less'
import {
  Breadcrumb,
  Row,
  Col,
  Timeline,
  Badge,
  Avatar,
  Flex,
  Divider,
  Collapse,
  Affix,
} from 'antd'
import { Link } from 'gatsby'

const slimpay_items = [
  {
    key: '1',
    label: <span className="exp-title">Since 2023, Tech Lead</span>,
    children: (
      <div className="black">
        <p>
          - Design and develop new open banking products, guiding team members,
          propose technical improvements.
        </p>
        <p>
          - Integration with Trustly products, new version of SlimCollects
          (PIS/AIS)
        </p>
        <p>- Webhook projects.</p>
        <p>- Instant payment solution.</p>
      </div>
    ),
  },
  {
    key: '2',
    label: (
      <span className="exp-title">
        Since 2021, Full Stack Software Engineer
      </span>
    ),
    children: (
      <div className="black">
        <p>
          - PIS team, design and develop new SlimCollect(PIS) ecosystem,
          springboot, axon framework CQRS, domain driven design, event sourcing.
        </p>
        <p>
          - PaymentFactory team, 1.Resolve balance problems, 2.Help Financial
          team to prepare ACPR audit, 3.Develop a kotlin based project with SQL
          native (improve daily reconciliation of balance from 4 days to 1 hour
          average).
        </p>
      </div>
    ),
  },
  {
    key: '3',
    label: (
      <span className="exp-title">Since 2018, Junior Software Engineer</span>
    ),
    children: (
      <div className="black">
        <p>
          - Innovation team, one of the pioneers for Kotlin and open-banking
          (PSD2) product.
        </p>
        <p>- Proof of Concept with Kotlin, connect to sandbox of bank.</p>
        <p>- ETL system with Kotlin(Extract-Transform-Load).</p>
      </div>
    ),
  },
]

const mb_items = [
  {
    key: '1',
    label: <span className="exp-title">Full Stack Developer</span>,
    children: (
      <div className="black">
        <p>
          - Refactoring back office, participate in the development of new
          features.
        </p>
        <p>
          - Learn and create microservices for delivery service, billing
          service.
        </p>
        <p>
          - Participate in the design and development for the site
          monbanquet.fr.
        </p>
        <p>
          - Monitoring and maintaining of all microservices using AWS
          Kubernetes.
        </p>
      </div>
    ),
  },
]

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
            title: 'Resume',
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
                        <Avatar src={`../icon_resume.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#basic-info" className="decoration-none">
                        <span className="pages-line-text">RESUME</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../tools.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#skills" className="decoration-none">
                        <span className="pages-line-text">SKILLS</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../exp.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#experience" className="decoration-none">
                        <span className="pages-line-text">EXPERIENCE</span>
                      </Link>
                    ),
                  },
                  {
                    dot: (
                      <Badge>
                        <Avatar src={`../education.png`} size={20} />
                      </Badge>
                    ),
                    color: 'grey',
                    children: (
                      <Link to="#education" className="decoration-none">
                        <span className="pages-line-text">EDUCATION</span>
                      </Link>
                    ),
                  },
                ]}
              />
            </Affix>
          </Col>
          <Col className="pages-right" span={20}>
            <div>
              <h2 id="basic-info">Resume</h2>
              <Row>
                <Col flex={4}>
                  <h2>LI Xiang</h2>
                  <h3>Full Stack Software Engineer</h3>
                  <h3>Tech Lead</h3>
                  <h3>Looking for freelance job</h3>
                </Col>
                <Col flex={1} className="basic-info-left-col">
                  <Link to="/" className="decoration-none">
                    <Badge>
                      <Avatar
                        src={`../xiang2.jpg`}
                        className="pages-xiang-avatar"
                      />
                    </Badge>
                  </Link>
                </Col>
              </Row>
            </div>
            <div>
              <h2 id="skills">SKILLS</h2>
              <div className="text-size">
                <p>
                  This section includes all my skills. I am first and foremost a
                  Full Stack Software Engineer but I also have a strong
                  background in machine learning and AI. This combination of
                  skills is what makes me unique and allows me to work on a wide
                  range of <Link to="/projects">projects</Link>.
                </p>
              </div>
              <Divider>Language</Divider>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../java.png`} />
                    </Badge>
                    <span className="skill-title">Java</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../kotlin.png`} />
                    </Badge>
                    <span className="skill-title">Kotlin</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../python.png`} />
                    </Badge>
                    <span className="skill-title">Python</span>
                  </Flex>
                </Col>
              </Row>

              <Divider>Framework / Tool</Divider>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../spring-boot.png`} />
                    </Badge>
                    <span className="skill-title">SpringBoot</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../axon.png`} />
                    </Badge>
                    <span className="skill-title">Axon CQRS</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../Kafka.png`} />
                    </Badge>
                    <span className="skill-title">Kafka</span>
                  </Flex>
                </Col>
              </Row>
              <br />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../gatsbyjs.png`} />
                    </Badge>
                    <span className="skill-title">GatsbyJs</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../angular2.png`} />
                    </Badge>
                    <span className="skill-title">Angular</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../react.png`} />
                    </Badge>
                    <span className="skill-title">React</span>
                  </Flex>
                </Col>
              </Row>
              <br />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../gradlekts.png`} />
                    </Badge>
                    <span className="skill-title">Gradle</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../maven.png`} />
                    </Badge>
                    <span className="skill-title">Maven</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../docker.png`} />
                    </Badge>
                    <span className="skill-title">Docker</span>
                  </Flex>
                </Col>
              </Row>
              <Divider>Database</Divider>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../PostgreSQL.png`} />
                    </Badge>
                    <span className="skill-title">MySQL / PostgreSQL</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../dynamodb.png`} />
                    </Badge>
                    <span className="skill-title">Dynamo DB</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../mongodb.png`} />
                    </Badge>
                    <span className="skill-title">Mongo DB</span>
                  </Flex>
                </Col>
              </Row>
              <Divider>Knowledge</Divider>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../bank.png`} />
                    </Badge>
                    <span className="skill-title">Open banking PIS/AIS</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../european.png`} />
                    </Badge>
                    <span className="skill-title">SEPA SDD/SCT (instant)</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../Euro.png`} />
                    </Badge>
                    <span className="skill-title">Balance</span>
                  </Flex>
                </Col>
              </Row>
              <br />
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../ml.png`} />
                    </Badge>
                    <span className="skill-title">Machine Learning</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../leetcode.png`} />
                    </Badge>
                    <span className="skill-title">Algorithm</span>
                  </Flex>
                </Col>
                <Col className="gutter-row" span={8}>
                  <Flex align="center" gap="small">
                    <Badge className="skill-badge">
                      <Avatar src={`../kaggle.png`} />
                    </Badge>
                    <span className="skill-title">Kaggle</span>
                  </Flex>
                </Col>
              </Row>
              <br />
            </div>
            <div>
              <h2 id="experience">EXPERIENCE</h2>
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="slimpay"
                    className="company-icon"
                    src={`../slimpay.jpg`}
                  />
                  <a target="_blanc" href="https://www.slimpay.com/">
                    <span className="text-link"> Slimpay </span>
                  </a>
                  <span className="time-text display-none">
                    October 2018 - now (~ 6years)
                  </span>
                  <span className="time-text display-only-mobile">
                    until now (~ 6years)
                  </span>
                </div>
              </Divider>
              <Collapse
                defaultActiveKey={['1', '2', '3']}
                ghost
                items={slimpay_items}
              />
              <div className="text-size">
                <p>
                  <span className="key-word">Key Words: </span>SpringBoot,
                  Kotlin, Java, Domain Driven Design, Event Sourcing, CQRS,
                  AxonFramework, Kafka, DynamoDB, PostgreSQL, Docker
                </p>
              </div>
              <br />
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="monbanquet.fr"
                    className="company-icon"
                    src={`../mb.jpg`}
                  />
                  <a target="_blanc" href="https://monbanquet.fr/">
                    <span className="text-link"> Monbanque.fr </span>
                  </a>
                  <span className="time-text display-none">
                    Apr. - Sep. 2018 (6 months)
                  </span>
                  <span className="time-text display-only-mobile">
                    Intern (6 months)
                  </span>
                </div>
              </Divider>
              <Collapse ghost items={mb_items} />
              <div className="text-size">
                <p>
                  <span className="key-word">Key Words: </span>Java, SpringBoot,
                  MongoDB, Kubernetes, React, Angular, Kafka
                </p>
              </div>
            </div>
            <br />
            <div>
              <h2 id="education">EDUCATION</h2>
              <Divider orientation="left" className="divider-black">
                <div className="exp-head">
                  <img
                    alt="paris-diderot"
                    className="company-icon-p7"
                    src={`../p72.png`}
                  />
                  <span className="text-link display-none">
                    University of Paris-Diderot
                  </span>
                  <span className="time-text">2016-2018 (France)</span>
                </div>
              </Divider>
              <Collapse
                ghost
                items={[
                  {
                    key: '1',
                    label: (
                      <span className="exp-title">
                        Master of Computer Science
                      </span>
                    ),
                    children: (
                      <div className="black">
                        <p>
                          - Major in Engineering, Algorithms, Distribution
                          systems and Database.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
              <br />
              <Divider orientation="left">
                <div className="exp-head">
                  <img
                    alt="paris-diderot"
                    className="company-icon-p7"
                    src={`../p72.png`}
                  />
                  <span className="text-link display-none">
                    University of Paris-Diderot
                  </span>
                  <span className="time-text">2015-2016 (France)</span>
                </div>
              </Divider>
              <Collapse
                ghost
                items={[
                  {
                    key: '1',
                    label: <span className="exp-title">French Language</span>,
                    children: '',
                  },
                ]}
              />
            </div>
            <br />
            <Divider orientation="left">
              <div className="exp-head">
                <img
                  alt="henancaijingzhengfa"
                  className="company-icon"
                  src={`../cjzf.png`}
                />
                <span className="text-link display-none">
                  Henan University of Economics and Law
                </span>
                <span className="time-text">2011-2015 (China)</span>
              </div>
            </Divider>
            <Collapse
              ghost
              items={[
                {
                  key: '1',
                  label: (
                    <span className="exp-title">
                      Bachelor of Information Management System
                    </span>
                  ),
                  children: (
                    <div className="black">
                      <p>
                        - Major in Engineering, Information systems and
                        Accounting.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
            <br />
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Index
