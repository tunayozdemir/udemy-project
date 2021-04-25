import React, { Component } from 'react'
import CategryList from './CategryList';
import Navi from './Navi'
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap'
import alertify from 'alertifyjs'

export default class App extends Component {
  state = { currentCategory: "", products: [], cart: [] }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category)
    this.getProducts(category.id)
  }

  // getProducts 'ı çalıştırır.
  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(dataa => this.setState({ products: dataa }));
  }

  // sepete ekleme işlemi
  addtToCart = (product) => {
    let newCart = this.state.cart;
    var addeItem = newCart.find(c => c.product.id === product.id);
    if (addeItem) {
      addeItem.quantity += 1;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " (added to cart)")
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + " (delete to cart)");
  }


  render() {

    let categoryInfo = { title: "Category List" }
    let productInfo = { title: "Product List" }

    return (
      <div className="App">
        <Container>
          <Navi
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
          />
          <Row>
            <Col xs="3">
              <CategryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>
            <Col xs="9">
            
              <ProductList
                addtToCart={this.addtToCart}
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

