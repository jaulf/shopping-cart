import React, {Component} from "react";
import {connect} from 'react-redux';
import {Link} from "react-router-dom"
import { RemoveFromCart, AddQuantity, SubQuantity } from "./action/cartAction";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'


class Cart extends Component {

    handleRemoveItem = (id) => {
        this.props.removeItem(id);
    }

    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }

    handleSubQuantity = (id) => {
        this.props.subQuantity(id);
    }

    render(){

        const tabHead = this.props.items.length ? (
          
        <div class="cart-table-head">
        
        <div style= {{order: 1}} class="tab-head"><p>item</p></div>
        <div style={{order: 2}} class="tab-head"><p>&nbsp;</p></div>
        <div style={{order: 3}} class="tab-head"><p>Price</p></div>
        <div style={{order: 4}} class="tab-head">
            <p>quantity</p>
        </div>
        <div style={{order: 5}} class="tab-head"><p>action</p></div>
            
        </div>
        
        ) : "";

        const checkOut = this.props.items.length ?(

            <div class="checkout">
            <p>Total : ₦ {this.props.total}</p>
            <button>Checkout</button>
            </div>

        ) : "";

        const addedItems = this.props.items.length ? this.props.items.map(item => {
            return (
                <div class="cart-table" key={item.id}>
                    <div style={{order: 1}} class="tab-cell">
                        <img src={item.img} style={{width: "130px" , height: "100px"}} />
                    </div>
                    <div style={{order: 2}} class="tab-cell">{item.title}</div>
                    <div style={{order: 3}} class="tab-cell">₦{item.price}</div>
                    <div style={{order: 4}} class="tab-cell">
                        <div style={{display: 'block'}}>
                        <div class="quantity-wrap">
                        <Link to="/Cart" ><button onClick={() => {this.handleAddQuantity(item.id)}} class="one"><FontAwesomeIcon icon={faCaretUp} /></button></Link>
                        <div class="two">{item.quantity}</div>
                        <Link to="/Cart" ><button onClick={() => {this.handleSubQuantity(item.id)}} class="three"><FontAwesomeIcon icon={faCaretDown} /></button></Link>
                        </div>
                        </div>
                    </div>
                    <div style={{order: 5}} class="tab-cell"><Link onClick={() => {this.handleRemoveItem(item.id)}} to="/Cart">remove</Link></div>
                </div>
            )
        }) :  
        (<p>Nothing to see here.</p>)

        return (
            <section class="cart-container-section">
                <div class="cart-wrapper">
                <h1 style={{fontWeight:400 , fontSize: '24px'}}>Shopping Cart</h1>
                <h2 style={{fontWeight: 'lighter'}}>You ordered :</h2>
                    {tabHead}
                    {addedItems}
                    {checkOut}
                </div>  
            </ section>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem : (id) => {dispatch(RemoveFromCart(id))},
        addQuantity : (id) => {dispatch(AddQuantity(id))},
        subQuantity : (id) => {dispatch(SubQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);