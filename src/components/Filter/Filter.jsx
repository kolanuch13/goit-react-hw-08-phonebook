import React from "react";
// ====================================
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "redux/contacts/selectors";
import { setFilter } from "redux/contacts/contactSlice"
import css from './Filter.module.css';


const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  }
    
  return (
    <div className={css.filterWrapper}>
      <span>Search by Name</span>
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.filterInput}
      />
    </div>
  );
}

export default Filter;
