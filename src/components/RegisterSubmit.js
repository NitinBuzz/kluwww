import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class RegisterSubmit extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = () => {
    this.props.submitEmail();
  };
  render() {
    let button;
    if (this.props.vaild) {
      button = (
        <RaisedButton
          className="pull-right"
          label="Register"
          primary
          buttonStyle={{ backgroundColor: '#1E88E5' }}
          style={{ marginTop: 16, marginLeft: 30 }}
          onClick={this.handleSubmit}
        />
      );
    } else {
      button = (
        <RaisedButton
          className="pull-right"
          label="Register"
          disabled
          style={{ marginTop: 16, marginLeft: 30 }}
          onClick={() => {
            console.log(`okaies`);
          }}
        />
      );
    }

    return button;
  }
}
// disabledBackgroundColor="#EF5350"
export default RegisterSubmit;
