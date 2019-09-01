import React from 'react';
import Ionicon from 'react-ionicons';
const CreateBtn = ({createItem}) => {
  return (
    <React.Fragment>
      <button className='btn btn-primary' onClick={() => {createItem()}}><Ionicon icon="ios-add" fontSize='30px' color={'#fff'}></Ionicon> 创建一条记账记录</button>
    </React.Fragment>
  );
}
export default CreateBtn;