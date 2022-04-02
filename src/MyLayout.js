import { Layout, Menu } from 'antd';
import { BulbTwoTone, ProjectTwoTone, CodeTwoTone, AppstoreTwoTone, CheckSquareOutlined } from '@ant-design/icons';
import { InfoCircleOutlined, SettingOutlined, PictureOutlined, ColumnHeightOutlined, FormOutlined, PieChartOutlined } from '@ant-design/icons';
import { AlertOutlined, FileUnknownOutlined, CompassTwoTone } from '@ant-design/icons';
import './MyLayout.css';
import { Outlet, Link, useLocation } from 'react-router-dom';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


function MyLayout () {
  const location = useLocation();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" ><text style={{ color: 'white', fontWeight: 'bold' }}> CS732 AntDesign Demo</text></Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={256} className="site-layout-background">
          <Menu
            mode="inline"
            selectedKeys={location.pathname}
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['/', "sub1", "sub2", "sub3"]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="/" icon={<BulbTwoTone />}>
              <Link to='/'>Home Page</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<CodeTwoTone />} title="Introduction">
              <Menu.Item key='/AboutAntDesign' icon={<InfoCircleOutlined />}>
                <Link to='/AboutAntDesign'>About Ant Design</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<SettingOutlined />}>Install and Initialize</Menu.Item>
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
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout >
  )
};

export default MyLayout;