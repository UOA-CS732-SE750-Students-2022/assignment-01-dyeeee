import { React, useState } from 'react'
import { PageHeader, Row, Col, Card, Timeline, Steps, Divider, Tree } from 'antd';
import { ClockCircleOutlined, SmileOutlined, DownOutlined, CarryOutOutlined, FormOutlined, PlaySquareOutlined, FileZipOutlined } from '@ant-design/icons';

export default function LinearDemo () {
  const [curStep, setCurStep] = useState(0);

  const onStepChange = current => {
    setCurStep(current);
  };
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Linear Components Demo"
        subTitle="Timeline, Stepline, Tree"
      />

      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Card title="TimeLine - Show Things" bordered={true} hoverable={true}>
            <Timeline mode={'left'}>
              <Timeline.Item label="2021-02-24">Course selection</Timeline.Item>
              <Timeline.Item color="green" label="2021-02-28">2022 S1 Term begins</Timeline.Item>
              <Timeline.Item label="2022-03-02 09:00:00" dot={<ClockCircleOutlined />}>
                The first lesson of COMPSCI 732. (Introduction, Course outline)
              </Timeline.Item>
              <Timeline.Item label="2022-03-04 12:00:00">STATS763 Lab1</Timeline.Item>
              <Timeline.Item label="2022-03-04 16:17:20" color="red">Connection is interrupted</Timeline.Item>
              <Timeline.Item label="2022-03-04 16:20:25">Network problems being solved</Timeline.Item>
              <Timeline.Item label="2022-03-06" color="#00CCFF" dot={<SmileOutlined />}>
                Complete all assignments for the first week.
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="StepLine - Click to move" bordered={true} hoverable={true}>
            <Steps current={curStep} onChange={onStepChange} direction="vertical" progressDot={true}>
              <Steps.Step title="Step 1" description="Introduction" />
              <Steps.Step title="Step 2" subTitle="pre" description="Live presentation" />
              <Steps.Step title="Step 3" description="Q & A" />
              <Steps.Step title="Step 4" description="Conclusion" />
            </Steps>
            <Divider></Divider>
            <Steps current={curStep} onChange={onStepChange} direction="vertical">
              <Steps.Step title="Step 1" description="Record a video" />
              <Steps.Step title="Step 2" subTitle="Deadline 12:00:00" description="Submit video" />
              <Steps.Step title="Step 3" icon={<SmileOutlined style={{ fontSize: '30px' }} />} description="Submit all materias" />
              <Steps.Step title="Step 4" status='error' description="Receive a confirmation notification" />
            </Steps>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Tree - Show Files" bordered={true} hoverable={true}>
            <Tree
              showLine
              switcherIcon={<DownOutlined />}
              defaultExpandedKeys={['0-0-0']}
              treeData={treeData}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}


const treeData = [
  {
    title: 'User',
    key: '0-0',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'Document',
        key: '0-0-0',
        icon: <CarryOutOutlined />,
        children: [
          { title: 'a1.txt', key: '0-0-0-0', icon: <CarryOutOutlined /> },
          {
            title: (
              <>
                <div>Dependent-file</div>
              </>
            ),
            key: '0-0-0-1',
            icon: <CarryOutOutlined />,
          },
          { title: 'a1.pdf', key: '0-0-0-2', icon: <CarryOutOutlined /> },
        ],
      },
      {
        title: 'Download',
        key: '0-0-1',
        icon: <CarryOutOutlined />,
        children: [{ title: 'lab2-solution.zip', key: '0-0-1-0', icon: <CarryOutOutlined />, switcherIcon: <FileZipOutlined /> }],
      },
      {
        title: 'Video',
        key: '0-0-2',
        icon: <CarryOutOutlined />,
        children: [
          { title: '732_lecture1.mp4', key: '0-0-2-0', switcherIcon: <PlaySquareOutlined /> },
          {
            title: '732_lecture2.mp4',
            key: '0-0-2-1',
            icon: <CarryOutOutlined />,
            switcherIcon: <PlaySquareOutlined />,
          },
        ],
      },
    ],
  },
  {
    title: 'Source',
    key: '0-1',
    icon: <CarryOutOutlined />,
    children: [
      {
        title: 'src',
        key: '0-1-0',
        icon: <CarryOutOutlined />,
        children: [
          { title: 'index.js', key: '0-1-0-0', icon: <CarryOutOutlined /> },
          { title: 'index.css', key: '0-1-0-1', icon: <CarryOutOutlined /> },
        ],
      },
    ],
  },
];