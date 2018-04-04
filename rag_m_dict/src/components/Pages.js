import React, {Component} from 'react'
import { connect } from 'react-redux';
import Inbox from './inbox'
import Starred from './Starred'
import MuiTextField from './MuiTextField'
class PageControl extends Component {
    cunstruct(){ // cunstruct for choosing view file
        // console.log(this.props.selectedMenu);
        switch (this.props.selectedMenu) {
            case 1:
                return <MuiTextField />
                break;
            // case 2:
            //     return <Starred />
            //     break;
            default:
                return <MuiTextField />
        }
    }
    // constructor() {
    //
    // }
    render() {
        return (
            <div>
                {this.cunstruct()}
            </div>
        );
    }
}

// 선택한 메뉴의 값을 props.selectedMenu 로 store에서 가져옴.
// mapStateToProps는 store에 저장된 상태(state)를 Props로 가져오는 함수.
const mapStateToProps = (state) => {
    return {
        selectedMenu: state.MenuManager
    };
}

PageControl = connect(mapStateToProps)(PageControl);

export default PageControl
