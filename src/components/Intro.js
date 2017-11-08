import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// #03A9F4 #C2185B #42A5F5 #C5CAE9 #03A9F4 #00ACC1 #1E88E5

const Intro = () => (
  <div
    style={{
      backgroundColor: '#1E88E5',
      color: '#ffffff',
      textAlign: 'center',
      fontFamily: 'Lobster'
    }}
  >
    <Grid>
      <Row>
        <Col smOffset={2} sm={8} smOffset={2}>
          <h2 style={{ margin: 20 }}>
            KLU World Wide will bring KLUians across the globe under one roof.
          </h2>
          <p>
            <span>KLUWW will go live soon...</span>{' '}
            <span>Register and stay in touch.</span>
          </p>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Intro;
