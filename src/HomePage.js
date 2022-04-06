import React, { useState } from 'react'
import { Collapse, Avatar, Card, Divider, PageHeader, Button, Select, InputNumber, Input } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, HeartTwoTone, StarTwoTone, PushpinTwoTone } from '@ant-design/icons';
import { Col, Row, Progress, Space, Tag } from 'antd';
import { Typography } from 'antd';

import myPokemon from './myPokemon.json';
const { Text, Link } = Typography;
const { Meta } = Card;
const { Panel } = Collapse;

const colorDic = { Fire: "#FF9741", Water: "#3692DC", Grass: "#38BF4B", Flying: "#89AAE3", Poison: "#B567CE" }


const labels_options = [{ value: 'Water' }, { value: 'Grass' }, { value: 'Fire' }, { value: 'Poison' }, { value: 'Flying' }];

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default function HomePage () {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Search your pokemon" bordered={true} style={{
            height: 280,
          }}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <InputNumber min={1} max={132}
                addonBefore="id" />
              <Input addonBefore="Name" placeholder="large size" />
              <Select
                mode="multiple"
                showArrow
                tagRender={tagRender}
                defaultValue={['Grass', 'Poison']}
                style={{ width: '100%' }}
                options={labels_options}
              />
              <Button
                type="primary" style={{ background: "#3575FD", borderColor: "#3575FD" }}
                icon={<EditOutlined />}
              >
                Search
              </Button>

            </Space>

          </Card>
        </Col>

        <Col span={12}>
          <Card title="Functions" bordered={true} style={{
            height: 280,
          }}>
            <Card.Grid hoverable={true} style={gridStyle}>
              <Space direction='vertical'>
                <Avatar size={32} src={"./pokemon/Ability.png"} />
                Ability
              </Space>
            </Card.Grid>
            <Card.Grid hoverable={true} style={gridStyle}>
              <Space direction='vertical'>
                <Avatar size={32} src={"./pokemon/Moves.png"} />
                Moves
              </Space>
            </Card.Grid>
            <Card.Grid hoverable={true} style={gridStyle}>
              <Space direction='vertical'>
                <Avatar size={32} src={"./pokemon/Items.png"} />
                Items
              </Space>
            </Card.Grid>
            <Card.Grid hoverable={true} style={gridStyle}>
              <Space direction='vertical'>
                <Avatar size={32} src={"./pokemon/Egg.png"} />
                EggGroup
              </Space>
            </Card.Grid>
            <Card.Grid hoverable={true} style={gridStyle}>
              <Space direction='vertical'>
                <Avatar size={32} src={"./pokemon/fire.png"} />
                Types
              </Space>
            </Card.Grid>
            <Card.Grid hoverable={true} style={gridStyle}>
              <Space direction='vertical'>
                <Avatar size={32} src={"./pokemon/BaseC.png"} />
                Base
              </Space>
            </Card.Grid>
            <Card.Grid hoverable={true} style={gridStyle}>
              <Space direction='vertical'>
                <Avatar size={32} src={"./pokemon/BaseCa.png"} />
                BaseCalc
              </Space>
            </Card.Grid>

            <Card.Grid hoverable={true} style={gridStyle}>
              <Space direction='vertical'>
                <Avatar size={32} src={"./pokemon/Nature.png"} />
                Nature
              </Space>
            </Card.Grid>



          </Card>
        </Col>

        <Collapse bordered={false} defaultActiveKey={['1', '2', '3', '4', '5']}>

          {myPokemon.map((pokemon) => (
            <Panel header={"#" + pokemon.id + " " + pokemon.name} key={pokemon.id}>
              <Row gutter={[0, 0]}>
                <Col span={22} offset={1}>
                  <Card bordered={false} hoverable={true}>
                    <Row gutter={[20, 0]}>
                      <Col span={8}>
                        <Card
                          style={{ width: 180 }}
                          bordered={false}
                          cover={
                            <img
                              alt={pokemon.id}
                              src={"./pokemon/" + pokemon.id + ".png"}
                            />
                          }
                          actions={[
                            <HeartTwoTone twoToneColor={'#FF4446'} />,
                            <StarTwoTone twoToneColor={'#FFD70F'} />,
                            <PushpinTwoTone />,
                          ]}
                        >
                          <Meta
                            title={"#" + pokemon.id + " " + pokemon.name}
                          />
                        </Card>
                      </Col>
                      <Col span={16} style={{ width: '100%' }}>
                        <Divider orientation="left">Type</Divider>
                        <Col offset={0} >
                          <Space direction='horizantal' style={{ width: '100%' }} size={10}>
                            {PokemonTypes(pokemon)}

                          </Space>
                        </Col>
                        <Divider orientation="left">Base</Divider>
                        <Row gutter={[10, 5]}>
                          <Col span={8} offset={1}>
                            <Space direction='vertical' style={{ width: '100%' }} size={0}>
                              <Text>HP </Text>
                              <Text>Attack </Text>
                              <Text>Defense </Text>
                              <Text>Sp. Attack </Text>
                              <Text>Sp. Defense </Text>
                              <Text>Speed </Text>
                              <Text strong>Total </Text>

                            </Space>
                          </Col>
                          <Col span={10}>
                            <Space direction='vertical' style={{ width: '100%' }} size={0}>

                              <Progress percent={(pokemon.base.HP / 132.0) * 100} showInfo={false} status="active"
                                strokeColor={'#7FBF4B'} />
                              <Progress percent={(pokemon.base.Attack / 132.0) * 100} showInfo={false} status="active"
                                strokeColor={'#F7C436'} />
                              <Progress percent={(pokemon.base.Defense / 132.0) * 100} showInfo={false} status="active"
                                strokeColor={'#D47D31'} />
                              <Progress percent={(pokemon.base['Sp. Attack'] / 132.0) * 100} showInfo={false} status="active"
                                strokeColor={'#4EBBC9'} />
                              <Progress percent={(pokemon.base['Sp. Defense'] / 132.0) * 100} showInfo={false} status="active"
                                strokeColor={'#4E85C6'} />
                              <Progress percent={(pokemon.base.Speed / 132.0) * 100} showInfo={false} status="active"
                                strokeColor={'#9A4CC9'} />
                              <Progress percent={(pokemon.base.HP + pokemon.base.Attack +
                                pokemon.base.Defense + pokemon.base['Sp. Attack'] +
                                pokemon.base['Sp. Defense'] + pokemon.base.Speed) / 900 * 100
                              } showInfo={false} status="active"
                                strokeColor={'#FC1D1D'} />

                            </Space>
                          </Col>

                          <Col span={5} >
                            <Space direction='vertical' style={{ width: '100%' }} size={0}>
                              <Text>{pokemon.base.HP} </Text>
                              <Text>{pokemon.base.Attack} </Text>
                              <Text>{pokemon.base.Defense} </Text>
                              <Text>{pokemon.base['Sp. Attack']} </Text>
                              <Text>{pokemon.base['Sp. Defense']} </Text>
                              <Text>{pokemon.base.Speed} </Text>
                              <Text strong>{pokemon.base.HP + pokemon.base.Attack +
                                pokemon.base.Defense + pokemon.base['Sp. Attack'] +
                                pokemon.base['Sp. Defense'] + pokemon.base.Speed
                              } </Text>

                            </Space>
                          </Col>


                        </Row>

                      </Col>
                      <Col offset={0} >
                        <Divider orientation="left">Description</Divider>

                        <Text>{pokemon.description}</Text>
                      </Col>
                    </Row>
                  </Card>
                </Col>


              </Row>


            </Panel>
          ))}

        </Collapse>


      </Row>

    </>
  )
}

function PokemonList () {
  return (
    <div>
      <div>
        {myPokemon.map((pokemon) => (
          console.log(pokemon.base.HP)

        ))}
      </div>
    </div>
  );
}

function PokemonTypes (pokemon) {
  return (
    <div>
      <Space direction='horizantal' style={{ width: '100%' }} size={10}>
        {pokemon.type.map((type) => (
          console.log(type),
          console.log(colorDic[type]),
          (
            <Tag icon={<Avatar src={"./pokemon/" + type + ".png"} size={"small"} />} color={colorDic[type]}>
              {type}
            </Tag>
          )
        ))}
      </Space>
    </div>
  );
}

function tagRender (props) {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={colorDic[value]}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}