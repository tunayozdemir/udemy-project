import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
export default class CategryList extends Component {

    state = {
      categories: [],
    }

    // Component yerleşti anlamına gelir.life cycle
    // .map sadece array 'e uygulanır
    componentDidMount(){
      this.getCategories();
    }

    getCategories = () => {
      fetch("http://localhost:3000/categories")
      .then(response=>response.json())
      .then(data=>this.setState({categories:data}));
    }
  
  render() {
    return (
      <div>
        <h5>{this.props.info.title}</h5>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              >
              {category.categoryName}
            </ListGroupItem>
          ))
          }
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
