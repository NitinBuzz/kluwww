import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { startRegisterEmail, startPlusOne } from '../actions/actions';
import Thanks from './Thanks';
import RegisterSubmit from './RegisterSubmit';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      done: false,
      acting: false,
      validSubmit: false
    };
  }
  handleChange = e => {
    this.setState({
      email: e.target.value
    });

    if (this.state.email) {
      const regEx = new RegExp(/\S+@\S+\.\S+/);
      //  console.log(this.state.email.match(regEx));
      if (this.state.email.match(regEx)) {
        this.setState({
          validSubmit: true
        });
      } else {
        this.setState({
          validSubmit: false
        });
      }
    }
    this.props.dispatch(startPlusOne());
  };
  handleAddEmail = () => {
    this.setState({
      acting: true
    });
    this.props.dispatch(startRegisterEmail(this.state.email));

    setTimeout(() => {
      this.setState({ acting: false, done: true });
    }, 3000);

    // this.setState({
    //   done: true,
    //   acting: false
    // });

    // Dispatch Action Here
  };
  render() {
    let comp;
    if (this.state.done === true) {
      comp = <Thanks />;
    } else if (this.state.acting === true) {
      comp = (
        <div>
          <Grid>
            <Row>
              <div>
                <Col smOffset={3} sm={6} smOffset={3}>
                  <div style={{ textAlign: 'center' }}>
                    <br />
                    <br />
                    <br />
                    <CircularProgress color="#1565C0" thickness={7} />
                  </div>
                </Col>
              </div>
            </Row>
          </Grid>
        </div>
      );
    } else {
      comp = (
        <div>
          <br />
          <br />
          <Grid>
            <Row>
              <Col xsOffset={2} xs={8} xsOffset={2}>
                <Row>
                  <Col xs={8}>
                    <TextField
                      autocomplete="off"
                      hintText="here"
                      hintStyle={{ color: '#9E9E9E', fontFamily: 'Ubuntu' }}
                      floatingLabelText="Enter your Email"
                      floatingLabelStyle={{
                        color: '#1565C0',
                        fontFamily: 'Ubuntu'
                      }}
                      floatingLabelFixed
                      underlineStyle={{ borderColor: '#1565C0' }}
                      name="email"
                      fullWidth
                      onChange={event => {
                        this.handleChange(event);
                      }}
                    />
                  </Col>
                  <Col xsOffset={1} xs={3}>
                    <RegisterSubmit
                      vaild={this.state.validSubmit}
                      email={this.state.email}
                      submitEmail={this.handleAddEmail}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
          <br />
        </div>
      );
    }
    return comp;
  }
}

export default connect()(RegisterForm);
