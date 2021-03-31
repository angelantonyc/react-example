import React, { Component } from 'react'
import './OrderItem.css'; 
import PropTypes from 'prop-types';


export class OrderItem extends Component {
    
    render() {
        let { title, price, quantity } = this.props.orderItem;
        return (
            <div className="row orderitem">
                
                <span className="col-5 title">{title}</span>
                <span className="col-3 quantity"> {quantity} {(quantity === 1) ? 'No' : 'No.s'}</span>
                <span className="col-3 price"> ${price}</span>
                
            </div>
        );
    }
}

OrderItem.propTypes = {
    orderItem: PropTypes.object.isRequired
}

export default OrderItem
