import React from 'react';

const dropdown = (props) => {
  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <select onChange={onChange} value={props.value}>
      {props.options.map((option, i) => {
        return (
          <option value={option} key={i}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default dropdown;
