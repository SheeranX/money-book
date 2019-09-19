import React from 'react';
import {mount} from 'enzyme';
import Home from '../Home';
import MonthPicker from '../../components/MonthPicker';
import PriceList from '../../components/PriceList';
import TabView from '../../components/TabView';
import TotalPrice from '../../components/TotalPrice';
import CreateBtn from '../../components/CreateBtn';
import {LIST_VIEW, getCurrentDate, CHART_VIEW} from '../../util';

let wrapper;
describe('test home page', () => {
  beforeEach(() => {
    wrapper = mount(<Home/>);
  });
  it('should render the default layout', () => {
    expect(wrapper.find(PriceList).length).toEqual(1);
    expect(wrapper.find(TabView).length).toEqual(1);
    expect(wrapper.find(TotalPrice).length).toEqual(1);
    expect(wrapper.find(CreateBtn).length).toEqual(1);
    expect(wrapper.find(MonthPicker).length).toEqual(1);
  });
});