import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-bootstrap';
import Thanks from './Thanks';
import RegisterSubmit from './RegisterSubmit';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: undefined,
      done: 0,
      validSubmit: false
    };
  }
  handleChange = e => {
    this.setState({
      email: e.target.value
    });
    console.log(typeof this.state.email);
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
    // this.state.email.contains(
    //   '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
    // )
    //   ? this.setState({
    //     validSubmit: true
    //   })
    //   : null;
  };
  handleAddEmail = () => {
    console.log(this.state.email);
    // Dispatch Action Here
    this.setState({
      done: 1
    });
    // document.getElementsByName('email').value = '';
    // console.log(this.refs);
    // ReactDOM.findDOMNode(this.refs.email).value = "";
    //  this.refs.email.value = '';
  };
  render() {
    let comp;
    if (this.state.done === 1) {
      comp = <Thanks />;
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
                      hintText="eg: kluworldwide@gmail.com"
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
                  <Col xs={4}>
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

export default RegisterForm;
