import React from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { startPlusOne, startMinusOne } from '../actions/actions';

const imgStyle = {
  width: 140,
  height: 220
};

const style = {
  margin: 0
};

// onClick={props.myAct(props.id, props.hits)}
// #F44336 #1565C0
const FeatureItem = props => (
  <div>
    <Card zDepth={2}>
      <CardHeader
        title={props.title}
        titleStyle={{ fontFamily: 'Ubuntu' }}
        subtitle={props.subTitle}
        subtitleStyle={{ fontFamily: 'Ubuntu' }}
        style={{ fontWeight: 'bold' }}
        titleColor="#1565C0"
        avatar={props.display}
      />
      <CardMedia
        overlay={
          <CardTitle
            title={props.title}
            titleStyle={{ fontFamily: 'Ubuntu' }}
            subtitle={props.subTitle}
            subtitleStyle={{ fontFamily: 'Ubuntu' }}
          />
        }
      >
        <img style={imgStyle} src={props.display} alt="" />
      </CardMedia>
      <CardText
        style={{ fontWeight: '', fontFamily: 'Ubuntu', fontSize: '110%' }}
      >
        {props.text}
      </CardText>
      <CardActions>
        <FloatingActionButton
          mini
          backgroundColor="#1E88E5"
          style={style}
          onClick={() => {
            props.dispatch(startPlusOne(props.id));
          }}
        >
          <span>++</span>
        </FloatingActionButton>

        <FloatingActionButton
          mini
          disabled
          disabledColor="white"
          style={{ margin: 0 }}
        >
          <span
            style={{
              fontWeight: '',
              fontSize: '120%',
              color: 'black'
            }}
          >
            {props.hits}
          </span>
        </FloatingActionButton>
        <FloatingActionButton
          mini
          backgroundColor="#1E88E5"
          style={style}
          onClick={() => {
            props.dispatch(startMinusOne(props.id));
          }}
        >
          <span>--</span>
        </FloatingActionButton>
      </CardActions>
    </Card>
  </div>
);

const mapStateToProps = (state, props) => ({
  feature: state.find(feature => feature.id === props.id)
});
// const mapDispatchToProps = dispatch => ({
//   myAct: id => dispatch(myAction(id))
// });

export default connect(mapStateToProps)(FeatureItem);
