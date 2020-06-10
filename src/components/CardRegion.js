import React from 'react';

import {
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle
} from 'reactstrap';

export const CardRegion = ({ region }) => (
  <div>
    <Card>
      <CardImg top src={ region.flag} alt="Flag" />
      <CardBody>
      <CardTitle><strong>{region.name}</strong></CardTitle>
      <CardText>Population: {region.population}</CardText>
      <CardText>Region: {region.region}</CardText>
      <CardText>Capital: {region.capital}</CardText>
      </CardBody>
    </Card>
  </div>
)