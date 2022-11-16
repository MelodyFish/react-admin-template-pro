import React, { useState, useEffect } from 'react'
import { Table, Form, Input, Select, Button, Row, Col, Tag, Space, Modal  } from 'antd'
import {
  SearchOutlined
} from '@ant-design/icons';
import './index.less'
const { Option } = Select


export default function CommonTable() {
  const data = [
    {
      key: '1',
      id: Math.floor(Math.random()*1000000),
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      id: Math.floor(Math.random()*1000000),
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      id: Math.floor(Math.random()*1000000),
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      align: 'center',
      key: 'id',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'center',
      key: 'name',
      render: (text) => <span>{text}</span>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      align: 'center',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      align: 'center',
      key: 'address',
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      align: 'center',
      key: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      align: 'center',
      render: (_, record) => (
        <Space size="middle"> 
          <a onClick={()=>edit(record)}>编辑</a>
          <a onClick={()=>deleteRow(record)}>删除</a>
        </Space>
      ),
    },
  ]
  
  const [inputValue, setInputValue]=useState('')
  const [selectedValue, setSelectedValue]=useState('')
  const [showModal, setShowModal]=useState(false)
  const [curModalType, setCurModalType]=useState('新增')
  const [tableData, setTableData]=useState(data)
  function search(){

  }
  function addSomething(){
    setShowModal(true)
    setCurModalType('新增')
  }
  function handleOk(){
    setShowModal(false)
  }
  function handleCancel(){
    setShowModal(false)
  }
  function edit(record){
    setShowModal(true)
    setCurModalType('编辑')
    console.log('edit',record)
  }
  function deleteRow(record){
    setTableData(data.filter(v => {
      return v.id!==record.id
    }))
    console.log('edit',data)
  }
  return (
    <div className='table-container'>
      <div className="tools">
        <Row gutter={8}>
          <Col span={4}>
            <span>标题：</span>
            <Input style={{width: '70%'}} />
          </Col>
          <Col span={4}>
            <span>类型：</span>
            <Select style={{width: '70%'}} onChange={(value)=>setSelectedValue(value)}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled />
            </Select>
          </Col>
          <Col span={2}>
            <Button onClick={search} icon={<SearchOutlined />}>搜索</Button>
          </Col>
          <Col offset={12} span={2}>
            <Button onClick={addSomething} >新增</Button>
          </Col>
        </Row>
        
      </div>
      <div className="content">
        <Table columns={columns} dataSource={tableData} />
      </div>
      <div  className="modal">
        <Modal open={showModal} onOk={handleOk} onCancel={handleCancel} title={curModalType}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  )
}
