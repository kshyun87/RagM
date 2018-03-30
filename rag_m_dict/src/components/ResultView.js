import React from 'react'

class ResultView extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <label>{this.props.title}</label><br/>
                <span>{this.props.value}</span>
            </div>
        )
    }
}

export default ResultView
