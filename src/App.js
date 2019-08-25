import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PriceList from './components/PriceList';
const data = [{
  id: '1',
  title: '我要烤公',
  price: 200,
  date: '2019-01-01',
  category: {
    id: 1,
    name: '旅行',
    type: 'outcome',
    icon: 'ios-plane'
  }
}];
function App() {
  return (
    <div>
      <header>
        <PriceList items={data} onDeleteItem={(e) => {alert(e.id)}} onModifyItem={(e) => {alert(e.id)}}/>
      </header>
    </div>
  );
}

export default App;
