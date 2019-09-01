import React from 'react';
import {shallow} from 'enzyme';
import TotalPrice from '../TotalPrice';
const props = {
  income: 1000,
  outcome: 2000
};

describe('test Total price', () => {
  it('it should render correct income & outcome', () => {
    const wrapper = shallow(<TotalPrice {...props}/>);
    expect(wrapper.find('.total-price .income').text() * 1).toEqual(1000);
    expect(wrapper.find('.total-price .outcome').text() * 1).toEqual(2000);
  });
}); 