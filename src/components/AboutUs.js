import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import { Grid, Row, Col } from 'react-bootstrap';
import Line from './Line';

// import 'vis/dist/vis-network.min.css';

const AboutUs = () => (
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
              textAlign: 'center'
            }}
            zDepth={5}
            rounded={false}
          >
            <br />
            <Line />
            <div
              style={{
                margin: 10,
                marginTop: 22,
                fontFamily: 'Ubuntu',
                fontSize: '120%'
              }}
            >
              It all started with a thought on the night of 19th Aug 2017, that
              KLU'inas must have an exclusive platform to prosper togeather.
              From then we started building this brick by brick, wokring
              day-night to progess.
            </div>
            <Line />

            <div
              style={{
                margin: 10,
                marginTop: 22,
                fontFamily: 'Ubuntu',
                fontSize: '120%'
              }}
            >
              Presently KLUWW is with KLU for review. Weither they officialy
              support it ot not, KLUWW won't go down. We are on fire to add this
              feather into the crown of KLU.
            </div>
            <Line />
            <div
              style={{
                margin: 10,
                marginTop: 22,
                fontFamily: 'Ubuntu',
                fontWeight: 'bold',
                fontSize: '120%'
              }}
            >
              Made with{' '}
              <span style={{}}>
                {' '}
                <FontIcon
                  className="material-icons"
                  color="#ffffff"
                  hoverColor="#D32F2F"
                  style={{}}
                >
                  favorite
                </FontIcon>
              </span>{' '}
              by{' '}
              <span color="#ffffff">
                <a
                  target="_blank"
                  href="https://nitinbuzz.github.io/nitin.github.io/Index.html"
                  style={{ color: '#ffffff' }}
                >
                  Nitin
                </a>
              </span>
              .
            </div>
            <Line />
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

export default AboutUs;
