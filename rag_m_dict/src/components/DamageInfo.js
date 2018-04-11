import React from 'react'
import MuiTextField from './MuiTextField'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
const style={
    width:"80%",
    margin:"auto"
}

class DamageInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            def : 0,
            mdef : 0,
            atk: 0,
            matk: 0,
            value: 0,
            result:0,
            realDamage:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleChange(e){
        const v = e.target.value
        const newV = v.replace(/[^0-9]+/g,'')
        // console.log(newV);
        this.setState({def:newV})
    }
    handleChange2(e){
        const v = e.target.value
        const newV = v.replace(/[^0-9]+/g,'')
        // console.log(newV);
        this.setState({atk:newV})
    }

    handleClick(e){
        const def = this.state.def
        const per_def = 100-((4000+Number(def))/(4000+Number(def)*10))*100
        this.setState({result:per_def})
        const realDamage = Number(this.state.atk) * (7.5 * 1 * 1 * (1-per_def/100)) //+ (ATK/MATK * Skill * buff * 속성)
        this.setState({realDamage:realDamage})
    }
    render(){
        return(
            <div style={style}>
                <h1>Damage Simulater</h1>
                <div>
                    <TextField
                        hintText="DEF"
                        value={this.state.def}
                        onChange={e => this.handleChange(e)}/>
                    <TextField
                        hintText="ATK"
                        value={this.state.atk}
                        onChange={e => this.handleChange2(e)}/>
                    <RaisedButton
                        label="계산"
                        primary={true}
                        onClick={this.handleClick}
                    />
                </div>
                <div style={style}>
                    <label>Result : </label>
                    <span>{this.state.result}</span>
                </div>
                <div style={style}>
                    <label>realDamage : </label>
                    <span>{this.state.realDamage}</span>
                </div>
            </div>
        )
    }
}

export default DamageInfo
