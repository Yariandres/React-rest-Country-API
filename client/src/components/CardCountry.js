import React from 'react';
import { Link } from 'react-router-dom';

import {
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle
} from 'reactstrap';

export const CardCountry = ({ country }) => (

  <Link to={{ 
    pathname: `/details/${country.name}`,
    state: { country: country.name}    
  }}>

    <Card className="mb-4">
      <CardImg top src={country.flag} alt="Flag" style={{ height: "150px" }} />
      <CardBody>
        <CardTitle><strong>{country.name}</strong></CardTitle>
        <CardText>Population: {country.population}</CardText>
        <CardText>Region: {country.region}</CardText>
        <CardText>Capital: {country.capital}</CardText>
      </CardBody>
    </Card>
  </Link>

)