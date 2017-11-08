import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Grid, Row, Col } from 'react-bootstrap';

const RegisterForm = () => (
  <div>
    <Grid>
      <Row>
        <Col smOffset={2} sm={8} smOffset={2}>
          <Row>
            <Col sm={8}>
              <TextField
                hintText="kluworldwide@gmail.com"
                floatingLabelText="Enter your Email"
                floatingLabelFixed={true}
                fullWidth={true}
              />
            </Col>
            <Col sm={4}>
              <RaisedButton
                label="Register"
                primary={true}
                style={{ margin: 16 }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default RegisterForm;
