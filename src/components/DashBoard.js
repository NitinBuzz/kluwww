import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import FeatureItem from './Feature';
import RegisterForm from './Register';
import Footer from './Footer';

const DashBoard = props => (
  <div style={{ backgroundColor: '#E0E0E0' }}>
    <Grid>
      <Row>
        {console.log(props)}
        {console.log(typeof props.features)}
        <Row>
          <br />
          <br />
          <RegisterForm />
          <br />
          <br />
        </Row>
        <Row>
          <Col smOffset={3} sm={6} smOffset={3}>
            <h2
              style={{
                textAlign: 'center',
                fontFamily: 'Ubuntu',
                color: '#263238'
              }}
            >
              Top 6 features of <span style={{ color: '#8E24AA' }}>K</span>
              <span style={{ color: '#43A047' }}>L</span>
              <span style={{ color: '#FDD835' }}>U</span>
              <span style={{ color: '#1565C0' }}>W</span>
              <span style={{ color: '#F4511E' }}>W</span>
            </h2>
          </Col>
        </Row>
        <br />

        {props.features.map((feature, index) => (
          <Col md={6}>
            <FeatureItem key={feature.id} {...feature} />
            <br />
          </Col>
        ))}
      </Row>
    </Grid>

    <Footer />
  </div>
);

const mapStateToProps = state => {
  return {
    // state
    features: state
  };
};

export default connect(mapStateToProps)(DashBoard);
