import React, {Component} from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class StoryCard extends Component{
  state = {}

  render() {
    return(
      <MuiThemeProvider>
        <div className='storyCard'>
        <Card>
          <CardHeader
            title= {this.props.title}
            subtitle = {this.props.author}
            actAsExpander={true}
            showExpandableButton={true}
            />
            <CardActions>
+              <FlatButton label="URL" style={{backgroundColor : 'lavender'}} onClick={this.props.click}/>
+            </CardActions>
          <CardText expandable='true'>
          Sample Sample Sample
          </CardText>
        </Card>
      </div>
    </MuiThemeProvider>
  );
  }
}

export default StoryCard;
