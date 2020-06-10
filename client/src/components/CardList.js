import React, { Fragment } from 'react';
import { CardCountry } from './CardCountry';
import { CardRegion } from './CardRegion';

import { Row, Col, Spinner } from 'reactstrap';

export const CardList = ({ country, region, loading }) => (
  <Fragment>
    <Row className="mt-5">

      {console.log(country)}

      {loading ? <Spinner/> 
        : 
      (country.map( (country, index) =>
        <Col md="3" key={index}>
          <CardCountry country={ country }/>        
        </Col>
      ))}  

      {region.map((region, index) => <Col md="3" key={index}><CardRegion region={ region }/></Col>)}
      
    </Row>
  </Fragment>
  
)