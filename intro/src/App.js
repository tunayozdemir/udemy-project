import React, { Component } from 'react'
import CategryList from './CategryList';
import Navi from './Navi'
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap'

export default class App extends Component {
  state = { currentCategory: "" }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
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

