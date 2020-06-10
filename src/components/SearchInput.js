import React, { Fragment } from 'react';
import { Input } from 'reactstrap';

export const SearchInput = ({ placeholder, handleChange}) => {  

  return ( 
    <Fragment>
      <Input 
        type="search"
        placeholder={ placeholder } 
        onChange={ handleChange }
        bsSize="lg"
        style={{ height: 40, width: "70%" }}
        />
    </Fragment>
  );
}
