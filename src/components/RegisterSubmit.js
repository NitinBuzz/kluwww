import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
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
        <IconButton
          tooltip="Click to Register"
          tooltipPosition="bottom-center"
          style={{ marginTop: 26 }}
          onClick={this.handleSubmit}
        >
          <FontIcon
            className="material-icons"
            color="#1E88E5"
            hoverColor="#1565C0"
          >
            send
          </FontIcon>
        </IconButton>
      );
    } else {
      button = (
        <IconButton
          tooltip="Provide Valid Email"
          tooltipPosition="bottom-center"
          disabled
          style={{ marginTop: 26 }}
        >
          <FontIcon className="material-icons" color="#ffffff">
            send
          </FontIcon>
        </IconButton>
      );
    }

    return button;
  }
}
// disabledBackgroundColor="#EF5350"
export default RegisterSubmit;
