import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <div
    style={{
      margin: 0,
      marginTop: 0,
      padding: 0,
      textAlign: 'center',
      color: '#9E9E9E',
      backgroundColor: '#212121',
      fontFamily: 'Roboto',
      fontSize: '100%'
    }}
  >
    <Grid>
      <br />
      <br />
      <br />
      <Row>
        <Col smOffset={2} sm={8} smOffset={2}>
          <div>
            Hand crafted with love by{' '}
            <a target="_blank" href="https://nitinbuzz.online/">
              <span style={{ color: '#E0E0E0' }}>Nitin </span>
            </a>
            and some
          </div>
          awesome contributors.
          <br />
          <br />
          <div>
            <a target="_blank" href="https://github.com/NitinBuzz/kluwww">
              <img
                src="https://image.flaticon.com/icons/svg/25/25231.svg"
                alt="Git"
                height="20"
                width="20"
              />
            </a>
          </div>
          <br />
          <br />
          Thank you to all the supports, it means a lot.
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </Grid>
  </div>
);

export default Footer;
