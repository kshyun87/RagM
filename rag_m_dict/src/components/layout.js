import React from 'react'
import MenuExampleSimple from './mainMenu'
import SplitPane from 'react-split-pane'
import AppBar from 'material-ui/AppBar';
import PageControl from './Pages'

// 입력 양식 컴포넌트입니다.
export default class BaseLayout extends React.Component {
    constructor(props) {
        super(props)
        // 상태를 초기화합니다. --- (※1)
        this.state = {
            // search: '',
        }
    }

    // 화면 렌더링 --- (※4)
    render() {
        return (
            <div>
                <SplitPane split="vertical" minSize={50} defaultSize={100}>
                   <div>
                       <MenuExampleSimple />
                   </div>
                   <div>
                       <PageControl />
                    </div>
               </SplitPane>
            </div>
        )
    }
}
