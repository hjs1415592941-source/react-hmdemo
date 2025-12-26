import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { fetchUserinfo, removeUsers } from '../../store/modules/user.js'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/home',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
  const userinfo = useSelector((state) => state.user.userinfo);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserinfo())
  }, [dispatch])
  const navigate = useNavigate()
  // 反向高亮
  // 获取当前路径
  const location = useLocation()
  const selectedkey = location.pathname

  const onConfirm = () => {
    dispatch(removeUsers())
    navigate('/login')
  }

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userinfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onConfirm}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            selectedKeys={selectedkey}
            items={items}
            style={{ height: '100%', borderRight: 0 }}
            onClick={(e) => {
              navigate(e.key)
            }
            }></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* 二阶路由出口 */}
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout