import React from 'react'
import PropTypes from 'prop-types'

class FormInput extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.value,
            isOK: this.checkValue(this.props.value)
        }
        this.handleChange = this.handleChange.bind(this)
    }
    checkValue(s){
        if (this.props.pattern === null) {
            return true
        }else{
            return this.props.pattern.test(s)
        }
    }
    handleChange(e){
        const v = e.target.value
        const filter = this.props.filter

        let newValue = v
        if (filter !== null) {
            newValue = newValue.replace(filter, '')
        }
        const newIsOK = this.checkValue(newValue)
        console.log(newIsOK);
        this.setState({
            value: newValue,
            isOK: newIsOK
        })
        if (this.props.onChange) {
            this.props.onChange({target: this, value: newValue})
        }
    }
    // 부모 컴포넌트에서 변경된 state를 받아와서 nextProps로 전달함.
    // 해당내용을 setState를 통해 값을 갱신시켜 부모와 자식간의 값을 일치시켜준다.
    // componentWillReceiveProps(nextProps){
    //     this.setState({
    //         value: nextProps.value,
    //         isOK: this.checkValue(nextProps.value)
    //     })
    // }

    render(){
        return(
            <div>
                <label>{this.props.label} : </label>{this.state.isOK}
                <input type="text" name={this.props.name}
                    placeholder={this.props.placeholder}
                    value={this.state.value}
                    onChange={this.handleChange} />
            </div>
        )
    }
}

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    filter: PropTypes.object,
    pattern: PropTypes.object,
    value: PropTypes.string,
    placeholder:  PropTypes.string,
    onChange:  PropTypes.func
}

FormInput.defaultProps = {
    filter: null,
    pattern: null,
    value: '',
    placeholder: '',
    onChange: null
}

export default FormInput
