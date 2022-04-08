
import { Card, Col, Row, Input, Space, InputNumber, Button, PageHeader, Radio, Checkbox, Divider } from 'antd';
import { React, useState, Component } from 'react'
import { Rate, Cascader, Select, Tag } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { Slider } from 'antd';
import { TimePicker, DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'YYYY-MM-DD';
export default function SelectionDemo () {

  // Ratio States
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState('COMPSCI');

  const onChange = e => {
    setValue(e.target.value);
  };
  const onChange2 = e => {
    setValue2(e.target.value);
  };

  const [disabled, setDisabled] = useState(true);

  const options = [
    { label: 'COMPSCI', value: 'COMPSCI' },
    { label: 'STATS', value: 'STATS' },
    { label: 'SOFT', value: 'SOFT', disabled: disabled },
  ];

  // Checkbox States
  const plainOptions = ['763', '752', '732', '720'];
  const defaultCheckedList = ['763', '752'];

  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange_CK = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = e => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  // Rate
  const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Excellent'];
  const [rateIndex, setRateIndex] = useState(3);

  const handleChange = value => {
    this.setRateIndex({ value });
  };

  const customIcons = {
    1: <FrownOutlined />,
    2: <FrownOutlined />,
    3: <MehOutlined />,
    4: <SmileOutlined />,
    5: <SmileOutlined />,
  };

  // Selector
  const { Option } = Select;
  const cas_options = [
    {
      value: 'New Zealand',
      label: 'New Zealand',
      children: [
        {
          value: 'Auckland',
          label: 'Auckland',
          children: [
            {
              value: 'UOA',
              label: 'UOA',
            },
          ],
        },
      ],
    },
    {
      value: 'China',
      label: 'China',
      children: [
        {
          value: 'Beijing',
          label: 'Beijing',
          children: [
            {
              value: 'PKU',
              label: 'PKU',
            },
          ],
        },
      ],
    },
  ];

  // Label
  const labels_options = [{ value: 'Red' }, { value: 'Yellow' }, { value: 'Blue' }, { value: 'Green' }];


  // Slider
  const marks = {
    0: '',
    55: 'C',
    70: 'B',
    85: 'A',
    95: {
      style: {
        color: '#f50',
      },
      label: <strong>A+</strong>,
    },
  };

  // TimePicker
  const { RangePicker } = TimePicker;



  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Selection Components Demo"
        subTitle="Ratio, CheckBox, Rate, Selector, Slider, TimePicker"
      />

      <Row gutter={[16, 16]}>

        {/* Ratio */}
        <Col span={12}>
          <Card title="Ratio - Single Selection" bordered={true} hoverable={true}
            style={{
              height: 200,

            }}>
            <Space direction="vertical" size={5} style={{ width: '100%' }}>

              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4} disabled={disabled}>D</Radio>
              </Radio.Group>

              <Radio.Group
                options={options}
                onChange={onChange2}
                value={value2}
                optionType="button"
                buttonStyle="solid"
              />

              <Button onClick={() => setDisabled(!disabled)} type="primary"
                shape="round" value="small">
                Toggle Disabled
              </Button>
            </Space>

          </Card>
        </Col>

        {/* CheckBox */}
        <Col span={12}>
          <Card title="CheckBox - Multiple CheckBox" bordered={true} hoverable={true}
            style={{
              height: 200,
            }}>

            <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange_CK} />
            <Divider />
            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
              Select All Courses
            </Checkbox>
          </Card>
        </Col>

        {/* Rate */}
        <Col span={12}>
          <Card title="Rate - Selcet a Rate" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" size={5} style={{ width: '100%' }}>
              <Space direction='horizantal'>
                <Rate defaultValue={3} tooltips={desc} onChange={handleChange} />
                <span className="ant-rate-text">Try Hover</span>
              </Space>
              <Space direction='horizantal'>
                <Rate character={<HeartOutlined />} allowHalf defaultValue={2.5} />
                <span className="ant-rate-text">Allow Half</span>
              </Space>
              <Space direction='horizantal'>
                <Rate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
                <span className="ant-rate-text">Custom Icon</span>
              </Space>


            </Space>

          </Card>
        </Col>

        {/* Cascader */}
        <Col span={12}>
          <Card title="Selector - Selections, Cascader, Labels" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Select defaultValue="Auckland" style={{ width: 120 }}>
                <Option value="Auckland">Auckland</Option>
                <Option value="Wellington">Wellington</Option>
              </Select>
              <Cascader style={{ width: '100%' }} options={cas_options} placeholder="Select Your School" />

              <Select
                mode="multiple"
                showArrow
                tagRender={tagRender}
                defaultValue={['Red', 'Blue']}
                style={{ width: '100%' }}
                options={labels_options}
              />

            </Space>

          </Card>
        </Col>

        {/* Slider */}
        <Col span={12}>
          <Card title="Selector - Select by Slider" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <IntegerStep />
              <Slider range marks={marks} defaultValue={[55, 85]} />
            </Space>

          </Card>
        </Col>

        {/* DatePicker */}
        <Col span={12}>
          <Card title="Time and Date Picker - Select Date" bordered={true} hoverable={true}
            style={{
              height: 220,
            }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <TimePicker defaultValue={moment('12:13:14', 'HH:mm:ss')} />
              <RangePicker defaultValue={[moment('12:13:14', 'HH:mm:ss'), moment('15:16:17', 'HH:mm:ss')]} />

              <DatePicker.RangePicker
                defaultValue={[moment(moment(), dateFormat)]}
              />
            </Space>

          </Card>
        </Col>


      </Row>
    </>
  )

}

// render color for tags
function tagRender (props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={value}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

// A slider bind with the inputvalue
class IntegerStep extends Component {
  state = {
    inputValue: 7.3,
  };

  onChange = value => {
    this.setState({
      inputValue: value,
    });
  };

  render () {
    const { inputValue } = this.state;
    return (
      <Row>
        <Col span={12}>
          <Slider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.1}
          />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={inputValue}
            step={0.1}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}