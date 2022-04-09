import { Layout, Menu } from 'antd';
import { BulbTwoTone, ProjectTwoTone, CodeTwoTone, AppstoreTwoTone, CheckSquareOutlined } from '@ant-design/icons';
import { InfoCircleOutlined, SettingOutlined, PictureOutlined, ColumnHeightOutlined, FormOutlined, PieChartOutlined } from '@ant-design/icons';
import { AlertOutlined, FileUnknownOutlined, CompassTwoTone } from '@ant-design/icons';
import './MyLayout.css';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// Layout JS, React-router-dom

function MyLayout () {
  const location = useLocation();
  console.log(location)
  // if (location.pathname == '/Pokedex') {
  //   setInDex(true);
  // } else {
  //   setInDex(false);
  // }
  document.title = "CS732 AntDesign Demo(ydu000)";

  return (
    <Layout>
      {/* Header */}
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}
          selectedKeys={location.pathname == '/Pokedex' ? "11" : "1"}
        >
          <Menu.Item key="1" ><text style={{ color: 'white', fontWeight: 'bold' }}> CS732 AntDesign Demo</text></Menu.Item>
          <Menu.Item key="11" > <Link to='/Pokedex'>My Pokedex</Link> </Menu.Item>
        </Menu>

      </Header>
      <Layout>
        <Sider width={256} className="site-layout-background">
          {/* Menu */}
          <Menu
            mode="inline"
            selectedKeys={location.pathname}
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['/', "sub1", "sub2", "sub3"]}
            style={{ height: '100%', borderRight: 0 }}
          >

            <SubMenu key="sub1" icon={<CodeTwoTone />} title="Introduction">
              <Menu.Item key='/' icon={<InfoCircleOutlined />}>
                <Link to='/'>About This Demo</Link>
              </Menu.Item>
              <Menu.Item key="/Install" icon={<SettingOutlined />}><Link to='/Install'>Install and Initialize</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<AppstoreTwoTone />} title="Basic Components">
              <Menu.Item key='/InputDemo' icon={<FormOutlined />}><Link to='/InputDemo' > Input Demo</Link></Menu.Item>
              <Menu.Item key='/SelectionDemo' icon={<CheckSquareOutlined />}><Link to='/SelectionDemo' > Selection Demo</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<ProjectTwoTone />} title="Display Components">
              <Menu.Item key='/ImageDemo' icon={<PictureOutlined />}><Link to='/ImageDemo' > Image Demo</Link></Menu.Item>
              <Menu.Item key='/StatisticsDemo' icon={<PieChartOutlined />}><Link to='/StatisticsDemo'>Statistics Demo</Link></Menu.Item>
              <Menu.Item key='/LinearDemo' icon={<ColumnHeightOutlined />}><Link to='/LinearDemo'>Linear Demo</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<CompassTwoTone />} title="Feedback Components">
              <Menu.Item key='/MessageDemo' icon={<AlertOutlined />}><Link to='/MessageDemo' > Message Demo</Link></Menu.Item>
              <Menu.Item key='/ResultDemo' icon={<FileUnknownOutlined />}><Link to='/ResultDemo'>Results Demo</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="/Pokedex" icon={<BulbTwoTone />}>
              <Link to='/Pokedex'>My Pokedex</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '14px 14px 14px' }}>

          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {/* Page Content  here in Outlet */}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout >
  )
};

export default MyLayout;