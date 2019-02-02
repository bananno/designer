import React from 'react';
import Dropdown from './dropdown.js';
import bannerBgImages from '../constants/bannerBgImages.js';

const imageSelector = (props) => {
  let options = ['none'].concat(bannerBgImages);
  return (
    <Dropdown value={props.value} onChange={props.onChange} options={options}/>
  );
};

export default imageSelector;
