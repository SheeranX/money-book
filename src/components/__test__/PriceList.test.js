import React from 'react';
import {shallow} from 'enzyme';
import PriceList from '../PriceList';
import {items} from '../../container/Home';
import Ionicon from 'react-ionicons';
const props = {
  items: items,
  onDeleteItem: jest.fn(), // 模拟点击事件
  onModifyItem: jest.fn()
};

let wrapper;
describe('test priceList component', () => {
  // 可以等待异步动作完成再触发
  beforeEach(() => {
    wrapper = shallow(<PriceList {...props}/>);
  });
  // snapshot
  it('should render the component to snapshots', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // 内容条目是否正确渲染
  it('should render the right list items', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(props.items.length);
  });
  // 图标是否正确渲染
  it('should render the right ionicon', () => {
    let icon = wrapper.find('.list-group-item').first().find(Ionicon);
    expect(icon.first().props().icon).toEqual(props.items[0].category['icon']);
  });
  // 事件是否正确触发
  it('should trigger the right click event', () => {
    const firstItem = wrapper.find('.list-group-item').first();
    firstItem.find('.operate').find('p').first().simulate('click');
    expect(props.onModifyItem).toHaveBeenCalledWith(props.items[0]);
  });
});