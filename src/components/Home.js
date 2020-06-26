import React, { Component } from 'react';
import { connect } from 'react-redux';
import {AddToCart} from "./action/cartAction";

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddToCart: (id)=>{dispatch(AddToCart(id))}
    }
}

 class Home extends Component{
      
      addToCart() {
          document.getElementById("pop-wrap").style.display = "flex";
      }
      
      closePopUp() {
          document.getElementById("pop-wrap").style.display = "none";
      }

    handleClick = (id) => {
        this.props.AddToCart(id);
    } 

    render(){

        let itemList = this.props.items.map(item=>{
            return(
                <div key={item.id}>
                    <img src={item.img} style={{}} />
                    <p>{item.title}</p>
                    <p>₦{item.price}</p>
                    <button onClick={() => {this.handleClick(item.id); this.addToCart() }} >Add to Cart</button>
                </div>
            )
        })    

        return(
            <span> 
            <div id="pop-wrap" class="pop-wrap"><div class="pop-up"><p>Your item has been added to the cart</p><span onClick={() => {this.closePopUp() }}> x </span> </div></div>
            <section class="container-section">
            <h2>Welcome to our store's homepage !</h2>
            <div class="container">
                {itemList}
            </div>
            </section>
            </span>

        )
    }  
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)