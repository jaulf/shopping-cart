import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }
    
    render() {

        const cartNumber = this.props.items.length ? this.props.items.length : "";

    return (
        <span>
            <div id="mySidenav" class="sidenav">
        
                <a class="closebtn" onClick={() => {this.closeNav()}}>&times;</a>
                <a>Groceries</a>
                <a>Appliances</a>
                <a>Fashion</a>
                <a>Drinks</a>
                <a>Foods</a>
                <a>Alcohol</a>
                
            </div>

            <nav id="nav-wrapper" class="nav-wrapper">
                <div class="nav-container">
                <div style={{flex:1}}><a onClick={() => {this.openNav()}}>☰</a></div>
                <div style={{flex:8}}><Link style={{color: 'black'}} to="/">Store</Link></div>
                <div class="cart" style={{flex:1}}>
                    <Link class="icon-class" to="/Cart"><FontAwesomeIcon style={{fontSize: '21px', color: "#222"}} icon={faShoppingCart} /></Link>
                    {cartNumber}
                </div>
                
                </div>
            </nav>
        </span>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        items : state.addedItems
    }
}

export default connect(mapStateToProps)(Navbar);