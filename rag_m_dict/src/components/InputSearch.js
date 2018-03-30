import React from 'react'

class InputSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.value
        }
    }
    handleChange(e){
        const v = e.target.value
        const newV = v.replace(/[^ㄱ-ㅎ가-힣.]+/g,'')
        // console.log(newV);
        this.setState({value:newV})
        if (this.props.onChange) {
            this.props.onChange({ target: this, value: newV})
        }
    }

    // componentWillReceiveProps (nextProps){
    //     this.setState({value: nextProps.value})
    // }

    render(){
        return(
            <div>
                <label>{this.props.title} : </label>
                <input type='text' value={this.state.value} onChange={e => this.handleChange(e)} />
            </div>
        )
    }
}

export default InputSearch
