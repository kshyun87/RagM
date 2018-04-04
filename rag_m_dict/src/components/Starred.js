import React from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper'

const style = {
  height: 300,
  width: 200,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const cardStyle = {
  height: 500,
  width: "80%",
  margin: 20,

};
const header = {
    fontSize:'20px',
    textAlign:'center',
    // paddingTop:'10px'
}
class Starred extends React.Component {
    // constructor() {
    //
    // }
    render(){
        return(
            <div>
                <h1>TEST Starred</h1>
                <Card style={cardStyle}>
                    <div>
                        <Paper style={style}zDepth={1}>
                            <div style={header}>Test Text</div>
                            <div>Test Text</div>
                            <div>Test Text</div>
                        </Paper>
                        <Paper style={style}zDepth={1}>
                            <div>Test Text</div>
                            <div>Test Text</div>
                            <div>Test Text</div>
                            <CardActions>
                                <FlatButton label="Action1" primary={true} />
                            </CardActions>
                        </Paper>
                        <Paper style={style}zDepth={1}>
                            <div>Test Text</div>
                            <div>Test Text</div>
                            <div>Test Text</div>
                            <CardActions>
                                <FlatButton label="Action1" primary={true} />
                            </CardActions>
                        </Paper>
                    </div>
                </Card>

            </div>
        )
    }
}

export default Starred
