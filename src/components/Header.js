import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
// import IconButton from 'material-ui/IconButton';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { NavLink } from 'react-router-dom';
import NavTabs from './Tabs';
import Intro from './Intro';

const imgStyle = {
  width: 40,
  height: 40
};

const Header = () => (
  <div>
    <AppBar
      title="KLU World Wide"
      iconElementLeft={
        <img
          style={imgStyle}
          src="https://www.kluniversity.in/images/klulogo.png"
          alt="KLU LOGO"
        />
      }
      style={{ height: 80 }}
      iconElementRight={
        <RaisedButton
          label="Contact Us"
          secondary={true}
          style={{ margin: 16 }}
        />
      }
    />
    <Intro />
    <NavTabs />
  </div>
);

export default Header;
