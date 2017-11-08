import React from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import ContentMail from 'material-ui/svg-icons/content/mail';
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
      titleStyle={{ fontFamily: 'Ubuntu', fontWeight: 'bold' }}
      iconElementLeft={
        <img
          style={imgStyle}
          src="https://firebasestorage.googleapis.com/v0/b/klu-sky1.appspot.com/o/klulogo.png?alt=media&token=d95f8375-bb8c-4e56-8cbf-0151538fb8e5"
          alt="KLU LOGO"
        />
      }
      //  <FlatButton label="Primary" primary={true} style={{ margin: 10 }} />
      // <RaisedButton label="Contact Us" secondary={true} style={{ margin: 10 }} />
      // #9C27B0 #263238 #FF5722 #424242 #2196F3 #42A5F5 #03A9F4 #00ACC1 #1E88E5

      iconElementRight={
        <IconButton
          hoveredStyle={{ backgroundColor: '#424242' }}
          tooltip="Mail Us"
          target="_blank"
          href="mailto:kluworldwide@gmail.com?cc=reachnitinvenkat@gmail.com"
        >
          <ContentMail />
        </IconButton>

        // <i class="material-icons">mail_outline</i>
        // <RaisedButton
        //   label="Contact us"
        //   primary
        //   buttonStyle={{ backgroundColor: '#263238' }}
        //   style={{ margin: 10 }}
        // />
      }
      style={{ height: 70, backgroundColor: '#1E88E5' }}
      zDepth={2}
    />
    <Intro />
    <NavTabs />
  </div>
);

export default Header;
