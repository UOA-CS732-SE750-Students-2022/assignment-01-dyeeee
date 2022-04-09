import { PageHeader, Cascader, Select, Tag, Row, Col, Card, Space, Divider, Button } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import { Result } from 'antd';
import React from 'react';

// Webpage Result

export default function ResultDemo () {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Results From Website"
        subTitle=""
      />

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="Sucess" bordered={true} hoverable={true}>
            <Result
              status="success"
              title="Successfully Submitted!"
              subTitle="File name:  COMPSCI763-Assignment1.pdf "
              extra={[
                <Button type="primary"><Link to='/'>Go Home</Link></Button>,
                <Button key="buy">Exit</Button>,
              ]}
            />
          </Card>
        </Col>

        <Col span={24}>
          <Card title="Error" bordered={true} hoverable={true}>
            <Result
              status="error"
              title="Submission Failed"
              subTitle="Please check the filename and format before resubmitting."
              extra={[
                <Button type="primary" key="console">
                  Try again
                </Button>,
                <Button key="buy">Exit</Button>,
              ]}
            >

            </Result>
          </Card>
        </Col>

        <Col span={24}>
          <Card title="404" bordered={true} hoverable={true}>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              extra={<Button type="primary"><Link to='/'>Go Home</Link></Button>}
            />
          </Card>
        </Col>






      </Row>
    </>
  )
}
