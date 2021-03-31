import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class MessageSubmit extends Component {
    state = { message: 'Please Order and then click submit' };
    onClick = (event) => {
        if (this.props.totalprice > 0) {
            this.setState({ message: 'Thanks for your order, Your order will be ready shortly.'});
        } else {
            this.setState({ message: 'Please Order before submitting' });
        }
    } 
    render() {
        return (
            <div>
                    <button className="btn btn-outline-danger" type="button" onClick={this.onClick} >
                        Submit Order
                      </button>
                    <h4 className="m-5">{this.state.message}</h4>
            </div>
        )
    }
}

//PropTypes
MessageSubmit.propTypes = {
    totalprice: PropTypes.number.isRequired
}

export default MessageSubmit
