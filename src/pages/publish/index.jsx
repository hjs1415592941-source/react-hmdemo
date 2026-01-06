import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'
import { Editor } from '@tinymce/tinymce-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {getChannelApi,createAreticleApi} from '../../apis/article'
import { useEffect, useState } from 'react'

const { Option } = Select

const Publish = () => {
  const [channelList,setChannelList]=useState([])
  // 获取频道列表
  useEffect(()=>{
    const getChannnelList= async()=>{
      const res=await getChannelApi()
      setChannelList(res.data.channels)
    }
    getChannnelList()
  },[])

  // 点击form button 回调
  // 提交表单
  
  
  const onFinish=(formdata)=>{
    console.log(formdata);
    // 校验 封面类型type是否和实际相当
    if(imageList.length !== imageType) return message.warning('图片数量不匹配')
    const {title,content,channel_id}=formdata
    // 处理formdata格式
    const reqData={
      title,
      content,
      cover:{
        type:imageType,
        images:imageList.map(item=>item.response.data.url)
        // 图片列表
      },
      channel_id
    }
    // 调用接口
    createAreticleApi(reqData)
    
  }
  
  const [imageList,setimageList]=useState([])

  // 上传回调
  const handleChange=(value)=>{
    setimageList(value.fileList)
  }

  // 切换图片类型
  // 回调函数
  const [imageType,setimageType]=useState(0)
   const onTypeChange=(value)=>{
    setimageType(value.target.value)
   }
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: '发布文章' },
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 0 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >   
          {/* value 属性会条件到接口 channelid相等 */}
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map(item=>(
                    <Option key={item.id} value={item.id}>
                      {item.name}
                    </Option>
                  ))}  
            </Select>
          </Form.Item>
           <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>

            {/*
            */}
            {imageType > 0 && <Upload
              listType="picture-card"
              showUploadList
              onChange={handleChange}
              // name 接口字段名
              name='image'
              action='http://geek.itheima.net/v1_0/upload'
              maxCount={imageType}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>}
              {/* showUploadList显示上传列表 */}
            
          </Form.Item>       

          
           
       

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
           
          > 
          <Input placeholder="请输入文章内容" style={{ width: 400 }} />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish