import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router-dom';

// #42A5F5 #424242 #4FC3F7 #039BE5 #00ACC1 #42A5F5 #1E88E5 #90CAF9

class NavTabs extends Component {
  handleCallToRouter = value => {
    this.props.history.push(value);
  };

  render() {
    return (
      <Tabs
        value={this.props.history.location.pathname}
        inkBarStyle={{ backgroundColor: '#1E88E5' }}
        onChange={this.handleCallToRouter}
        style={{
          margin: 0
        }}
      >
        <Tab
          label="Home"
          value="/"
          style={{
            margin: 0,
            backgroundColor: '#ffffff',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
            borderColor: '#1E88E5',
            color: '#1565C0',
            borderLeft: 0,
            borderTop: 0,
            borderBottom: 0,
            border: 1,
            borderStyle: 'solid'
          }}
        />

        <Tab
          label="About Us"
          value="/about"
          style={{
            margin: 0,
            backgroundColor: '#ffffff',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
            color: '#1565C0',
            borderColor: '#1E88E5',
            borderLeft: 0,
            borderTop: 0,
            borderBottom: 0,
            border: 1,
            borderStyle: 'solid'
          }}
        />
        <Tab
          label="Contact Us"
          value="/not"
          style={{
            margin: 0,
            backgroundColor: '#ffffff',
            fontFamily: 'Ubuntu',
            fontWeight: 'bold',
            color: '#1565C0',
            border: 0,
            borderStyle: 'ridge'
          }}
        />
      </Tabs>
    );
  }
}

export default withRouter(NavTabs);
