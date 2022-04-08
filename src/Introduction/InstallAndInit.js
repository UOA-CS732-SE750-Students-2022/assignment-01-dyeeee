import React from 'react'
import { Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

// Page For Installation and project aspect

export default function InstallAndInit () {
  return (
    <Typography>
      <Title level={3}>Install Ant Design for React</Title>
      <Paragraph>Execute the following installation command in the root directory of the react project</Paragraph>
      <Text code>yarn add antd</Text>
      <Divider />
      <Title level={3}>Build this project</Title>
      <Title level={5}>1. Node.js, React Framework and yarn  on your system </Title>
      <Paragraph>As introduced in CS732</Paragraph>

      <Title level={5}>2. Downlod project from Github</Title>
      <ul>
        <li>
          https://github.com/UOA-CS732-SE750-Students-2022/assignment-01-dyeeee
        </li>
        <li>
          Clone and Pull or Download Zip(suggested)
        </li>
      </ul>

      <Title level={5}>3. Install React-Router for this project</Title>
      <Text code>yarn add react-router-dom</Text>

      <Title level={5}>4. Install Ant Design for this project</Title>
      <Text code>yarn add antd</Text>

      <Title level={5}>5. Initialize and Get start</Title>
      <Text code>yarn</Text>
      <br />
      <Text code>yarn start</Text>
      <Divider />

    </Typography>
  )
}
