import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterSubmit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let button;
    if (this.props.vaild) {
      button = (
        <RaisedButton
          label="Register"
          primary
          buttonStyle={{ backgroundColor: '#1E88E5' }}
          style={{ margin: 16 }}
          onClick={() => {
            console.log(`okaies`);
          }}
        />
      );
    } else {
      button = (
        <RaisedButton
          label="Register"
          disabled
          style={{ margin: 16 }}
          onClick={() => {
            console.log(`okaies`);
          }}
        />
      );
    }
    <div>{console.log(this.props)}</div>;
    return button;
  }
}
// disabledBackgroundColor="#EF5350"
export default RegisterSubmit;
