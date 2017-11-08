import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class Thanks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div>
        <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default Thanks;
