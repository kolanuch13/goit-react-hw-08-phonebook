import React from "react";
// ====================================
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/contacts/selectors";
import { setFilter } from "redux/contacts/contactSlice"
import {
    Input,
    Heading,
} from '@chakra-ui/react';



const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  }
    
  return (
    <div>
      <Heading>Search by Name</Heading>
      <Input
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

export default Filter;
