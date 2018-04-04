import React from 'react'
import MuiTextField from './MuiTextField'

const style={
    width:"80%",
    margin:"auto"
}

class Inbox extends React.Component {
    // constructor() {
    //
    // }
    render(){
        return(
            <div style={style}>
                <h1>아이템 검색</h1>
                <MuiTextField />
            </div>
        )
    }
}

export default Inbox
