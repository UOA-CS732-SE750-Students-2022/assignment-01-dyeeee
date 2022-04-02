import { React, useState, Component } from 'react';
import { PageHeader, Cascader, Select, Tag, Row, Col, Card, Space, Divider } from 'antd';
import { Alert, message, Button, Modal, notification, Drawer } from 'antd';

import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  BorderTopOutlined,
  BorderBottomOutlined,
} from '@ant-design/icons';

export default function MessageDemo () {


  const success = () => {
    message.success('Success Message');
  };

  const error = () => {
    message.error('Error Message');
  };

  const warning = () => {
    message.warning('Warning Message');
  };

  // Modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function warningModal () {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
  const openNotification = placement => {
    notification.info({
      message: `Notification ${placement}`,
      description:
        'Show Notification.',
      placement,
    });
  };

  // Drawer
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState('default');
  const showDefaultDrawer = () => {
    setSize('default');
    setVisible(true);
  };
  const showLargeDrawer = () => {
    setSize('large');
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Feedback UI Components Demo"
        subTitle="Alert, Message, Modal, Notification, Drawer"
      />

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Alert Messages" bordered={true} hoverable={true}>
            <Space direction='vertical' size={10}>
              <Alert message="Success Tips" type="success" showIcon />
              <Alert message="Informational Tips" type="info" showIcon />
              <Alert message="Warning" type="warning" showIcon />
              <Alert message="Error" type="error" showIcon />
              <Alert
                message="Success Tips"
                description="Show more information while prompting."
                type="success"
                showIcon
                closable
              />
              <Alert
                message="Warning"
                description="Show more information while prompting."
                type="warning"
                showIcon
                closable
              />
              <Alert
                message="Error"
                description="Show more information while prompting."
                type="error"
                showIcon
                closable
              />
            </Space>
          </Card>

        </Col>

        <Col span={12}>
          <Card title="Pop Messages - Click to see pop componentss" bordered={true} hoverable={true}>
            <Divider orientation="left">Message</Divider>
            <Space>
              <Button onClick={success} type="primary"
                style={{ background: "#72C040", borderColor: "#72C040" }}>Success</Button>
              <Button onClick={error} type="primary"
                style={{ background: "#ED5B56", borderColor: "#ED5B56" }}>Error</Button>
              <Button onClick={warning} type="primary"
                style={{ background: "#F0AF41", borderColor: "#F0AF41" }}>Warning</Button>
            </Space>

            <Divider orientation="left">Modal</Divider>

            <Space>
              <Button type="primary" onClick={showModal}>
                Basic Modal
              </Button>
              <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Ant</p>
                <p>Design</p>
                <p>Modal</p>
              </Modal>

              <Button onClick={warningModal}
                type="primary" style={{ background: "#F0AF41", borderColor: "#F0AF41" }}>
                Status Modal</Button>

            </Space>
            <Divider orientation="left">Notification</Divider>
            <Space>
              <Button type="primary" style={{ background: "#FABF89", borderColor: "#FABF89" }}
                onClick={() => openNotification('top')} icon={<BorderTopOutlined />}>
                top
              </Button>
              <Button
                type="primary" style={{ background: "#579EC2", borderColor: "#579EC2" }}
                onClick={() => openNotification('topLeft')}
                icon={<RadiusUpleftOutlined />}
              >
                topLeftaa
              </Button>
              <Button
                type="primary" style={{ background: "#FF816F", borderColor: "#FF816F" }}
                onClick={() => openNotification('topRight')}
                icon={<RadiusUprightOutlined />}
              >
                topRight
              </Button>
            </Space>


            <Divider orientation="left">Drawer</Divider>

            <Space>
              <Button type="primary" onClick={showDefaultDrawer}>
                Default Drawer
              </Button>
              <Button type="primary" onClick={showLargeDrawer}>
                Large Drawer
              </Button>
            </Space>
            <Drawer
              title={`Drawer`}
              placement="right"
              size={size}
              onClose={onClose}
              visible={visible}
              extra={
                <Space>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button type="primary" onClick={onClose}>
                    OK
                  </Button>
                </Space>
              }
            >
              <p>Ant</p>
              <p>Design</p>
              <p>Drawer</p>
            </Drawer>
          </Card>
        </Col>
      </Row>
    </>
  )


}