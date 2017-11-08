import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import FeatureItem from './Feature';
import RegisterForm from './Register';
import Footer from './Footer';

const DashBoard = props => (
  <div>
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
          <br />
        </Row>
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
