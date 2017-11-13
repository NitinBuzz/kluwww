import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

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
        <FontIcon
          className="material-icons"
          color="#1E88E5"
          hoverColor="#1565C0"
          style={{ marginTop: 26 }}
          onClick={this.handleSubmit}
        >
          send
        </FontIcon>
      );
    } else {
      button = (
        <FontIcon
          className="material-icons"
          color="#ffffff"
          style={{ marginTop: 26 }}
        >
          send
        </FontIcon>
      );
    }

    return button;
  }
}
// disabledBackgroundColor="#EF5350"
export default RegisterSubmit;
