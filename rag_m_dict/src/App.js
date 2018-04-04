import React, { Component } from 'react'
import BaseLayout from './components/layout'
import './App.css'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// import getMuiTheme from 'material-ui/styles/getMuiTheme'

// import InchToCm from './inch/InchToCm'
// import ZipInput from './zip/ZipInput'

// 메인 화면 컴포넌트입니다.
const sty ={
    background:"black"
}
export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider >
          <BaseLayout />
      </MuiThemeProvider>
    )
  }
}
