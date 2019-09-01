import React from 'react';
import MonthPicker from '../components/MonthPicker';
import PriceList from '../components/PriceList';
import TabView from '../components/TabView';
import TotalPrice from '../components/TotalPrice';
import CreateBtn from '../components/CreateBtn';
import {LIST_VIEW, getCurrentDate, CHART_VIEW} from '../util';
class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      active: LIST_VIEW,
      list: [{
        id: '1',
        title: 'react',
        price: 200,
        income: 200,
        outcome: 400,
        date: '2019-01-01',
        category: {
          id: 1,
          name: '旅行',
          type: 'outcome',
          icon: 'ios-plane'
        }
      }]
    };
    this.handleCreateItem = this.handleCreateItem.bind(this);
  }
  calTotalPrice(arr) {
    let _outcome = arr.reduce((total, item) => {
      return total + item.outcome;
    }, 0);
    let _income = arr.reduce((total, item) => {
      return total + item.income;
    }, 0);
    return {
      outcome: _outcome,
      income: _income
    }
  }
  handleCreateItem () {
    console.log('handleCreateItem');
  }
  changeTab = (e) => {
    this.setState({active: e})
  }
  handleDeleteItem = (e) => {
    alert(e.id);
  }
  handleodifyItem = (e) => {
    alert(e.id);
  }
  render() {
    let {date, active, list} = this.state;
    const _date = getCurrentDate(date);
    return (
      <React.Fragment>
        <div className='d-flex bg-dark p-4'>
          <div className='col-6 mt-4'>
            <span className='text-white'>选择日期</span>
            <MonthPicker year={
              _date.year
            } month={
              _date.month
            }></MonthPicker>
          </div>
          <div className='col-6'>
            <TotalPrice income={this.calTotalPrice(list).income} outcome={this.calTotalPrice(list).outcome}/>
          </div>
        </div>
        <div className='my-3'>
          <TabView activeClass={this.state.active} changeTab={this.changeTab}/>
        </div>
        <div className='text-center pb-2'>
          <CreateBtn createItem={this.handleCreateItem}/>
        </div>
        {
          active === LIST_VIEW && <PriceList items={this.state.list} onDeleteItem={this.handleDeleteItem} onModifyItem={this.handleodifyItem}/>
        }
        {
          active === CHART_VIEW && '这是图表模式'
        }
      </React.Fragment>
    );
  };
}

export default Home;