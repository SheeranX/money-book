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
    // this.node = React.createRef();
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
    document.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click');
  }
  handleClick = (e) => {
    if (this.node.contains(e.target)) return
    this.setState({
      isShow: false
    });
  }
  render() {
    // let { year , month } = this.props;
    let { isShow, selectedYear, selectedMonth} = this.state;
    let monthRange = range(1 ,12);
    let yearRange = range(-4, 8).map(item => {
      return 2019 + item;
    });
    return (
      <div className='dropdown month-picker-component' ref={(ref) => {this.node = ref}}>
        <button 
          className="btn dropdown-toggle btn-primary" 
          type='button'
          onClick={this.togglePicker}
          >
          {`${selectedYear}-${padLeft(selectedMonth)}`}
        </button>
       <div className='m-3 text-center select-panel' style={{background: '#fff',position:'absolute', zIndex:'999'}}>
        { isShow && <div className='d-flex border text-center'>
          <div className='col-6 border-right select-panel-content'>
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