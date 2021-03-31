import React, { Component } from 'react';
import './item.css';

export class item extends Component {
    render() {
        let { id, title, unitprice, quantity, img } = this.props.item;
        return (
            <div style={{ gridRowEnd: 'span 0' }}>
                <div className="menu">
                    <h3 className="">{title}</h3>
                    <div>
                        <img src={img} width="150" height="150" alt={title} />
                    </div>

                    <span className="mr-4"> Qty:
                    <span><button onClick={this.props.addItem.bind(this, id)} className="btnStylePlus">+</button></span>
                        <span className="pl-2">{quantity}</span>
                        <span><button onClick={this.props.lessItem.bind(this, id)} className="btnStyleMinus">-</button></span>

                    </span>
                    <span> ${unitprice}</span>
                </div>
            </div>
        );
    }
}


export default item
