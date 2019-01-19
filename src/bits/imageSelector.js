import React from 'react';
import bannerBgImages from '../constants/bannerBgImages.js';

const imageSelector = (props) => {
  const onChange = (e) => {
    props.change(e.target.value);
  };

  return (
    <select onChange={onChange} value={props.current}>
      {bannerBgImages.map((image, i) => {
        return (
          <option value={image} key={i}>
            {image}
          </option>
        );
      })}
    </select>
  );
};

export default imageSelector;
