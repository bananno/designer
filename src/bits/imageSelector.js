import React from 'react';
import bannerBgImages from '../constants/bannerBgImages.js';

const imageSelector = (props) => {
  return (
    <select>
      {bannerBgImages.map((image, i) => {
        return (
          <option key={i}>
            {image}
          </option>
        );
      })}
    </select>
  );
};

export default imageSelector;
