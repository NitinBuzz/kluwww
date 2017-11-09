import React from 'react';
import Paper from 'material-ui/Paper';
import { Grid, Row, Col } from 'react-bootstrap';

const Contact = () => (
  <div style={{ backgroundColor: '#E0E0E0' }}>
    <Grid>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col smOffset={1} sm={10} smOffset={1}>
          <Paper
            style={{
              backgroundColor: '#1E88E5',
              color: '#ffffff',
              textAlign: 'center',
              margin: 10,
              fontFamily: 'Ubuntu',
              fontSize: '120%'
            }}
            zDepth={5}
            rounded={false}
          >
            <br />
            <br />
            <br />
            <div style={{ paddingBottom: 6 }}>We are on </div>
            <div>
              <a
                target="_blank"
                href="https://www.facebook.com/KLUWorldWide/"
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  padding: 16
                }}
              >
                Facebook
              </a>
              -
              <a
                target="_blank"
                href="https://twitter.com/kluworldwide"
                style={{ color: '#ffffff', fontWeight: 'bold', padding: 16 }}
              >
                Twitter
              </a>
              -
              <a
                target="_blank"
                href="mailto:kluworldwide@gmail.com?cc=reachnitinvenkat@gmail.com"
                style={{ color: '#ffffff', fontWeight: 'bold', padding: 16 }}
              >
                GMail
              </a>
            </div>
            <br />
            <br />
            <br />
          </Paper>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
    </Grid>
  </div>
);

export default Contact;
