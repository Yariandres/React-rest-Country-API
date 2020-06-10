import React from 'react';
import { Input, FormGroup } from 'reactstrap';

export const SelectInput = ({ handleChange }) => {
  return (
    <FormGroup>
      <Input 
        type="select" 
        onChange={ handleChange }
        style={{ height: 40, width: "50%" }}
      >  
        <option default>Filter by region...</option>       
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>        
        <option>Europe</option>
        <option>Oceania</option>
      </Input>
    </FormGroup>
  
  )
}

