import React from 'react';
// import ReactDOM from 'react-dom';
import {padLeft, range} from '../util';
class MonthPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      selectedYear: this.props.year,
      selectedMonth: this.props.month
    };
    this.togglePicker = this.togglePicker.bind(this);
    this.selectYear = this.selectYear.bind(this);
    this.selectMonth = this.selectMonth.bind(this);
  }
  togglePicker(e){
    e.preventDefault();
    this.setState({
      isShow: !this.state.isShow
    });
  };
  activeClass(current, val) {
    return current === val ? 'dropdown-item active' : 'dropdown-item';
  }
  selectYear(e, year) {
    e.preventDefault();
    this.setState({
      selectedYear: year
    });
  }
  selectMonth(e, month) {
    e.preventDefault();
    this.setState({
      selectedMonth: month,
      isShow: false
    });
  }
  componentDidMount() {
    // const dom = ReactDOM.findDOMNode(this);
    // const _this = this;
    // const panel = document.querySelector('.select-panel');
    // document.addEventListener('click', () => {
      // this.setState({
      //   isShow: false
      // });
      // dom.style.display = 'none';
    // });
    // dom.onClick = (e) => {
    //   console.log(e);
    //   e.stopPropagation();
    //   return;
    // };
    // panel.addEventListener('click', (e) => {
    //   console.log(e);
    //   e.stopPropagation();
      // return;
    // });
  }
  render() {
    // let { year , month } = this.props;
    let { isShow, selectedYear, selectedMonth} = this.state;
    let monthRange = range(1 ,12);
    let yearRange = range(-4, 8).map(item => {
      return 2019 + item;
    });
    return (
      <div className='dropdown month-picker-component'>
        <button 
          className="btn dropdown-toggle btn-primary" 
          type='button'
          onClick={this.togglePicker}
          >
          {`${selectedYear}-${padLeft(selectedMonth)}`}
        </button>
       <div className='m-3 text-center select-panel' style={{background: '#fff',position:'absolute', zIndex:'999'}}>
        { isShow && <div className='d-flex border text-center'>
          <div className='col-6 border-right'>
              {isShow && 
                <div>
                  {yearRange.map((item, index) => {
                      return <p key={index}>
                        <a href='/' 
                          className={this.activeClass(item, selectedYear)}
                          onClick={(e) => {this.selectYear(e, item)}}
                        >{padLeft(item)} 年</a>
                      </p>
                    })}
                </div>
              }
            </div>
            <div>
              {isShow && 
                  <div>
                    {monthRange.map((item, index) => {
                      return <p key={index}>
                        <a 
                          href='/' 
                          className={this.activeClass(item, selectedMonth)}
                          onClick={(e) => {this.selectMonth(e, item)}}
                          >{padLeft(item)} 月</a></p>
                    })}
                  </div>
                }
            </div>
         </div>}
       </div>
      </div>
    );
  };
};

export default MonthPicker;