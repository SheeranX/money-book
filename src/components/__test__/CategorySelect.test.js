import React from 'react';
import {mount} from 'enzyme';
import CategorySelect from '../CategorySelect';
import Ionicon from 'react-ionicons';

export const categories = [
  {
    id: 1,
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  {
    id: 2,
    name: '理财',
    type: 'outcome',
    iconName: 'logo-yen'
  },
  {
    id: 3,
    name: '理财',
    type: 'income',
    iconName: 'logo-yen'
  }
];

let props = {
  categories,
  onSelectCategory: jest.fn()
};
let props_category = {
  categories,
  onSelectCategory: jest.fn(),
  selectedCategory: categories[0]
};
describe('test categroy select', () => {
  it('renders the correct items', () => {
    const wrapper = mount(<CategorySelect {...props}/>);
    expect(wrapper.find('.categories-item').length).toEqual(categories.length);
    expect(wrapper.find('.categories-item.active').length).toEqual(0);
    const firstIcon = wrapper.find('.categories-item').first().find(Ionicon);
    expect(firstIcon.length).toEqual(1);
    expect(firstIcon.props().icon).toEqual(categories[0].iconName);
  });
  it('render the category with highlight', () => {
    const wrapper = mount(<CategorySelect {...props_category}/>);
    expect(wrapper.find('.categories-item').first().hasClass('active')).toEqual(true);
  });
  it('should trigger the click', () => {
    const wrapper = mount(<CategorySelect {...props_category}/>);
    wrapper.find('.categories-item').at(1).simulate('click');
    expect(wrapper.find('.categories-item').at(1).hasClass('active')).toEqual(true);
    expect(wrapper.find('.categories-item').first().hasClass('active')).toEqual(false);
    expect(props_category.onSelectCategory).toHaveBeenCalledWith(categories[1]);
  });
}); 