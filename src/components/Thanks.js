import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import FontIcon from 'material-ui/FontIcon';
import { Grid, Row, Col } from 'react-bootstrap';

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
        <Grid>
          <Row>
            <div>
              <Col smOffset={3} sm={6} smOffset={3}>
                <div style={{ textAlign: 'center' }}>
                  <br />
                  <br />
                  <br />
                  <FontIcon
                    className="material-icons"
                    color="#1E88E5"
                    hoverColor="#D32F2F"
                    style={{}}
                  >
                    favorite
                  </FontIcon>
                </div>
              </Col>
            </div>
          </Row>
        </Grid>
        <div>
          <Snackbar
            open={this.state.open}
            bodyStyle={{
              backgroundColor: '#1565C0',
              fontFamily: 'Ubuntu',
              fontSize: '110%',
              textAlign: 'center'
            }}
            message="You are registered with us, Cheers."
            autoHideDuration={6000}
            onRequestClose={this.handleRequestClose}
          />
        </div>
      </div>
    );
  }
}

export default Thanks;
