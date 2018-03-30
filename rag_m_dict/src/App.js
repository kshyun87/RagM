import React, { Component } from 'react'
import SimpleForm from './components/SimpleForm'
import './App.css'

// 메인 화면 컴포넌트입니다.
const style ={
    width:"50%",
    margin:"30px"
}
export default class App extends Component {
  render () {
    return (
      <div className='App'>
          <div style={style}></div>
          <SimpleForm />
      </div>
    )
  }
}
