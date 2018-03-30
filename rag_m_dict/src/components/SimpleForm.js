import React from 'react'
import InputSearch from './InputSearch'
import ResultView from './ResultView'
import FormInput from './FormInput'
// 입력 양식 컴포넌트입니다.
export default class SimpleForm extends React.Component {
    constructor(props) {
        super(props)
        // 상태를 초기화합니다. --- (※1)
        this.state = {
            // search: '',
            itemName:'',
            dictItems: {
                "가렛": [
                    "마리나",
                    "마르크",
                    "마르크☆",
                    "호넷",
                    "맨블릿",
                    "데니로",
                    "데니로☆",
                    "피에르",
                    "로터자이로",
                    "드래곤 플라이",
                    "황금 도둑벌레"
                ],
                "강철":["로다프로그", "스켈레톤", "바돈", "휀"]
            }
        }
    }
    // 값이 변경됐을 때 --- (※2)
    doChange(e) {
        const newValue = e.value
        // this.setState({value: newValue.replace(/[^0-9]/g,'')})  숫자만 입력
        this.setState({itemName: newValue})
        if (newValue) {
            const monsters = this.state.dictItems[newValue] // 오브젝트는 JS와 동일하게 동작.

            if (monsters !== undefined) {
                this.setState({mon:monsters})
            }
        }
        // console.log(newValue);
    }
    // 화면 렌더링 --- (※4)
    render() {
        return (
            <div>
                <FormInput label="test" name={"name"}
                    value={this.state.itemName}
                    filter={/[^ㄱ-ㅎ가-힣]+/g}
                    pattern={/^[ㄱ-ㅎ가-힣]+$/}
                    placeholder={'아이템명을 입력하세요.'} onChange={e => this.doChange(e)}/>
                <br/>
                <ResultView title='결과' value={this.state.mon} />
            </div>
        )
    }
}
