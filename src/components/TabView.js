import React from 'react';
// import Ionicon from 'react-ionicons';
// import PropTypes from 'prop-types';
import {LIST_VIEW, CHART_VIEW} from '../util';
const currentClass = (activeClass, currentClass) => {
  return activeClass === currentClass ? 'nav-link active' : 'nav-link';
};
const TabView = ({activeClass, changeTab}) => {
 return (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a 
        className={currentClass(activeClass, LIST_VIEW)} 
        href="/" 
        onClick={(e) => {changeTab(LIST_VIEW);e.preventDefault();}}
      >列表模式</a>
    </li>
    <li className="nav-item">
      <a 
        className={currentClass(activeClass, CHART_VIEW)} 
        href="/"
        onClick={(e) => {e.preventDefault();changeTab(CHART_VIEW)}}
      >图表模式</a>
    </li>
  </ul>
 );
}

export default TabView;