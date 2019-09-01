import React from 'react';
import PropTypes from 'prop-types';
const TotalPrice = ({income, outcome}) => {
  return (
    <div className='d-flex justify-content-between align-items-center p-3 m-1 bg-dark total-price' 
          style={{width: '250px',height: '80px', color: '#fff'}}>
        <span><label>收入</label><span className='ml-1 income'>{income}</span></span>
        <span><label>支出</label><span className='ml-1 outcome'>{outcome}</span></span>
    </div>
  );
};
TotalPrice.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
};
TotalPrice.defaultProps = {
  income: 0,
  outcome: 0
};
export default TotalPrice;