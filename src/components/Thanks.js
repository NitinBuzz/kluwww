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
          bodyStyle={{
            backgroundColor: '#1E88E5',
            fontFamily: 'Ubuntu',
            fontWeight: '',
            fontSize: '110%'
          }}
          message="You are registered with us, Cheers."
          autoHideDuration={6000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default Thanks;
