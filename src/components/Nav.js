import React, { Component } from 'react';
import {
  Container,
  Row,
  Col  
} from 'reactstrap';

import { ThemeContext } from '../context/ThemeContext';

class AppNav extends Component {

  static contextType = ThemeContext;

  render() {

    const { isLigthTheme, light, dark} = this.context;

    const { toggleTheme } = this.context;

    const theme = isLigthTheme ? light : dark;    

    return (      
      <div style={{ background: theme.ui, color: theme.syntax }}>
        <Container>

          <Row className="py-4">
            <Col xs="6">
              <h2>Where in the world?</h2>
            </Col>
    
            <Col xs="6">
              
              { isLigthTheme ? 
                <h3 className="text-right" onClick={ toggleTheme }>
                  <span className="mr-2">☼</span>Light Mode</h3>
                : 
                <h3 className="text-right" onClick={ toggleTheme }>
                  <span className="mr-2">☾</span>Dark Mode</h3>
              }
            </Col>
          </Row>

        </Container>
      </div>      
    );
  }  
}

export default AppNav;