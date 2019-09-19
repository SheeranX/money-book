import React from 'react';
import {mount} from 'enzyme';
import MonthPicker from '../MonthPicker';
import ReactDOM from 'react-dom';
const props = {
  year: '2019',
  month: '9'
};
let wrapper;
describe('test the MonthPicker', () => {
  beforeEach(() => {
    wrapper = mount(<MonthPicker {...props}/>);
  });
  it('should render right date', () => {
    let text = wrapper.find('.dropdown-toggle').first().text();
    expect(text).toEqual('2019-09');
  });
  it('should render the date panel', () => {
    expect(wrapper.find('.select-panel-content').length).toEqual(0);
  });
  // 测试点击空白处关闭方法是否有效
  it('should close the modal', () => {
    let eventMap = {};
    document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    const wrapper = mount(<MonthPicker {...props}/>);
    wrapper.find('.dropdown-toggle').simulate('click');
    expect(wrapper.state('isShow')).toEqual(true);
    eventMap.click({
      target: ReactDOM.findDOMNode(wrapper.instance())
    });
    eventMap.click({
      target: document
    });
  });
});