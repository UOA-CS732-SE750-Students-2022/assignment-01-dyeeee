import { Card, Col, Row, Input, Space, InputNumber, Button, PageHeader } from 'antd';
import { React, useState, useRef } from 'react'
import { ClockCircleOutlined, UserOutlined, AudioOutlined, EditOutlined } from '@ant-design/icons';

const { Search } = Input;




export default function InputDemo () {

  // Input ref
  const inputRef = useRef(null);

  const sharedProps = {
    style: { width: '100%' },
    defaultValue: 'Try Focus by Above Button.',
    ref: inputRef,
  };

  // Search state
  const onSearch = value => console.log(value);
  const { TextArea } = Input;

  const onChange = e => {
    console.log('Change:', e.target.value);
  };

  // Button disable
  const [disabled, setDisabled] = useState(true);
  const [value, setValue] = useState('99');


  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Input Components Demo"
        subTitle="Text, Number, Password, TextArea"
      />
      <Row gutter={[16, 16]}>
        {/* Input Size */}
        <Col span={12}>
          <Card title="Basic - Size and Disabled" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '90%' }}>
              <Input size="small" placeholder="small size" prefix={<EditOutlined />} />
              <Input size="large" placeholder="large size" prefix={<EditOutlined />} />

              <Space direction="horizantal" style={{ width: '100%' }}>
                <Input placeholder="default size" prefix={<EditOutlined />}
                  disabled={disabled} />
                <Button onClick={() => setDisabled(!disabled)} type="primary">
                  Toggle Disabled
                </Button>
              </Space>
            </Space>

          </Card>
        </Col>

        {/* Prefix */}
        <Col span={12} >
          <Card title="Prefix Holder and Search" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Search
                addonBefore="https://"
                placeholder="Search content"
                allowClear
                suffix=".com"
                onSearch={onSearch}
              />
              <Search placeholder="Search content" onSearch={onSearch} enterButton />
              <Search placeholder="Search content" enterButton="Search" loading />
            </Space>
          </Card>
        </Col>

        {/* Number */}
        <Col span={12} >
          <Card title="Number and Password" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '90%' }}>
              <InputNumber
                defaultValue={1000}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
                style={{ width: '100%' }}
              />
              <Space direction='horizantal' style={{ width: '100%' }}>
                <InputNumber min={1} max={10} value={value} onChange={setValue}
                  addonBefore="Input 0-10" />
                <Button
                  type="primary"
                  onClick={() => {
                    setValue(99);
                  }}
                >
                  Reset
                </Button>
              </Space>
              <Input.Password placeholder="Password" allowClear />

            </Space>
          </Card>
        </Col>

        {/* Status */}
        <Col span={12} >
          <Card title="Set Status" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Input status="error" placeholder="Error" />
              <Input status="error" prefix={<ClockCircleOutlined />} placeholder="Error with prefix" />
              <Input status="warning" prefix={<ClockCircleOutlined />} placeholder="Warning with prefix" />
            </Space>
          </Card>
        </Col>

        {/* TextArea */}
        <Col span={12} >
          <Card title="TextArea - Focus" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Space direction="horizantal" >
                <Button
                  onClick={() => {
                    inputRef.current.focus({
                      cursor: 'start',
                    });
                  }}
                >
                  Focus at first
                </Button>
                <Button
                  onClick={() => {
                    inputRef.current.focus({
                      cursor: 'end',
                    });
                  }}
                >
                  Focus at last
                </Button>
                <Button
                  onClick={() => {
                    inputRef.current.focus({
                      cursor: 'all',
                    });
                  }}
                >
                  Select all
                </Button>

              </Space>
              <Input.TextArea {...sharedProps} />
            </Space>
          </Card>
        </Col>

        {/* TextArea */}
        <Col span={12} >
          <Card title="TextArea - Autosize, Words Count, Clear Icon" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <TextArea
                showCount
                allowClear
                placeholder="TextArea with autosize, words count and clear icon."
                autoSize={{ minRows: 2, maxRows: 6 }}
                onChange={onChange}
                maxLength={100}
                defaultValue="TextArea with autosize, words count and clear icon."
              />
              <p>MinRows: 2, MaxRows: 6</p>
            </Space>
          </Card>
        </Col>
      </Row>



    </>

  )
}

