import { Image, Spin, Skeleton, Carousel, Avatar } from 'antd';
import { Button, Space, PageHeader } from 'antd';
import { Card, Col, Row } from 'antd';

import { React, useState } from 'react'

const { Meta } = Card;

// style
const imgStyle = {
  height: '100%',
  objectFit: 'cover',
  width: '100%'
}

// Page for showing the images

export default function ImageDemo () {
  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Image Demo"
        subTitle="Image Components, Varousel, Card"
      />

      <Row gutter={[16, 16]} justify="center">
        {/* spac={24} to hold all space */}
        <Col span={24} >
          <Card title="Image Component - View as Album, Loading View" bordered={true} hoverable={true}
          >
            <Col span={22} offset={1} >
              <Space direction='vertical' style={{ width: '100%' }}>
                <Image.PreviewGroup style={{ width: '100%' }}>
                  <Image width={150} height={150}
                    src={`https://lorempokemon.fakerapi.it/pokemon/320`}
                    placeholder={
                      <Spin tip="Loading..." />
                    } />
                  <Image
                    width={150} height={150}
                    src="https://lorempokemon.fakerapi.it/pokemon/321"
                    placeholder={
                      <Spin tip="Loading..." />
                    }
                  />
                  <Image
                    width={150} height={150}
                    src="https://lorempokemon.fakerapi.it/pokemon/322"
                    placeholder={
                      <Spin tip="Loading..." />
                    }
                  />
                  <Image
                    width={150} height={150}
                    src="https://lorempokemon.fakerapi.it/pokemon/323"
                    placeholder={
                      <Spin tip="Loading..." />
                    }
                  />
                </Image.PreviewGroup>
                <Button
                  width={10}
                  type="primary"
                  onClick={() => {
                    window.location.reload(false);
                  }}
                >
                  Reload
                </Button>
              </Space>
            </Col>

          </Card>
        </Col>

        {/* Carousel View */}
        <Col span={24} >
          <Card title="Carousel View, Autoplay" bordered={true} hoverable={true}>
            <Col span={18} offset={3} >
              <Carousel dotPosition={'left'} autoplay>
                <div>
                  <img alt="1" style={imgStyle} src="./bg1.jpg" />
                </div>
                <div>
                  <img alt="2" style={imgStyle} src="./bg2.jpg" />
                </div>
                <div>
                  <img alt="3" style={imgStyle} src="./bg3.jpg" />
                </div>
                <div>
                  <img alt="4" style={imgStyle} src="./bg4.jpg" />
                </div>
              </Carousel>
            </Col>
          </Card>
        </Col>

        {/* Card View */}
        <Col span={24} >
          <Card title="Card View" bordered={true} hoverable={true}>
            <Card
              hoverable
              cover={<img src="./bg5.jpg" />}
            >
              <Meta title="Pokemon Master - Leon" description="https://bulbapedia.bulbagarden.net/wiki/Leon_(anime)" />
            </Card>
          </Card>
        </Col>



      </Row >



    </>
  );
}
