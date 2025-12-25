import './index.scss'
import { Card, Form, Input, Button,message} from 'antd'
import logo from '@/assets/logo.png'
import { fetchLogin } from '../../store/modules/user'
import { useDispatch } from 'react-redux'

import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  // 点击登录之后 onFinsh函数调用
  const onFinish =  async(values) => {
        console.log(values)
         await dispatch(fetchLogin(values)) 
        // await 是等到成功结果拿到了再执行下面操作
        // 1.跳转到首页
          navigate('/')
        // 2.提示一下用户
         message.success('登录成功')
    }

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item
          
          name="mobile"
          rules={[{ required: true, message: '请输入手机号!' },
            { pattern:/^1[3-9]\d{9}$/, message: '请输入正确的手机号格式!' }
          ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
         
          name="code"
          rules={[{ required: true, message: '请输入验证码!' }
]}>
            <Input.Password size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login