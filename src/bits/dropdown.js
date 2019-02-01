import React from 'react';

const dropdown = (props) => {
  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <select onChange={onChange} value={props.value}>
      {props.options.map((option, i) => {
        let value = props.useIndexAsValue ? i : option;
        return (
          <option value={value} key={i}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default dropdown;
