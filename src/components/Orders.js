import React, { Component } from 'react';
import OrderItem from './OrderItem';
import PropTypes from 'prop-types';


export class Orders extends Component {
    render() {
        return (
            this.props.orders.map((orderItem) => (
                <OrderItem key={orderItem.id} orderItem={orderItem} />
            ))
        )
    }
}

//PropTypes
Orders.propTypes = {
    orders: PropTypes.array.isRequired
}

export default Orders
