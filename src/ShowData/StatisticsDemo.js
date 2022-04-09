import { React, useState } from 'react'
import { Statistic, PageHeader, Row, Col, Card } from 'antd';
import { LikeOutlined, SmileTwoTone, TeamOutlined, ArrowUpOutlined, LikeTwoTone } from '@ant-design/icons';
import moment from 'moment';
import { Progress, Space, Table, Button } from 'antd';

import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

// Pages for statistics Demos

export default function StatisticsDemo () {
  const deadline = Date.now() + 10000 * 60 * 60 * 24 * 2; // Moment is also OK
  const [percent, setPercent] = useState(20);


  // Binding for progress
  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decline = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };


  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Statistics Demo"
        subTitle="Values, Table, Dashboard"
      />

      <Row gutter={[16, 16]}>
        {/* Statistic Panel */}
        <Col span={24}>
          <Card title="Statistic Value" bordered={true} hoverable={true}
          >
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Space direction='vertical'>
                  <Space direction='horizantal' size={16} >
                    <Statistic title="Followers"
                      valueStyle={{ color: '#D05A5C' }}
                      value={1695679} prefix={<SmileTwoTone twoToneColor='#D05A5C' />} />
                    <Statistic
                      title="Grow Rate"
                      value={7.32}
                      precision={2}
                      valueStyle={{ color: '#EF7A30' }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Space>
                  <Space direction='horizantal'>
                    <Statistic title="Be Liked"
                      valueStyle={{ color: '#C359E6' }}
                      value={14853478} prefix={<LikeTwoTone twoToneColor='#C359E6' />} />
                  </Space>
                  <Statistic.Countdown valueStyle={{ color: '#619CB0' }} suffix="Left"
                    title="Countdown to Anniversary " value={deadline} format="HH:mm:S" />
                </Space>
              </Col>

              <Col span={16}>
                <Table
                  bordered
                  title={() => 'Final Score '}
                  pagination={{ defaultPageSize: 3 }}
                  dataSource={data} columns={columns} size="small" />
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Dashboard */}
        <Col span={24}>
          <Card title="Dashboard" bordered={true} hoverable={true}>
            <Row gutter={16} justify='center'>
              <Col span={8}>
                <Space direction='vertical'>
                  <Space direction='horizantal' size={16}>
                    <Progress
                      strokeColor={{
                        '0%': '#6ec6ca',
                        '30%': '#08979d',
                        '100%': '#055b5c',
                      }}
                      type="circle" percent={66} />
                    <Progress
                      strokeColor={{
                        '0%': '#6ec6ca',
                        '30%': '#08979d',
                        '100%': '#055b5c',
                      }}
                      type="circle" percent={100} />
                  </Space>
                  <Space direction='horizantal' size={15}>
                    <Progress
                      status='active'
                      strokeColor={{
                        '100%': '#37caec',
                        '70%': '#2a93d5',
                        '0%': '#125488',
                      }}
                      type="dashboard" percent={88} />
                    <Progress
                      status='active'
                      strokeColor={{
                        '100%': '#37caec',
                        '70%': '#2a93d5',
                        '0%': '#125488',
                      }}
                      type="dashboard" percent={percent} />
                  </Space>
                </Space>
              </Col>
              <Col span={14} style={{ width: '100%' }}>
                <Space direction='vertical' style={{ width: '100%' }} size={20}>
                  <Progress percent={66} status="active" strokeColor={{
                    '0%': '#6ec6ca',
                    '30%': '#08979d',
                    '100%': '#055b5c',
                  }} />
                  <Progress percent={75} status="exception" />
                  <Progress percent={100} strokeColor={{
                    '0%': '#6ec6ca',
                    '30%': '#08979d',
                    '100%': '#055b5c',
                  }} />
                  <Progress status="active" percent={percent} strokeColor={{
                    '0%': '#37caec',
                    '30%': '#2a93d5',
                    '100%': '#125488',
                  }} />


                  <Progress steps={20} percent={percent} strokeColor={'#2a93d5'} />
                  <Button.Group>
                    <Button onClick={decline} icon={<MinusOutlined />} />
                    <Button onClick={increase} icon={<PlusOutlined />} />
                  </Button.Group>
                </Space>
              </Col>
            </Row>
          </Card>

        </Col>


      </Row>
    </>
  )
}

// Data for Table components
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
    ellipsis: true,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: {
      compare: (a, b) => a.age - b.age,
      multiple: 4,
    },
    ellipsis: true,
  },
  {
    title: 'STAT Score',
    dataIndex: 'STAT',
    sorter: {
      compare: (a, b) => a.STAT - b.STAT,
      multiple: 3,
    },
    ellipsis: true,
  },
  {
    title: 'CS Score',
    dataIndex: 'CS',
    sorter: {
      compare: (a, b) => a.CS - b.CSCS,
      multiple: 2,
    },
    ellipsis: true,
  },
  {
    title: 'IS Score',
    dataIndex: 'IS',
    sorter: {
      compare: (a, b) => a.IS - b.IS,
      multiple: 1,
    },
    ellipsis: true,
  },

];

const data = [
  {
    key: '1',
    name: 'Ava',
    age: 23,
    STAT: 66,
    CS: 80,
    IS: 78,
  },
  {
    key: '2',
    name: 'Bella',
    age: 24,
    STAT: 78,
    CS: 90,
    IS: 77,
  },
  {
    key: '3',
    name: 'Carol',
    age: 25,
    STAT: 79,
    CS: 86,
    IS: 82,
  },
  {
    key: '4',
    name: 'Diana',
    age: 24,
    STAT: 88,
    CS: 86,
    IS: 90,
  },
  {
    key: '5',
    name: 'Eileen',
    age: 25,
    STAT: 87,
    CS: 79,
    IS: 86,
  },
];