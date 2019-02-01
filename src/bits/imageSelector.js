import React from 'react';
import Dropdown from './dropdown.js';
import bannerBgImages from '../constants/bannerBgImages.js';

const imageSelector = (props) => {
  return (
    <Dropdown value={props.value} onChange={props.onChange} options={bannerBgImages}/>
  );
};

export default imageSelector;
