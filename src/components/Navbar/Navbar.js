import React, { useState } from "react";
import images from "../../constants/images";
import { CartIconButton } from "../../components";
import { MdDeleteOutline, MdOutlineClose } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";

import "./Navbar.scss";

const Navbar = (props) => {

    const { cartItems, emptyCart } = props;

    const navbarItems = ["Collections", "Men", "Women", "About", "Contact"];
    const [active, setActive] = useState(0);

    const [shoppingCartActive, setShoppingCartActive] = useState(false);

    const openShoppingCart = () => {
        setShoppingCartActive(true);
    }

    const closeShoppingCart = () => {
        setShoppingCartActive(false);
    }

    // small navbar menu
    const [navSmallActive, setNavSmallActive] = useState(false);

    const openNavSmall = () => {
        setNavSmallActive(true);
    }

    const closeNavSmall = () => {
        setNavSmallActive(false);
    }

    // close function for overlay
    const closeFunc = () => {
        setShoppingCartActive(false);
        setNavSmallActive(false);
    }

  return (
    <div className="app__navbar-wrap flex__center">
        <nav className="app__navbar">

            <div className="app__navSmall">
                <CgMenuLeft
                    onClick={openNavSmall}
                    style={{fontSize: "2rem", cursor: "pointer"}} />
                {navSmallActive && (
                    <div className={`app__navbar-links_smallscreen ${navSmallActive && "slider__animation_open_smallNav"}`}>
                        <MdOutlineClose                    
                            onClick={closeNavSmall}
                            style={{fontSize: "2rem", cursor: "pointer", color: "#000"}} />
                        <ul className="app__navbar-links_ul_small">
                            {navbarItems.map( (item, index) => (
                                <li
                                className="app__navbar-links_li"
                                key={item + index}
                                onClick={ () => {
                                    setActive(index);
                                }} 
                                >
                                    <a
                                    className="app__navbar-links_anchor p__kumbhsans" 
                                    href={`#${item}`}
                                    onClick={closeNavSmall}
                                    >
                                    {item}
                                    </a>
                                </li>
                            ))}
                        </ul> 
                    </div>
                )}
            </div>
            <div className="app__navbar-logo">
                <a href="/"><img src={images.logo} alt="navbar logo" /></a>
            </div>

            <div className="app__navbar-links">
                <ul className="app__navbar-links_ul">
                    {navbarItems.map( (item, index) => (
                        <li
                        className={`app__navbar-links_li ${active === index ? "active-li" : ""}`}
                        key={item + index}
                        onClick={ () => {
                            setActive(index);
                        }} 
                        >
                            <a className="app__navbar-links_anchor p__kumbhsans" href={`#${item}`}>
                            {item}
                            </a>
                        </li>
                    ))}
                </ul>    
            </div>

            <div className="app__navbar-profile">
                <CartIconButton 
                    openShoppingCart={openShoppingCart}
                />
                <h1 className={` headtext__kumbhsans-small ${cartItems === 0 ? "display__none" : ""}`} style={{marginRight: "2rem"}}>{cartItems}</h1>
                <img className="app__navbar-profile_avatar" src={images.Avatar} alt="avatar" />
            </div>

            {shoppingCartActive && (
            <div className={`app__shoppingcart ${shoppingCartActive ? "slider__animation_open_cart" : ""}`}>
                <MdOutlineClose className="shoppingcart__close" onClick={closeShoppingCart} />
                <div className="app__shoppingcart-top">
                    <h2 className="headtext__kumbhsans-small">Cart</h2>
                </div>
                <div className="app__shoppingcart-bottom">
                    {cartItems ? (
                        <>
                        <div className="app__shoppingcart_item">
                            <div className="app__shoppingcart_item-img">
                                <img src={images.product01} alt="item" />
                            </div>
                            <div className="app__shoppingcart_item-content">
                                <p className="p__kumbhsans">Fall Limited Edition Sneakers</p>
                                <p className="p__kumbhsans" id="p__price">$125.00 x {cartItems}</p>
                                <div className="app__shoppingcart-line" />
                            </div>
                                <MdDeleteOutline 
                                    className="app__shoppingcart_item-delete"
                                    onClick={emptyCart}
                                />
                        </div>
                        <div className="app__shoppingcart-total">
                            <h1 className="headtext__kumbhsans-small">Total: ${cartItems * 125.00}.00</h1>
                        </div>
                        <div className="app__shoppingcart-checkout">
                            <button onClick={emptyCart}>
                                <h2>Checkout</h2>
                            </button>
                        </div>
                        </>
                    ) : (
                        <div className="flex__center">
                            <h2
                            className="headtext__kumbhsans-small"
                            style={{margin: "5rem auto"}}
                            >Your cart is empty.</h2>
                        </div>
                    )}
                </div>
            </div>
            )}

            {shoppingCartActive || navSmallActive ? (
                <div className="app__shoppingcart_overlay" onClick={closeFunc}/>
            ) : null}

        </nav>
    </div>
  )
}

export default Navbar;