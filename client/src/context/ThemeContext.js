import React, { createContext, Component } from 'react';

// CREATE CONTEXT
export const ThemeContext = createContext();

// PROVIDER
class ThemeContextProvider extends Component {

   state = {
    isLigthTheme: true,
    light: { syntax: ' hsl(200, 15%, 8%)', ui: 'hsl(0, 0%, 100%)', bg: 'hsl(0, 0%, 98%)'},
    dark: { syntax: 'hsl(0, 0%, 100%)', ui: 'hsl(209, 23%, 22%)', bg: 'hsl(207, 26%, 17%)'}
  };

  toggleTheme = () => {
    this.setState({ isLigthTheme: !this.state.isLigthTheme });
  };

  render() {
    return (
      <ThemeContext.Provider value={{ 
        ...this.state, 
        toggleTheme: this.toggleTheme
      }}>
  
      { this.props.children } 
      </ThemeContext.Provider>
    )
  }  
}

export default ThemeContextProvider;

