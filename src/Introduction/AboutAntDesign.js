import React from 'react'
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export default function AboutAntDesign () {
  return (
    <Typography>
      <Title level={3}>Ant Design <Link href="https://ant.design/">(Official site)</Link></Title>
      <Paragraph>
        <ul>
          <li>
            A design system for enterprise-level products.
          </li>
          <li>
            Stable and highly reusable components and pages.
          </li>
          <li>
            Uniform the user interface specs and reduce redundancies
          </li>
          <li>
            Support for multiple frameworks
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <Title level={3}>Ant Design of React</Title>
      <Paragraph>
        <img width="150" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img><span>+</span><img width="160" src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"></img>

        <ul>
          <li>
            A React UI library that contains a set of high quality components
            <ul>
              <li>
                Develop using TypeScript
              </li>
              <li>
                Compatible with all modern browsers
              </li>
              <li>
                Internationalized languages supported
              </li>
              <li>
                Open source on GitHub
              </li>
              <li>
                Customize UI components
              </li>
            </ul>
          </li>
          <li>
            Official tutorials and documentation
            <ul>
              <li>
                <Link href="https://ant.design/docs/react/introduce">https://ant.design/docs/react/introduce</Link>
              </li>
              <li>
                See component effect and source code

              </li>
              <li>
                Test in online editor
              </li>

            </ul>
          </li>
        </ul>
      </Paragraph>
      <Divider />
      <Title level={3}>About This Tech Demo <Link href="https://github.com/UOA-CS732-SE750-Students-2022/assignment-01-dyeeee">(Details in GitHub)</Link></Title>
      <Paragraph>
        In this project, I built a Demo website based on React and introduced the use of multiple Ant Design components in three parts: Basic components, Data Display components, and Feedback components. In addition, I used the relevant components to build a Pokemon illustrated page, similar to Execise5 in the classroom. Still, we can see that with the help of Ant Design, my UI interface has become very nice.
      </Paragraph>

      <ul>
        <li>
          A React App with Ant Design UI Library
        </li>
        <li>
          Components of AntDesign
          <ul>
            <li>
              Basic Components
            </li>
            <li>
              Data Display Components
            </li>
            <li>
              Feedback Components
            </li>
          </ul>
        </li>
        <li>
          Pokedex UI Design
        </li>
      </ul>

      <Divider />
    </Typography>
  )
}
