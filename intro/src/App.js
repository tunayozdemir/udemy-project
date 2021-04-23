import React from 'react'
import CategryList from './CategryList';
import Navi from './Navi'
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap'

function App() {
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
            <CategryList info={categoryInfo} />
          </Col>
          <Col xs="9">
            <ProductList info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
