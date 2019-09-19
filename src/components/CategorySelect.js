import React from 'react';
import Ionicon from 'react-ionicons';

class CategorySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategoryID: props.selectedCategory && props.selectedCategory.id
    };
    // this.selectCategory = this.selectCategory.bind(this);
  }
  selectCategory(event, item) {
    this.setState({
      selectedCategoryID: item.id
    });
    this.props.onSelectCategory(item);
    event.preventDefault();
  }
  render() {
    const {categories} = this.props;
    const {selectedCategoryID} = this.state;
    return (
      <div className='category-select-component'>
        <div className='row'>
          {
            categories.map((item, index) => {
              const activeClassName = (selectedCategoryID === item.id) ? 'categories-item active' : 'categories-item'
              return (
              <div className={activeClassName} key={index} onClick={(event) => {this.selectCategory(event,item)}}>
                <Ionicon
                  className='rounded-circle'
                  fontSize='50px'
                  color='#555'
                  icon={item.iconName}
                />
              </div>
             )
            })
          }
        </div>
      </div>
    );
  };
};
export default CategorySelect;