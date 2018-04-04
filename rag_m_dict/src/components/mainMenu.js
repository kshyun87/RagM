import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem, makeSelectable} from 'material-ui/List'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchItem } from '../actions';


const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

let SelectableList = makeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends React.Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
        this.props.onClickMenuItem(index);
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
        >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

class MenuExampleSimple extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state={}
    //     // this.handleListItemClick = this.handleListItemClick.bind(this)
    // }
    // handleListItemClick = (text, index) => {
    //     this.props.onClickMenuItem(text);
    //     console.log('clicked' + text + 'index' + index);
    //
    //     this.setState({selectedIndex:index});
    //     console.log('selected index' + this.state.selectedIndex);
    // }
    render(){
        return(
            <div>
                <SelectableList defaultValue={1}>
                  <ListItem primaryText="search Item" value={1} />
                  <ListItem primaryText="준비중" value={2} />
                  <ListItem primaryText="준비중"value={3}  />
                  <ListItem primaryText="준비중" value={4} />
                  <ListItem primaryText="준비중" value={5} />
                </SelectableList>
              </div>
        )
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        onClickMenuItem: (value) => dispatch(searchItem(value))
    }
}

SelectableList = connect(null, mapDispatchToProps)(SelectableList);

export default MenuExampleSimple;
