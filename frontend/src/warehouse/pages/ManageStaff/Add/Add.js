import React, { useEffect, useState } from 'react'
import Layout from '~/warehouse/layout'

function Add() {

    const [password,setPassword] = useState('')
    const [passwordConfirm,setPasswordConfirm] = useState('')
    const [noti,setNoti] = useState('');

    useEffect(()=>{
        if(password === passwordConfirm){
            setNoti('Thoả mãn')
        } else {
            setNoti('Sai mật khẩu')
        }
    },[password,passwordConfirm])
  return (
    <Layout>
        <div>Thêm nhân viên mới</div>
        <div>Tên nhân viên</div>
        <input type="text"></input>
        <div>Tên đăng nhập</div>
        <input type="text"></input>
        <div>Mật khẩu</div>
        <input type="text" onChange={(e) => setPassword(e.target.value)}></input>
        <div>Xác nhận mật khẩu</div>
        <input type="text" onChange={(e) => setPasswordConfirm(e.target.value)}></input>
        <span>{noti}</span>
        <div>Số điện thoại</div>
        <input type="text"></input>
    </Layout>
  )
}

export default Add
