import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Intro = () => (
  <div
    style={{
      backgroundColor: '#1388d5',
      color: '#ffffff',
      textAlign: 'center'
    }}
  >
    <Grid>
      <Row>
        <Col smOffset={2} sm={8} smOffset={2}>
          <h2 style={{ margin: 20 }}>
            KLU World Wide will bring wolrd KLU'ians under one roof.
          </h2>
          <p>KLUWW will go live soon... Register and stay in touch.</p>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Intro;
