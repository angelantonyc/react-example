import './Items.css';
import React, { Component } from 'react';
import Item from './Item';
import PropTypes from 'prop-types';


const Items = (props) => {
    const items = props.items.map((item) => {
        return <Item key={item.id} item={item} addItem={props.addItem} lessItem={props.lessItem}/>
    });
    return <div className="menu-list">{items}</div>

}

//PropTypes
Items.propTypes = {
    items: PropTypes.array.isRequired,
    addItem: PropTypes.func.isRequired,
    lessItem: PropTypes.func.isRequired
}

export default Items
