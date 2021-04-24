import React, { Component } from 'react'
import CategryList from './CategryList';
import Navi from './Navi'
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap'

export default class App extends Component {
  state = { currentCategory: "", products: [] }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(dataa => this.setState({ products: dataa }));
  }


  render() {

    let categoryInfo = { title: "Category List" }
    let productInfo = { title: "Product List" }

    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList
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

