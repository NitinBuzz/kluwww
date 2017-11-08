import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import { withRouter } from 'react-router-dom';

class NavTabs extends Component {
  handleCallToRouter = value => {
    this.props.history.push(value);
  };

  render() {
    return (
      <Tabs
        value={this.props.history.location.pathname}
        onChange={this.handleCallToRouter}
        style={{
          margin: 0,
          backgroundColor: '#E1F5FE'
        }}
      >
        <Tab label="Home" value="" />
        <Tab label="About Us" value="/about" />
      </Tabs>
    );
  }
}

export default withRouter(NavTabs);
