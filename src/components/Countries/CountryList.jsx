// src/components/Countries/CountryList.js

import PropTypes from "prop-types"; 
import React from "react";
import '../Style/CountryList.css'


const CountryList = ({ countries, onEdit, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <tr key={index}>
            <td>{country.name}</td>
            <td>{country.code}</td>
            <td>{country.description}</td>
            <td>
              <button onClick={() => onEdit(index)}>Edit</button>
              <button onClick={() => onDelete(index)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
CountryList.propTypes = {
    countries: PropTypes.array.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

export default CountryList;
