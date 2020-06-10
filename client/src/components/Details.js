import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

import { Container, Button, Col, Row } from 'reactstrap';

export class Details extends Component {

  state = { 
    loading: true,
    country: [],
  }
  
  static contextType = ThemeContext;

  async componentDidMount () {

    const country = this.props.location.state.country;

    await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(response => response.json())
    .then(data => this.setState({ country: data[0], loading: false }));   
  } 

  render() {

    const { isLigthTheme, light, dark} = this.context;
    const theme = isLigthTheme ? light : dark;

    // assigning it to a varable
    const { country, loading } = this.state;
    
    return (

      <div className="details-section" style={{ background: theme.bg, color: theme.syntax }}>

        <Container>

          <Link to={'/'}>

            <Button className="my-5">&#8592; Back</Button>

          </Link>        
        
        
          { loading || !country ? (
            <h1 className="text-center">Loading...</h1>
          ) : (
            <Row>

              <Col xm="12" sm="12" md="6">
                {console.log(country)}

                <img src={ country.flag } className="img-fluid" alt={country.name}/>

              </Col>

              <Col xm="12" sm="12" md="6"> 
                <Row>
                  <Col xm="12" sm="12" md="6">
                    <div className="left">
                      <h2 className="my-5">{country.name}</h2>
                      <h4>Native Name: {country.nativeName}</h4>
                      <h4>Population: {country.population}</h4>
                      <h4>Region: {country.region}</h4>
                      <h4>Sub Region: {country.subregion}</h4>
                      <h4>Sub Region: {country.subregion}</h4>          
                    </div>
                  </Col>

                  <Col xm="12" sm="12" md="6">
                    <div className="right">
                      <h2 className="mt-5">Top Level Domain: {country.topLevelDomain}</h2>
                      <h4>Currancy: {country.currencies.map(currencies => <span key={currencies.code}>{currencies.name}</span>)}</h4>
                      <h4>Language: {country.languages.map(languages => <span key={languages.name}>{languages.name} </span>)}</h4>
                    </div>   
                  </Col>
                </Row>
                
                <div className="col-footer text-left">
                  <h2 className="mt-5">Border Countries:</h2>
                  {country.borders.map( (borders, index ) => <span key={index} className={`btn isLigthTheme ? btn-light : btn-dark mr-2`}>{borders} </span> )}
                </div>  
              </Col>                             
            </Row>
          )}
        </Container>
      </div>
    )
  }
}
