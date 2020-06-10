import React, { Component } from 'react';
import { 
  Container, 
  Row, 
  Col,
  FormGroup,
} from 'reactstrap';

import { ThemeContext } from '../context/ThemeContext';
import { SearchInput } from './SearchInput';
import { SelectInput }  from './SelectInput';
import { CardList } from './CardList';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      countries: [],
      searchField: '',
      loading: true
    };
  }

  static contextType = ThemeContext;

  async componentDidMount () {
    await fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => this.setState({ countries: data, loading: false }));      
  }

  handleChange = e => {
    this.setState({ 
      searchField: e.target.value
    })
  }

  render() {

    const { isLigthTheme, light, dark} = this.context;
    const theme = isLigthTheme ? light : dark;

    const { countries, searchField, loading } = this.state;

    const filterCoutries = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()));
    const filterRegion = countries.filter(country => country.region.toLowerCase().includes(searchField.toLowerCase()));    

    return (
      <div className="home py-5" style={{ background: theme.bg, color: theme.syntax }}>      
        <Container>
          <Row>
            <Col xs="6">
              <FormGroup> 
                <SearchInput 
                  placeholder="Search for a country..."
                  handleChange={ this.handleChange }
                  className="search-input"
                />
              </FormGroup>
            </Col>


            <Col xs="6">
              <FormGroup>
                  <SelectInput handleChange={ this.handleChange }/>
              </FormGroup>
            </Col>
          </Row>

          <CardList country={ filterCoutries } region={ filterRegion } loading={ loading }/>
        </Container>  
      </div>
      
    )
  }
}

export default Home;
