import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Items from './components/Items';
import Orders from './components/Orders';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MessageSubmit from './components/MessageSubmit';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import pizza from './components/images/pizza.jpg';
import fishchips from './components/images/fishchips.jpg';
import grilledsandwich from './components/images/grilledsandwich.jpg';
import beefburger from './components/images/beefburger.jpg';
import schnitzel from './components/images/schnitzel.jpg';
import garlicbread from './components/images/garlicbread.jpg';

class App extends Component {

  state = {
    items: [
      {
        id: uuidv4(),
        title: 'Gourmet-Pizza',
        unitprice: 20.00,
        price: 20.00,
        quantity: 0,
        img: pizza
      },
      {
        id: uuidv4(),
        title: 'Fish & Chips',
        unitprice: 30.00,
        price: 30.00,
        quantity: 0,
        img: fishchips
      },
      {
        id: uuidv4(),
        title: 'Grilled Sandwich',
        unitprice: 10.00,
        price: 10.00,
        quantity: 0,
        img: grilledsandwich
      },
      {
        id: uuidv4(),
        title: 'Beef Burger',
        unitprice: 15.00,
        price: 15.00,
        quantity: 0,
        img: beefburger
      },
      {
        id: uuidv4(),
        title: 'Schnitzel',
        unitprice: 20.00,
        price: 20.00,
        quantity: 0,
        img: schnitzel
      },
      {
        id: uuidv4(),
        title: 'Garlic Bread',
        unitprice: 5.00,
        price: 5.00,
        quantity: 0,
        img: garlicbread
      },
    ],
    orderedItems: [],
    totalPrice: 0.00

  }

  //To increase the quantity
  addItem = (id) => {
    let price;
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.quantity++;
          item.price = item.unitprice * item.quantity;
          price = item.unitprice + this.state.totalPrice;
        }
        return item;
      }),
      orderedItems: [...this.state.items.filter(item => item.quantity > 0)],
      totalPrice: price
    });
  }

  //To decrease the quantity
  lessItem = (id) => {
    let price = this.state.totalPrice;
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id && item.quantity > 0) {
          item.quantity--;
          item.price = item.unitprice * item.quantity;
          price = this.state.totalPrice - item.unitprice;
        }
        return item;
      }),
      orderedItems: [...this.state.items.filter(item => item.quantity > 0)],
      totalPrice: price

    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/"
              render={props => (
              <React.Fragment>
                <div className="ui grid"
                  style={{ marginTop: '10px' }} >
                  <div className="ui row">
                    <div className="nine wide column">
                      <Items items={this.state.items} addItem={this.addItem} lessItem={this.lessItem} />
                    </div>
                    <div className="seven wide column">
                        <h1>Your Order: </h1>
                      <Orders orders={this.state.orderedItems} />
                      <h3>Total Price: $ {this.state.totalPrice}</h3>
                      <MessageSubmit totalprice={this.state.totalPrice}/>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            )} />

            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
