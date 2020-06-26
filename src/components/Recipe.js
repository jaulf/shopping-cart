import React, {Component} from "react";
import {addShipping, subShipping} from "./action/cartAction"
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        total : state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addShipping : () => {dispatch(addShipping())},
        subShipping : () => {dispatch(subShipping())}
    }
}

class Recipe extends Component {

    componentWillUnmount() {
        if(this.refs.shipping.checked)
            this.props.subShipping()
    }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.subShipping();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="collection">
                    <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+6$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                    </div>
                    <div className="checkout">
                        <button className="waves-effect waves-light btn">Checkout</button>
                    </div>
                 </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)