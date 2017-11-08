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
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import { plusOne, minusOne } from '../actions/actions';

const imgStyle = {
  width: 140,
  height: 280
};

const style = {
  margin: 20
};

// onClick={props.myAct(props.id, props.hits)}

const FeatureItem = props => (
  <div>
    <Card>
      <CardHeader
        title={props.title}
        subtitle={props.subTitle}
        avatar={props.display}
      />
      <CardMedia
        overlay={<CardTitle title={props.title} subtitle={props.subTitle} />}
      >
        <img style={imgStyle} src={props.display} alt="" />
      </CardMedia>
      <CardText>{props.text}</CardText>
      <CardActions>
        <FloatingActionButton
          mini={true}
          style={style}
          onClick={() => {
            props.dispatch(plusOne(props.id));
          }}
        >
          <span>++</span>
        </FloatingActionButton>
        <span
          style={{
            fontWeight: 'bold'
          }}
        >
          {props.hits}
        </span>
        <FloatingActionButton
          mini={true}
          style={style}
          onClick={() => {
            props.dispatch(minusOne(props.id));
          }}
        >
          <span>--</span>
        </FloatingActionButton>
      </CardActions>
    </Card>

    {console.log('this', props.display)}
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    feature: state.find(feature => {
      return feature.id === props.id;
    })
  };
};
// const mapDispatchToProps = dispatch => ({
//   myAct: id => dispatch(myAction(id))
// });

export default connect(mapStateToProps)(FeatureItem);
