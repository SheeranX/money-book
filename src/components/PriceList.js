import React from 'react';
import Ionicon from 'react-ionicons';
import PropTypes from 'prop-types';
// 因为没涉及数据的state和生命周期，所以使用的是函数式组件
const PriceList = ({items, onModifyItem, onDeleteItem}) => {
  return (
    <ul className='list-group'>
      {items.map((item,index) => {
        return (   
        <li className='list-group-item d-flex justify-content-between p-3 align-content-center' key={index}>
          <p>
            <Ionicon className='p-2 rounded' fontSize='30px' style={{background:'#007bff'}} color={'#fff'} icon={item.category.icon}/>
          </p>
          <span className=''>{item.title}</span>
          <span>{item.category.type === 'income' ? '+' : '-'}{item.price}</span>
          <span>{item.date}</span>
          <div className='d-flex'>
            <p onClick={() => {onModifyItem(item)}} className='p-1'>
              <Ionicon className='rounded-circle p-1' fontSize='30px' style={{background:'#007bff'}} color={'#fff'} icon={'ios-create-outline'}/>
            </p>
            <p onClick={() => {onDeleteItem(item)}} className='p-1'>
              <Ionicon className='rounded-circle p-1' fontSize='30px' style={{background:'#dc3545'}} color={'#fff'} icon={'ios-trash-outline'}/>
            </p>
          </div>
        </li>)
      })}
    </ul>
  );
};
// propsType用于验证props，ts interface的思想
PriceList.propTypes = {
  items:PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onModifyItem: PropTypes.func.isRequired
};
// 用于提供默认值，个人局觉得react组件的props校验没有vue简洁
PriceList.defaultProps = {
  onDeleteItem: () => {},
  onModifyItem: () => {}
};
export default PriceList;