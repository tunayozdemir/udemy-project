import React, { Component } from 'react'

export default class ProductList extends Component {
  // Eski versiyonlarda constractor gerekli olmasına rağmen artık gerekli değil. 
  //this.pros diyerek değeri alabiliriz

  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiments" }]
  }

  render() {
    return (
      <div>
        <h2>{this.props.info.title}-{this.props.currentCategory}</h2>
      </div>
    )
  }
}
